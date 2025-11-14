import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Pay599Button from "./Pay599Button";

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceType: "horoscope" | "numerology" | "gems" | "muhurt" | "pooja";
}

const ConsultationModal = ({ open, onOpenChange, serviceType }: ConsultationModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultationType: "self",
    otherName: "",
    otherGender: "",
    purpose: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    additionalInfo: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // 🔹 1. Save data to MongoDB
  try {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/consultations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        serviceType,
      }),
    });
  } catch (err) {
    console.error("❌ Failed to store consultation:", err);
  }

  // 🔹 2. Send WhatsApp Message
  let message = `*New ${serviceType.toUpperCase()} Consultation Request*\n\n`;
  message += `*Name:* ${formData.name}\n`;
  message += `*Email:* ${formData.email}\n`;
  message += `*Phone:* ${formData.phone}\n`;

  if (serviceType === "gems") {
    message += `*Consultation Type:* ${formData.consultationType}\n`;
    if (formData.consultationType === "other") {
      message += `*Other Person Name:* ${formData.otherName}\n`;
      message += `*Gender:* ${formData.otherGender}\n`;
    }
    message += `*Purpose:* ${formData.purpose}\n`;
  }

  message += `*Birth Date:* ${formData.birthDate}\n`;
  message += `*Birth Time:* ${formData.birthTime}\n`;
  message += `*Birth Place:* ${formData.birthPlace}\n`;

  if (formData.additionalInfo) {
    message += `*Additional Info:* ${formData.additionalInfo}\n`;
  }

  const whatsappUrl = `https://wa.me/919553231199?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");

  // 🔹 3. Reset and close modal
  onOpenChange(false);
  setFormData({
    name: "",
    email: "",
    phone: "",
    consultationType: "self",
    otherName: "",
    otherGender: "",
    purpose: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    additionalInfo: "",
  });
};


  const getTitle = () => {
    switch (serviceType) {
      case "horoscope":
        return "Request Horoscope Consultation";
      case "numerology":
        return "Request Numerology Report";
      case "gems":
        return "Request Gem Recommendation";
      case "muhurt":
        return "Request Muhurt Consultation";
      case "pooja":
        return "Book Pooja/Homa Service";
      default:
        return "Consultation Request";
    }
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.birthDate.trim() !== "" &&
    formData.birthTime.trim() !== "" &&
    formData.birthPlace.trim() !== "" &&
    (serviceType !== "gems" ||
      (formData.consultationType === "self" ||
        (formData.otherName.trim() !== "" &&
          formData.otherGender.trim() !== "" &&
          formData.purpose.trim() !== "")));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#b1ac9c] rounded-2xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-primary text-center">
            {getTitle()}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-3">
          {/* Full Name */}
          <div>
            <Label htmlFor="name" className="text-secondary">Full Name *</Label>
            <Input
              className="border-primary mt-2 placeholder:text-gray-700"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-secondary">Email *</Label>
              <Input
                className="border-primary placeholder:text-gray-700"
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-secondary">Phone Number *</Label>
              <Input
                className="border-primary placeholder:text-gray-700"
                id="phone"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>

          {/* Gems Fields */}
          {serviceType === "gems" && (
            <>
              <div>
                <Label className="text-secondary">Consultation For *</Label>
                <RadioGroup
                  value={formData.consultationType}
                  onValueChange={(value) => setFormData({ ...formData, consultationType: value })}
                  className="flex gap-6 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="self" id="self" />
                    <Label htmlFor="self">Self</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.consultationType === "other" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="otherName" className="text-secondary">Other Person Name *</Label>
                    <Input
                      className="mt-2 border-primary placeholder:text-gray-700"
                      id="otherName"
                      value={formData.otherName}
                      onChange={(e) => setFormData({ ...formData, otherName: e.target.value })}
                      placeholder="Enter name"
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-secondary">Gender *</Label>
                    <RadioGroup
                      value={formData.otherGender}
                      onValueChange={(value) => setFormData({ ...formData, otherGender: value })}
                      className="flex gap-6 mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="purpose" className="text-secondary">Purpose to Wear *</Label>
                <Select
                  value={formData.purpose}
                  onValueChange={(value) => setFormData({ ...formData, purpose: value })}
                >
                  <SelectTrigger className="mt-2 border-primary placeholder:text-gray-700">
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="business">Business and Wealth</SelectItem>
                    <SelectItem value="career">Job and Career</SelectItem>
                    <SelectItem value="relations">Personal Relations</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {/* Birth Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="birthDate" className="text-secondary">Birth Date *</Label>
              <Input
                className="border-primary text-center placeholder:text-gray-700"
                id="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                required
              />
            </div>

            <div className="relative">
              <Label htmlFor="birthTime" className="text-secondary">
                Birth Time *
              </Label>

              <div className="relative">
                <Input
                  className="border-primary placeholder:text-gray-700 pl-10 text-center" // 👈 adds left padding
                  id="birthTime"
                  type="time"
                  value={formData.birthTime}
                  onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                  required
                />

                {/* Clock icon inside input */}
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-lg">
                  🕒
                </span>
              </div>
            </div>


            <div>
              <Label htmlFor="birthPlace" className="text-secondary">Birth Place *</Label>
              <Input
                className="border-primary placeholder:text-gray-700"
                id="birthPlace"
                value={formData.birthPlace}
                onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                placeholder="Enter city"
                required
              />
            </div>
          </div>

          {/* Additional Info */}
          {serviceType !== "gems" && (
            <div>
              <Label htmlFor="additionalInfo" className="text-secondary">Additional Information</Label>
              <Textarea
                className="border-primary placeholder:text-gray-700"
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                placeholder="Any specific questions or concerns?"
                rows={3}
              />
            </div>
          )}

          {/* Submit / Payment */}
          {serviceType !== "gems" ? (
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground divine-glow"
            >
              Send via WhatsApp
            </Button>
          ) : (
            <Pay599Button name={formData.name} email={formData.email} disabled={!isFormValid} />
          )}

          <p className="text-xs text-center text-secondary">
            Your request will be sent to our WhatsApp for immediate assistance
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
