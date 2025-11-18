import { Button } from "@/components/ui/button";
import { useState } from "react";
import SlokaCard from "@/components/SlokaCard";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import genStoneBanner from "@/assets/slokas/subha-muhurat-banner.png"
import { ServiceKey } from "@/types/serviceKeys";
import muhuratServices from "@/data/muhuratServices";
import { useNavigate } from "react-router-dom";



export interface MuhuratService {
  id: string;
  slug: string;
  title: string;
  price: string;
  shortDesc: string;
  image: any;
  description: string;
  benefits?: string[];
  process?: string[];
  deliverables?: string[];
  additionalInfo?: string;
  serviceType: ServiceKey;
}


const ShubhaMuhurt = () => {
  const [selectedService, setSelectedService] = useState<MuhuratService | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleServiceClick = (service: MuhuratService) => {
    navigate(`/muhurt/${service.slug}`);
  };

  return (
    <div>
    <div className="min-h-screen pt-24 pb-2">
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
            // translation="May all planets starting from the Sun, along with the constellations in their respective houses, always bestow auspiciousness as indicated in this lagna patrika (time chart)."
            image={genStoneBanner}
            opacity={1.9}
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
          <div className="grid lg:grid-cols-1 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary/30">
  <h3 className="text-2xl font-bold font-playfair text-primary mb-4">
    Why Shubha Muhurtam Matters
  </h3>

  <div className="space-y-4 font-playfair text-secondary">

    {/* Existing Points */}
    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Divine Alignment:</strong>{" "}
        Synchronize with cosmic energies.
      </div>
    </div>

    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Success Assurance:</strong>{" "}
        Minimize obstacles and maximize favorable outcomes.
      </div>
    </div>

    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Ancestral Wisdom:</strong>{" "}
        Follow time-tested Vedic traditions.
      </div>
    </div>

    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Peace of Mind:</strong>{" "}
        Confidence from divine timing.
      </div>
    </div>

    {/* NEW Points Added Below */}

    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Enhances Positive Results:</strong>{" "}
        Choosing the right time amplifies success in marriage, business, home rituals,
        and major life events.
      </div>
    </div>

    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Reduces Negative Impact:</strong>{" "}
        A proper muhurt avoids inauspicious planetary influences that may delay or
        disturb your plans.
      </div>
    </div>

    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Spiritual Harmony:</strong>{" "}
        Rituals performed at a sacred time attract divine blessings and energetic purity.
      </div>
    </div>

    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Ensures Long-Term Stability:</strong>{" "}
        Whether it is marriage, business opening, naming ceremony, or home entry —
        Shubha Muhurtam creates a strong and auspicious foundation.
      </div>
    </div>
  </div>
</Card>

          </div>
        </div>
      </div>

    </div>

    <section className="py-1 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-primary mb-4">
              Our Muhurat Services
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Auspicious timing for all your life's important moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {muhuratServices.map((service) => {
              const IconComponent = service.image;
              return (
               <Card
  key={service.id}
  className="group hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 p-6 flex flex-col items-center text-center"
>
  {/* ICON CIRCLE */}
  <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center 
                  mb-4 group-hover:bg-primary/20 transition-colors shadow-md overflow-hidden">

    {typeof service.image === "function" ? (
      <service.image className="w-14 h-14 text-primary" />
    ) : (
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
      />
    )}

  </div>

  {/* TITLE */}
  <h3 className="text-xl font-playfair font-bold text-primary group-hover:text-secondary transition-colors mb-2">
    {service.title}
  </h3>

  {/* PRICE */}
  <div className="text-2xl font-bold text-secondary mb-4">
    {service.price}
  </div>

  {/* SHORT DESCRIPTION */}
  <p className="text-secondary font-playfair text-sm mb-6">
    {service.shortDesc}
  </p>

  <Button
    onClick={() => handleServiceClick(service)}
    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
  >
    View Details & Book
  </Button>
</Card>


              );
            })}
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceDetailModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          title={selectedService.title}
          price={selectedService.price}
          description={selectedService.description}
          benefits={selectedService.benefits}
          process={selectedService.process}
          deliverables={selectedService.deliverables}
          additionalInfo={selectedService.additionalInfo}
          serviceType={selectedService.serviceType}
        />
      )}
    </div>
  );
};

export default ShubhaMuhurt;
