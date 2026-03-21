import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface PayButtonProps {
  amount: number;
  title?: string;
  description?: string;
  name?: string;
  email?: string;
  disabled?: boolean;
  bookingData?: Record<string, unknown>;
  onSuccess?: (data: Record<string, unknown>) => void;
  onFailure?: (error: unknown) => void;
}

export default function PayButton({
  amount,
  title = `Pay ₹${amount}`,
  description = "AstroWak Payment",
  name,
  email,
  disabled = false,
  bookingData,
  onSuccess,
  onFailure,
}: PayButtonProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const amount_paise = amount * 100;

  const handlePayment = async () => {
    if (disabled) return;
    setLoading(true);

    try {
      // STEP 1: Create Order
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/payments/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount_paise }),
      });

      const order = (await res.json()) as { id?: string };

      if (!order || !order.id) {
        toast({
          title: "Order Creation Failed 😕",
          description: "Unable to create Razorpay order. Try again.",
          variant: "destructive",
        });
        return;
      }

      // STEP 2: Razorpay Options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: amount_paise,
        currency: "INR",
        name: "AstroWak",
        description,
        order_id: order.id,
        prefill: { name, email },
        theme: { color: "#d72323" },

        handler: async function (response: RazorpaySuccessResponse) {
          // STEP 3: Verify Payment
          const verifyRes = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/payments/verify-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount,
              amount_paise,
              name,
              email,
              bookingData,
              ...response,
            }),
          });

          const result = (await verifyRes.json()) as Record<string, unknown> & {
            success?: boolean;
          };

          if (result.success) {
            toast({
              title: "✅ Payment Successful",
              description: "Your payment has been verified!",
            });

            onSuccess?.(result); // 🔥 send data to parent
          } else {
            toast({
              title: "❌ Verification Failed",
              description: "Signature mismatch. Contact support.",
              variant: "destructive",
            });

            onFailure?.(result); // 🔥 send error to parent
          }
        },

        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);

      toast({
        title: "Payment Failed 😢",
        description: "Something went wrong. Try again.",
        variant: "destructive",
      });

      onFailure?.(error); // send error to parent
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading || disabled}
      className={`
        inline-flex h-12 items-center justify-center rounded-full px-6
        font-semibold text-white shadow-[0_20px_45px_-24px_rgba(180,30,30,0.9)]
        transition-all disabled:cursor-not-allowed disabled:opacity-60
        ${loading ? "bg-gray-400" : "bg-gradient-to-r from-primary to-secondary hover:opacity-95"}
      `}
    >
      {loading ? "Processing..." : title}
    </button>
  );
}
