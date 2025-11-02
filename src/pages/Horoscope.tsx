import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SlokaCard from "@/components/SlokaCard";
import { Star } from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";

const Horoscope = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <Star className="h-16 w-16 mx-auto mb-4 text-secondary animate-twinkle" />
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-6">
            Janma Patrika
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your destiny, decoded through the wisdom of planets
          </p>
        </div>

        {/* Sloka */}
        <div className="mb-16">
          <SlokaCard 
            sloka="జననీ జన్మ సౌఖ్యనాం వర్ధనీ కుల సంపదాం పదవీ పూర్వ పుణ్యనాం లిఖ్యతే జన్మ పత్రిక||"
            translation="The birth chart is written as a record of past merits, bringing joy at birth, prosperity to the family, and enhancement of fortunes."
          />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Information Section */}
          <div className="space-y-6">
            <Card className="p-8 border-2 border-secondary/30">
              <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
                What is Janma Patrika?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Janma Patrika, also known as the birth chart or horoscope, is a divine map of 
                  the celestial bodies at the exact moment of your birth. This sacred document 
                  captures the positions of planets, stars, and cosmic energies that shape your 
                  life's journey.
                </p>
                <p className="leading-relaxed">
                  Our comprehensive horoscope analysis includes:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <span>Detailed birth chart (Rashi Kundali) analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <span>Planetary positions and their influences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <span>Dasha predictions and timing of events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <span>Career, marriage, and health predictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <span>Remedies and gemstone recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <span>Yogas and doshas in your chart</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary/30">
              <h3 className="text-2xl font-bold font-playfair text-primary mb-4">
                Why Choose Our Horoscope Service?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary text-xl">🌟</span>
                  <span>Authentic Vedic astrology traditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary text-xl">🌟</span>
                  <span>Personalized analysis by experienced astrologer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary text-xl">🌟</span>
                  <span>Detailed written report delivered to your email</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary text-xl">🌟</span>
                  <span>Practical remedies and guidance</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* CTA Section */}
          <div>
            <Card className="p-8 border-2 border-secondary/30 sticky top-24 text-center">
              <Star className="h-16 w-16 mx-auto mb-4 text-secondary animate-twinkle" />
              <h2 className="text-3xl font-bold font-playfair text-primary mb-4">
                Ready for Your Horoscope?
              </h2>
              <p className="text-muted-foreground mb-6">
                Get personalized Vedic astrology insights delivered within 24-48 hours
              </p>
              <Button 
                size="lg"
                onClick={() => setModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground divine-glow px-8 py-6 text-lg"
              >
                Request Horoscope Now
              </Button>
            </Card>
          </div>
        </div>
      </div>
      
      <ConsultationModal 
        open={modalOpen} 
        onOpenChange={setModalOpen}
        serviceType="horoscope"
      />
    </div>
  );
};

export default Horoscope;
