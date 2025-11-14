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
        <div className="text-center mb-12 animate-fade-in-up mt-8">
          {/* <Star className="h-16 w-16 mx-auto mb-4 text-secondary animate-twinkle" /> */}
          <h1 className="text-5xl md:text-5xl font-bold font-playfair text-primary mb-6">
            Janma Patrika
          </h1>
          <p className="text-xl font-playfair text-secondary max-w-3xl mx-auto">
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
        <div className="space-y-8 mb-16">
          {/* Main Card - Full Width */}
          <Card className="p-8 border-2 border-secondary/30">
            <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
              What is Janma Patrika?
            </h2>
            <div className="space-y-4 font-playfair text-secondary leading-relaxed">
              <p>
                Janma Patrika, also known as the birth chart or horoscope, is a sacred astrological
                document that captures the exact planetary positions at the moment of your birth.
                This cosmic snapshot serves as your personal spiritual GPS, revealing the celestial
                influences that shape your destiny.
              </p>
              <p >
                Created using precise birth time, date, and location, your Janma Patrika is a
                comprehensive map of the twelve houses (bhavas) and nine planets (navagrahas).
                It's not just a prediction tool—it's a divine blueprint that helps you understand
                your strengths, challenges, and life purpose.
              </p>
              <br />
              <strong className="font-semibold font-playfair text-secondary ">
                Our detailed horoscope analysis includes:
              </strong>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Complete birth chart (Rasi and Navamsa)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Planetary positions and their significances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Dasha predictions (planetary periods)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Career, marriage, and financial prospects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Health indications and remedies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Auspicious timings for major life events</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Two Cards Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary/30">
              <h3 className="text-2xl font-bold font-playfair text-primary mb-4">
                What Your Horoscope Reveals
              </h3>
              <div className="space-y-3 font-playfair text-secondary">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <strong className="text-foreground">Life Purpose:</strong> Discover your dharma and soul's mission
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <strong className="text-foreground">Timing:</strong> Know when to act and when to wait
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <strong className="text-foreground">Relationships:</strong> Understand compatibility and marriage prospects
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <strong className="text-foreground">Remedies:</strong> Specific solutions to overcome obstacles
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-secondary/30 text-center">
              <Star className="h-16 w-16 mx-auto mb-4 text-secondary animate-twinkle" />
              <h2 className="text-3xl font-bold font-playfair text-primary mb-4">
                Get Your Horoscope
              </h2>
              <p className="mb-6 font-playfair text-secondary">
                Unlock the secrets of your cosmic blueprint today
              </p>
              <Button
                size="lg"
                onClick={() => setModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground divine-glow px-8 py-6 text-lg"
              >
                Request Horoscope
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
