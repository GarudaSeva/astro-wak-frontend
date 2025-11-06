import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
        <div className="text-center mb-12 mt-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-5xl font-bold font-playfair text-primary mb-6">
            Numerology
          </h1>
          <p className="text-xl font-playfair text-yellow-700 max-w-3xl mx-auto">
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

        {/* 1️⃣ The Power of Numbers - Full Width */}
        <Card className="p-8 border-2 border-secondary/30 mb-16">
          <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
            The Power of Numbers
          </h2>
          <div className="space-y-4 font-playfair text-yellow-700">
            <p className="leading-relaxed mb-2">
              Numerology is the ancient science of numbers and their mystical
              influence on human life. Every number carries a unique vibration
              that resonates with the cosmic energies, shaping your personality,
              destiny, and life events.
            </p>

            <strong>Our numerology services reveal:</strong>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-2">
                <span>✦</span>
                <span>
                  <strong>Life Path Number:</strong> Your soul's purpose and
                  destiny
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>✦</span>
                <span>
                  <strong>Name Number:</strong> The vibration of your identity
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>✦</span>
                <span>
                  <strong>Lucky Numbers:</strong> Numbers that attract prosperity
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>✦</span>
                <span>
                  <strong>Career Path:</strong> Professional directions aligned
                  with your numbers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>✦</span>
                <span>
                  <strong>Compatibility:</strong> Relationship harmony through
                  numbers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>✦</span>
                <span>
                  <strong>Name Correction:</strong> Optimizing your name for
                  success
                </span>
              </li>
            </ul>
          </div>
        </Card>

        {/* 2️⃣ Benefits + Image Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-16">
          {/* Left: Benefits */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary/30 flex flex-col justify-center">
            <h3 className="text-2xl font-bold font-playfair text-primary mb-4">
              Benefits of Numerology
            </h3>
            <div className="space-y-3 font-playfair text-yellow-700">
              <div className="flex items-start gap-2">
                <span className="text-2xl">🔮</span>
                <div>
                  <strong>Self-Discovery:</strong> Understand your true nature
                  and hidden talents
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">🔮</span>
                <div>
                  <strong>Better Decisions:</strong> Make informed choices
                  aligned with your numbers
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">🔮</span>
                <div>
                  <strong>Career Guidance:</strong> Find your ideal professional
                  path
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">🔮</span>
                <div>
                  <strong>Relationship Harmony:</strong> Improve compatibility
                  with loved ones
                </div>
              </div>
            </div>
          </Card>

          {/* Right: Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-secondary/30 h-full">
            <img
              src={numerologyBanner}
              alt="Numerology - The Power of Numbers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3️⃣ Get Numerology Report - Centered Card */}
        <div className="flex justify-center">
          <Card className="p-8 border-2 border-secondary/30 text-center max-w-lg w-full">
            {/* <Hash className="h-16 w-16 mx-auto mb-4 text-yellow-700 animate-twinkle" /> */}
            <h2 className="text-3xl font-bold font-playfair text-primary mb-4">
              Unlock Your Numbers
            </h2>
            <p className="mb-6 font-playfair text-yellow-700">
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

      {/* Consultation Modal */}
      <ConsultationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        serviceType="numerology"
      />
    </div>
  );
};

export default Numerology;
