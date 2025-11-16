import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SlokaCard from "@/components/SlokaCard";
import { CheckCircle } from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import horoscope from "@/assets/slokas/horoscope.png";
import HoroscopeComponent from "@/components/horoscopeComponent";

const Horoscope = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up mt-8">
          <h1 className="text-5xl md:text-5xl font-bold font-playfair text-primary mb-6">
            Horoscope Services
          </h1>
          <p className="text-xl font-playfair text-secondary max-w-3xl mx-auto">
            Your destiny, decoded through the wisdom of planets
          </p>
        </div>

      <div className="my-16">
          <SlokaCard
            sloka="జననీ జన్మ సౌఖ్యనాం వర్ధనీ కుల సంపదాం పదవీ పూర్వ పుణ్యనాం లిఖ్యతే జన్మ పత్రిక||"
            translation="The birth chart is written as a record of past merits, bringing joy at birth, prosperity to the family, and enhancement of fortunes."
            image={horoscope}
            opacity={10.5}
          />
        </div>

        {/* Content Grid */}
        <div className="space-y-8 mb-16">
          {/* Main Card - Full Width */}
          <Card className="p-8 border-2 border-secondary/30">
            <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
              What is Horoscope?
            </h2>

            <div className="space-y-4 font-playfair text-secondary leading-relaxed">
              <p>
                A <strong>Horoscope</strong>—also known as{" "}
                <strong>Janma Patrika</strong> or
                <strong> Birth Chart</strong>—is a divine celestial map created
                at the exact moment of your birth. It captures the unique
                positions of the Sun, Moon, planets, stars, and constellations
                influencing your life journey.
              </p>

              <p>
                This sacred chart reveals your <strong>personality</strong>,
                <strong>strengths</strong>, <strong>challenges</strong>,
                <strong>karmic patterns</strong>, and{" "}
                <strong>life purpose</strong>. It is not merely a prediction
                tool — it is your{" "}
                <span className="text-primary font-semibold">
                  Spiritual Blueprint
                </span>
                , guiding you with cosmic understanding.
              </p>

              <p>
                Based on your birth <strong>date, time, and location</strong>,
                your horoscope maps the <strong>12 houses (Bhavas)</strong> and{" "}
                <strong>9 planets (Navagrahas)</strong>, showing how each area
                of life—career, marriage, health, wealth, and destiny—is shaped.
              </p>

              <strong className="font-semibold text-secondary block mt-6">
                A detailed horoscope reveals:
              </strong>

              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Your complete birth chart (Lagna, Rasi & Navamsa)</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>
                    Planetary positions and their impact on each life area
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Dasha & Bhukti cycles (life periods and timings)</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>
                    Marriage, career, finance & personal growth insights
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Health tendencies and planet-based remedies</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>
                    Auspicious timings & important life-event predictions
                  </span>
                </li>
              </ul>

              <p className="mt-4">
                A Horoscope is your <strong>cosmic guide</strong>—helping you
                understand who you are, why certain things happen, and how to
                align with your highest destiny.
              </p>
            </div>
          </Card>

          {/* Two Cards Side by Side */}
          <div className="grid lg:grid-cols-1 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary/30">
              <h3 className="text-2xl font-bold font-playfair text-primary mb-4">
                What Your Horoscope Reveals
              </h3>

              <div className="space-y-4 font-playfair text-secondary">
                {/* Life Purpose */}
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Life Purpose:</strong>
                    Understand your dharma, karmic patterns, and soul’s
                    direction.
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">
                      Planetary Timings (Dasha):
                    </strong>
                    Know the right time to start, grow, pause, or transform any
                    aspect of life.
                  </div>
                </div>

                {/* Career */}
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">
                      Career Direction:
                    </strong>
                    Identify your strengths, talents, opportunities, and ideal
                    work path.
                  </div>
                </div>

                {/* Relationships */}
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">
                      Relationships & Marriage:
                    </strong>
                    Compatibility, emotional patterns, marriage timing, and
                    partner traits.
                  </div>
                </div>

                {/* Wealth */}
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">
                      Finance & Wealth:
                    </strong>
                    Income flow, savings, investments, and financial stability
                    indicators.
                  </div>
                </div>

                {/* Health */}
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">
                      Health Tendencies:
                    </strong>
                    Physical, mental, and emotional well-being based on
                    planetary influences.
                  </div>
                </div>

                {/* Remedies */}
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Remedies:</strong>
                    Gemstones, mantras, poojas, and lifestyle corrections to
                    remove obstacles.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <HoroscopeComponent />

      <ConsultationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        serviceType="horoscope"
      />
    </div>
  );
};

export default Horoscope;
