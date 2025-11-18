import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import { useNavigate } from "react-router-dom";
import horoscopeServices, { HoroscopeService } from "@/data/horoscopeServices";

const HoroscopeComponent = () => {
  const [selectedService, setSelectedService] = useState<HoroscopeService>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleServiceClick = (service: any) => {
    navigate(`/horoscope/${service.slug}`);
  };

  return (
    <div className="min-h-screen pb-16">
      <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-primary mb-4">
              Our Horoscope Services
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Accurate and personalized horoscope guidance based on your birth chart, planets, and cosmic alignment.
                          </p>
          </div>
      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {horoscopeServices.map((service, index) => {
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-2 border-primary/20 hover:border-secondary/50"
                onClick={() => handleServiceClick(service)}
              >
                <div className="relative h-64 overflow-hidden">
                  {" "}
                  {/* Increased height */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold font-playfair text-primary mb-2 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>

                  {service.price && (
                    <p className="text-2xl font-bold text-secondary mb-3">
                      {service.price}
                    </p>
                  )}

                  <p className="text-secondary text-sm mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>

                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {" "}
                    View Details{" "}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <ServiceDetailModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title={selectedService?.title || ""}
        price={selectedService?.price}
        description={selectedService?.description || ""}
        benefits={selectedService?.benefits}
        process={selectedService?.process}
        deliverables={selectedService?.deliverables}
        serviceType="horoscope"
      />
    </div>
  );
};

export default HoroscopeComponent;
