import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SlokaCard from "@/components/SlokaCard";
import { Clock, Calendar, Heart, Home, Briefcase, GraduationCap, Car, Users, Baby, Stethoscope } from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import weddingImage from "@/assets/occasions/wedding.jpg";
import gruhaPravesamImage from "@/assets/occasions/gruha-pravesam.png";
import businessImage from "@/assets/occasions/business.jpg";
import vehicleImage from "@/assets/occasions/vehicle.jpg";
import engagementImage from "@/assets/occasions/engagement.jpg";
import namingImage from "@/assets/occasions/naming.jpg";
import medicalAdviceImage from "@/assets/occasions/medical-advice.png";
import educationImage from "@/assets/occasions/education.jpg";

const ShubhaMuhurt = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const occasions = [
    { title: "Wedding Ceremonies", description: "Auspicious timing for marriage rituals", image: weddingImage },
    { title: "Griha Pravesh", description: "Housewarming and moving in", image: gruhaPravesamImage },
    { title: "Business Opening", description: "Starting new ventures and enterprises", image: businessImage },
    { title: "Education Start", description: "Beginning academic pursuits", image: educationImage },
    { title: "Vehicle Purchase", description: "Buying new vehicles", image: vehicleImage },
    { title: "Engagement", description: "Betrothal ceremonies", image: engagementImage },
    { title: "Name Ceremonies", description: "Naming rituals for newborns", image: namingImage },
    { title: "Medical Procedures", description: "Surgeries and treatments", image: medicalAdviceImage },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up mt-8">
          {/* <Clock className="h-16 w-16 mx-auto mb-4 text-secondary animate-twinkle" /> */}
          <h1 className="text-5xl md:text-5xl font-bold font-playfair text-primary mb-6">
            Shubha Muhurt
          </h1>
          <p className="text-xl font-playfair text-secondary max-w-3xl mx-auto">
            Auspicious time for rituals, customs & celebrations
          </p>
        </div>

        {/* Sloka */}
        <div className="mb-16">
          <SlokaCard
            sloka="ఆదిత్యాది గ్రహస్సర్వేః సనక్షత్రాణాం స్వరాశయః కుర్వంతు మంగళమ్ నిత్యం యస్త్యైషా లగ్న పత్రికా||"
            translation="May all planets starting from the Sun, along with the constellations in their respective houses, always bestow auspiciousness as indicated in this lagna patrika (time chart)."
          />
        </div>

        {/* Content Grid */}
        <div className="space-y-8 mb-16">
          {/* Main Card - Full Width */}
          <Card className="p-8 border-2 border-secondary/30">
            <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
              What is Shubha Muhurt?
            </h2>
            <div className="space-y-4 font-playfair text-secondary leading-relaxed">
              <p>
                Shubha Muhurt refers to the most auspicious time for conducting important ceremonies,
                rituals, and life events. In Vedic astrology, time is not just a linear progression but
                a cosmic dance of planetary energies that can either support or hinder our endeavors.
              </p>
              <p>
                By selecting the right muhurt (auspicious time), we align our actions with favorable
                cosmic energies, ensuring success, prosperity, and divine blessings for our undertakings.
              </p>
              <br />
              <strong className="font-semibold font-playfair text-secondary ">
                Our Muhurt calculation considers:
              </strong>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Planetary positions and their strengths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Nakshatra (lunar mansion) suitability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Tithi (lunar day) appropriateness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Lagna (ascendant) compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Your personal birth chart alignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Absence of inauspicious yogas</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Two Cards Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary/30">
              <h3 className="text-2xl font-bold font-playfair text-primary mb-4">
                Why Muhurt Matters
              </h3>
              <div className="space-y-3 font-playfair text-secondary">
                <div className="flex items-start gap-2">
                  <Calendar className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Divine Alignment:</strong> Synchronize with cosmic energies
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Success Assurance:</strong> Minimize obstacles and maximize favorable outcomes
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Ancestral Wisdom:</strong> Follow time-tested Vedic traditions
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Peace of Mind:</strong> Confidence from divine timing
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-secondary/30 text-center">
              <Clock className="h-16 w-16 mx-auto mb-4 text-secondary animate-twinkle" />
              <h2 className="text-3xl font-bold font-playfair text-primary mb-4">
                Find Your Perfect Timing
              </h2>
              <p className="font-playfair text-secondary mb-6">
                Get auspicious muhurt for your important life events
              </p>
              <Button
                size="lg"
                onClick={() => setModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground divine-glow px-8 py-6 text-lg"
              >
                Request Muhurt Now
              </Button>
            </Card>
          </div>
        </div>

        {/* Occasions Grid */}
        <div>
          <h2 className="text-3xl font-bold font-playfair text-primary mb-8 text-center">
            Popular Occasions for Muhurt
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occasion, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-secondary/50 group text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-secondary/20 group-hover:border-secondary/50 transition-all group-hover:scale-110">
                    <img
                      src={occasion.image || "/placeholder.svg"}
                      alt={occasion.title}
                      className="object-cover"
                      sizes="(max-width: 768px) 80px, 96px"
                    />
                  </div>
                </div>
                <h3 className="font-bold font-playfair text-primary mb-2">{occasion.title}</h3>
                <p className="text-sm font-playfair text-secondary">{occasion.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <ConsultationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        serviceType="muhurt"
      />
    </div>
  );
};

export default ShubhaMuhurt;
