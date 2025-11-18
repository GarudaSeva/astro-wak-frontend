import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface PayButtonProps {
  amount: number;
  title?: string;
  description?: string;
  name?: string;
  email?: string;
  disabled?: boolean;

  // NEW CALLBACKS ↓↓↓
  onSuccess?: (data: any) => void;
  onFailure?: (error: any) => void;
}

export default function PayButton({
  amount,
  title = `Pay ₹${amount}`,
  description = "AstroWak Payment",
  name,
  email,
  disabled = false,
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

      const order = await res.json();

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
        theme: { color: "#1f98adff" },

        handler: async function (response: any) {
          // STEP 3: Verify Payment
          const verifyRes = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/payments/verify-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount,
              amount_paise,
              name,
              email,
              ...response,
            }),
          });

          const result = await verifyRes.json();

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
        w-fit px-6 py-2 
        mx-auto 
        rounded-lg shadow-md font-semibold 
        transition-all disabled:opacity-60
        ${loading ? "bg-gray-400" : "bg-yellow-500 hover:bg-yellow-600 text-white"}
      `}
    >
      {loading ? "Processing..." : title}
    </button>
  );
}
