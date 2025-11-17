import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface PayButtonProps {
  amount: number;                // ₹ Amount (required)
  title?: string;                // Button title
  description?: string;          // Razorpay checkout description
  name?: string;                 // User name
  email?: string;                // User email
  disabled?: boolean;            // Disable button
}

export default function PayButton({
  amount,
  title = `Pay ₹${amount}`,
  description = "AstroWak Payment",
  name ,
  email ,
  disabled = false,
}: PayButtonProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const amount_paise = amount * 100;

  const handlePayment = async () => {
    if (disabled) return;
    setLoading(true);

    try {
      // 👉 STEP 1: Create Order on Backend
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

      // 👉 STEP 2: Razorpay Checkout Options
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
          // 👉 STEP 3: Verify Payment on Backend
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
          console.log(result , 'result of payment')

          if (result.success) {
            toast({
              title: "✅ Payment Successful",
              description: "Your payment has been verified!",
            });
          } else {
            toast({
              title: "❌ Verification Failed",
              description: "Signature mismatch. Contact support.",
              variant: "destructive",
            });
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
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading || disabled}
      className={`w-full font-semibold px-6 py-2 rounded-lg shadow-md transition-all disabled:opacity-60
      ${loading ? "bg-gray-400" : "bg-yellow-500 hover:bg-yellow-600 text-white"}`}
    >
      {loading ? "Processing..." : title}
    </button>
  );
}
