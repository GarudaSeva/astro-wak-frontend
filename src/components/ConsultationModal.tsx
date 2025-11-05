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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#b1ac9c]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-primary">
            {getTitle()}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              className="border-primary mt-2"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                className="border-primary"
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                className="border-primary"
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 "
                required
              />
            </div>
          </div>

          {serviceType === "gems" && (
            <>
              <div>
                <Label>Consultation For *</Label>
                <RadioGroup
                  value={formData.consultationType}
                  onValueChange={(value) => setFormData({ ...formData, consultationType: value })}
                  className="flex gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="self" id="self" />
                    <Label htmlFor="self" className="font-normal cursor-pointer">Self</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="font-normal cursor-pointer">Other</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.consultationType === "other" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="otherName">Other Person Name *</Label>
                    <Input
                      className="mt-2 border-primary"
                      id="otherName"
                      value={formData.otherName}
                      onChange={(e) => setFormData({ ...formData, otherName: e.target.value })}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <Label className="ml-8">Gender *</Label>
                    <RadioGroup
                      value={formData.otherGender}
                      onValueChange={(value) => setFormData({ ...formData, otherGender: value })}
                      className="flex gap-8 mt-4 ml-8"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male" className="font-normal cursor-pointer">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female" className="font-normal cursor-pointer">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="purpose">Purpose to Wear *</Label>
                <Select
                  value={formData.purpose}
                  onValueChange={(value) => setFormData({ ...formData, purpose: value })}
                >
                  <SelectTrigger className="mt-2 border-primary">
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

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="birthDate">Birth Date *</Label>
              <Input
                className="border-primary"
                id="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <Label htmlFor="birthTime" className="mb-2 text-center">
                Birth Time *
              </Label>
              <Input
                className="border-primary text-center w-1/2" // 👈 centers text & sets width
                id="birthTime"
                type="time"
                value={formData.birthTime}
                onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="birthPlace">Birth Place *</Label>
              <Input
                className="border-primary"
                id="birthPlace"
                value={formData.birthPlace}
                onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                placeholder="City"
                required
              />
            </div>
          </div>
          {serviceType !== "gems" &&
            <div>
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                className="border-primary"
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                placeholder="Any specific questions or concerns?"
                rows={3}
              />
            </div>
          }

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
