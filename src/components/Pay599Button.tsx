import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"; // ✅ ShadCN Toast Hook

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function Pay599Button({
  name = "BVV",
  email = "bvv@example.com",
  disabled = false,
}: {
  name?: string;
  email?: string;
  disabled?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast(); // ✅ Initialize toast

  const amount = 599;
  const amount_paise = 59900;

  const handlePayment = async () => {
    if (disabled) return;

    try {
      setLoading(true);

      // 1️⃣ Create order on backend
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount_paise }),
      });
      const order = await res.json();

      if (!order.id) {
        toast({
          title: "Order Creation Failed 😕",
          description: "Unable to create Razorpay order. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // 2️⃣ Razorpay Checkout
      const options = {
        key: "rzp_test_Rbm66o8JPEj0P8",
        amount: amount_paise,
        currency: "INR",
        name: "Astro Wak Booking",
        description: "Astrology Consultation ₹599",
        order_id: order.id,
        prefill: { name, email },
        theme: { color: "#fbbf24" },
        handler: async function (response: any) {
          // 3️⃣ Verify Payment
          const verify = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/verify-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              amount,
              amount_paise,
              ...response,
            }),
          });

          const data = await verify.json();

          if (data.success) {
            toast({
              title: "✅ Payment Successful",
              description: data.message || "Your booking has been confirmed.",
            });
          } else {
            toast({
              title: "❌ Payment Verification Failed",
              description: data.message || "Signature mismatch. Please contact support.",
              variant: "destructive",
            });
          }
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      toast({
        title: "Something Went Wrong 😢",
        description: "Unable to process your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading || disabled}
      className={`w-full font-semibold px-6 py-2 rounded-lg shadow-md transition-all disabled:opacity-60 ${
        loading || disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-yellow-500 hover:bg-yellow-600 text-white"
      }`}
    >
      {loading ? "Processing..." : "Pay ₹599"}
    </button>
  );
}
