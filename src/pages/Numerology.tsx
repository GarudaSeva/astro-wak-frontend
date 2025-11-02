import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SlokaCard from "@/components/SlokaCard";
import { Hash } from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";

const Numerology = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <Hash className="h-16 w-16 mx-auto mb-4 text-secondary animate-twinkle" />
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-6">
            Numerology
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where numbers whisper the story of your life's true path
          </p>
        </div>

        {/* Sloka */}
        <div className="mb-16">
          <SlokaCard 
            sloka="ఓం పూర్ణమదః పూర్ణమిదం పూర్ణాత్ పూర్ణముదచ్యతే పూర్ణస్య పూర్ణమాదయ పూర్ణమేవావశిష్యతే||"
            translation="That is whole, this is whole. From the whole emerges the whole. When the whole is taken from the whole, what remains is still the whole."
          />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Information Section */}
          <div className="space-y-6">
            <Card className="p-8 border-2 border-secondary/30">
              <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
                The Power of Numbers
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Numerology is the ancient science of numbers and their mystical influence on human life. 
                  Every number carries a unique vibration that resonates with the cosmic energies, 
                  shaping your personality, destiny, and life events.
                </p>
                <p className="leading-relaxed">
                  Our numerology services reveal:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <span><strong>Life Path Number:</strong> Your soul's purpose and destiny</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <span><strong>Name Number:</strong> The vibration of your identity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <span><strong>Lucky Numbers:</strong> Numbers that attract prosperity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <span><strong>Career Path:</strong> Professional directions aligned with your numbers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <span><strong>Compatibility:</strong> Relationship harmony through numbers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <span><strong>Name Correction:</strong> Optimizing your name for success</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary/30">
              <h3 className="text-2xl font-bold font-playfair text-primary mb-4">
                Benefits of Numerology
              </h3>
              <div className="space-y-3 text-muted-foreground">
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
          </div>

          {/* CTA Section */}
          <div>
            <Card className="p-8 border-2 border-secondary/30 sticky top-24 text-center">
              <Hash className="h-16 w-16 mx-auto mb-4 text-secondary animate-twinkle" />
              <h2 className="text-3xl font-bold font-playfair text-primary mb-4">
                Unlock Your Numbers
              </h2>
              <p className="text-muted-foreground mb-6">
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
