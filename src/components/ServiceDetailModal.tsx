import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

interface ServiceDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  price?: string;
  description: string;
  benefits?: string[];
  process?: string[];
  deliverables?: string[];
  additionalInfo?: string;
  serviceType: "horoscope" | "numerology" | "gems" | "muhurt" | "pooja";
}

const ServiceDetailModal = ({
  open,
  onOpenChange,
  title,
  price,
  description,
  benefits,
  process,
  deliverables,
  additionalInfo,
  serviceType
}: ServiceDetailModalProps) => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const handleBookNow = () => {
    onOpenChange(false);
    setConsultationOpen(true);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-3xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-3xl font-playfair text-primary">{title}</DialogTitle>
            {price && <p className="text-2xl font-bold text-secondary">{price}</p>}
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] pr-4">
            <div className="space-y-6">
              <div>
                <p className="text-secondary leading-relaxed whitespace-pre-line">{description}</p>
              </div>

              {benefits && benefits.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold font-playfair text-primary mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-secondary mt-1">✦</span>
                        <span className="text-secondary">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {process && process.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold font-playfair text-primary mb-3">Process</h3>
                  <ul className="space-y-2">
                    {process.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="font-bold text-secondary">{index + 1}.</span>
                        <span className="text-secondary">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {deliverables && deliverables.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold font-playfair text-primary mb-3">Deliverables</h3>
                  <ul className="space-y-2">
                    {deliverables.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-secondary mt-1">✓</span>
                        <span className="text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {additionalInfo && (
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-secondary leading-relaxed whitespace-pre-line">
                    {additionalInfo}
                  </p>
                </div>
              )}
            </div>
          </ScrollArea>
          <div className="flex gap-4 pt-4 border-t">
            <Button
              onClick={handleBookNow}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground divine-glow"
              size="lg"
            >
              Book Now
            </Button>
            <Button
              onClick={() => onOpenChange(false)}
              variant="outline"
              size="lg"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <ConsultationModal
        open={consultationOpen}
        onOpenChange={setConsultationOpen}
        serviceType={serviceType}
      />
    </>
  );
};

export default ServiceDetailModal;
