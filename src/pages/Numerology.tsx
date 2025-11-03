import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SlokaCard from "@/components/SlokaCard";
import { Hash } from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import numerologyBanner from "@/assets/numerology-banner.jpg";

const Numerology = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up mt-8">
          {/* <Hash className="h-16 w-16 mx-auto mb-4 text-secondary animate-twinkle" /> */}
          <h1 className="text-5xl md:text-5xl font-bold font-playfair text-primary mb-6">
            Numerology
          </h1>
          <p className="text-xl font-playfair text-secondary max-w-3xl mx-auto">
            Where numbers whisper the story of your life's true path
          </p>
        </div>

        {/* Sloka */}
        <div className="mb-16">
          <SlokaCard 
            sloka="ఓం పూర్ణమదః పూర్ణమిదం పూర్ణాత్ పూర్ణముదచ్యతే పూర్ణస్య పూర్ణమాదయ పూర్ణమేవావశిష్యతే||"
            translation="Om, That is full, this is full. From fullness, fullness comes out. Taking fullness from fullness, what remains is also fullness."
          />
        </div>

        {/* Numerology Banner */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-2xl border-4 border-secondary/30">
          <img 
            src={numerologyBanner} 
            alt="Numerology - The Power of Numbers" 
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Content Grid */}
        <div className="space-y-8 mb-16">
          {/* Main Card - Full Width */}
          <Card className="p-8 border-2 border-secondary/30">
            <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
              The Power of Numbers
            </h2>
            <div className="space-y-4 font-playfair text-secondary">
              <p className="leading-relaxed font-playfair text-secondary mb-2">
                Numerology is the ancient science of numbers and their mystical influence on human life. 
                Every number carries a unique vibration that resonates with the cosmic energies, 
                shaping your personality, destiny, and life events.
              </p>
              <strong className="leading-relaxed font-playfair text-secondary">
                Our numerology services reveal:
              </strong>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span className="flex flex-row gap-2"><strong className="text-secondary">Life Path Number:</strong><p className="font-playfair text-secondary"> Your soul's purpose and destiny</p></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span className="flex flex-row gap-2"><strong className="text-secondary">Name Number:</strong><p className="font-playfair text-secondary"> The vibration of your identity</p></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span className="flex flex-row gap-2"><strong className="text-secondary">Lucky Numbers:</strong><p className="font-playfair text-secondary"> Numbers that attract prosperity</p></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span className="flex flex-row gap-2"><strong className="text-secondary">Career Path:</strong><p className="font-playfair text-secondary"> Professional directions aligned with your numbers </p></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary ">✦</span>
                  <span className="flex flex-row gap-2"><strong className="text-secondary">Compatibility:</strong><p className="font-playfair text-secondary"> Relationship harmony through numbers </p></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span className="flex flex-row gap-2"><strong className="text-secondary">Name Correction:</strong><p className="font-playfair text-secondary"> Optimizing your name for success </p></span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Two Cards Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary/30">
              <h3 className="text-2xl font-bold font-playfair text-primary mb-4">
                Benefits of Numerology
              </h3>
              <div className="space-y-3 font-playfair text-secondary">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🔮</span>
                  <div>
                    <strong className="text-foreground">Self-Discovery:</strong> Understand your true nature and hidden talents
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🔮</span>
                  <div>
                    <strong className="text-foreground">Better Decisions:</strong> Make informed choices aligned with your numbers
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🔮</span>
                  <div>
                    <strong className="text-foreground">Career Guidance:</strong> Find your ideal professional path
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🔮</span>
                  <div>
                    <strong className="text-foreground">Relationship Harmony:</strong> Improve compatibility with loved ones
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-secondary/30 text-center">
              <Hash className="h-16 w-16 mx-auto mb-4 text-secondary animate-twinkle" />
              <h2 className="text-3xl font-bold font-playfair text-primary mb-4">
                Unlock Your Numbers
              </h2>
              <p className="mb-6 font-playfair text-secondary">
                Discover your life path, lucky numbers, and name vibrations
              </p>
              <Button 
                size="lg"
                onClick={() => setModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground divine-glow px-8 py-6 text-lg"
              >
                Get Numerology Report
              </Button>
            </Card>
          </div>
        </div>
      </div>
      
      <ConsultationModal 
        open={modalOpen} 
        onOpenChange={setModalOpen}
        serviceType="numerology"
      />
    </div>
  );
};

export default Numerology;
