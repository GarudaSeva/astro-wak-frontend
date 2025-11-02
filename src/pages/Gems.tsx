import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SlokaCard from "@/components/SlokaCard";
import { Gem, CheckCircle } from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import rubyImg from "@/assets/gems/ruby.jpg";
import pearlImg from "@/assets/gems/pearl.jpg";
import coralImg from "@/assets/gems/coral.jpg";
import emeraldImg from "@/assets/gems/emerald.jpg";
import yellowSapphireImg from "@/assets/gems/yellow-sapphire.jpg";
import diamondImg from "@/assets/gems/diamond.jpg";
import blueSapphireImg from "@/assets/gems/blue-sapphire.jpg";
import hessoniteImg from "@/assets/gems/hessonite.jpg";
import catsEyeImg from "@/assets/gems/cats-eye.jpg";

const Gems = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const gemstones = [
    { name: "Ruby", subtitle: "Manikya", planet: "Sun", duration: "4 years", color: "Red", image: rubyImg },
    { name: "Pearl", subtitle: "Moti", planet: "Moon", duration: "2 years", color: "White", image: pearlImg },
    { name: "Red Coral", subtitle: "Moonga", planet: "Mars", duration: "3 years", color: "Red", image: coralImg },
    { name: "Emerald", subtitle: "Panna", planet: "Mercury", duration: "3 years", color: "Green", image: emeraldImg },
    { name: "Yellow Sapphire", subtitle: "Pukhraj", planet: "Jupiter", duration: "4 years", color: "Yellow", image: yellowSapphireImg },
    { name: "Diamond", subtitle: "Heera", planet: "Venus", duration: "7 years", color: "White", image: diamondImg },
    { name: "Blue Sapphire", subtitle: "Neelam", planet: "Saturn", duration: "5 years", color: "Blue", image: blueSapphireImg },
    { name: "Hessonite", subtitle: "Gomed", planet: "Rahu", duration: "3 years", color: "Brown", image: hessoniteImg },
    { name: "Cat's Eye", subtitle: "Lehsunia", planet: "Ketu", duration: "5 years", color: "Yellow-Green", image: catsEyeImg },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <Gem className="h-16 w-16 mx-auto mb-4 text-secondary animate-twinkle" />
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-6">
            Gemstone Consultation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Harness the cosmic power of gemstones for prosperity and harmony
          </p>
        </div>

        {/* Sloka */}
        <div className="mb-16">
          <SlokaCard 
            sloka="అర్కేందు రక్తజ్ఞ గురు భృగు మందాహి కేతవః మణిక్యం మౌక్తికం చాధం విద్రుమం గారుడం పునః | పుష్యరాగం లసధ్వజ్రం నీలం గోమేధికం శుభం వైఢూర్యం నవరత్నాని ముద్రాంతైః కల్పయేచ్ఛుభం ||"
            translation="The nine sacred gemstones - Ruby, Pearl, Coral, Emerald, Yellow Sapphire, Diamond, Blue Sapphire, Hessonite, and Cat's Eye - correspond to the nine celestial bodies and bring auspicious blessings when worn properly."
          />
        </div>


        {/* About Gem Astrology */}
        <div className="mb-16">
          <Card className="p-8 border-2 border-secondary/30">
            <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
              The Science of Gem Astrology
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Every planet has an associated color with reference to astrology. The nine planets which play 
                a major role in the horoscope have respective Slokas written by Saints (Maharshi's), and these 
                slokas clearly indicate the associated color of each planet.
              </p>
              <p>
                Based on these colors, specific gemstones found in nature are identified and assigned to each 
                planet. These polished colored stones are called gems and are wonderful creations of nature with 
                many special properties.
              </p>
              <p>
                From ancient times, Saints and Scholars have associated gems with planets based on their color 
                and the effects produced by wearing them. Along with Indians, Europeans, Chinese, and Egyptians 
                believed in the mystical and therapeutic qualities of gemstones.
              </p>
            </div>
          </Card>
        </div>

        {/* Gemstones Cards Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-playfair text-primary mb-8 text-center">
            The Nine Sacred Gemstones (Navaratna)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {gemstones.map((gem, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-secondary/50 group"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img 
                    src={gem.image} 
                    alt={gem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Gem className="h-6 w-6 text-secondary" />
                    <div>
                      <h3 className="text-xl font-bold font-playfair text-primary">
                        {gem.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{gem.subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Planet:</span>
                      <span className="font-semibold text-foreground">{gem.planet}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Color:</span>
                      <span className="font-semibold text-foreground">{gem.color}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-semibold text-foreground">{gem.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            * It is suggested that a new ring is made with a new stone after the effective period for best results
          </p>
        </div>

        {/* Important Guidelines */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary/30">
            <h3 className="text-2xl font-bold font-playfair text-primary mb-6">
              Important Guidelines for Wearing Gemstones
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Gemstones must be worn according to your birth chart (Janma Kundali)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Each gemstone has specific day, metal, and finger for wearing as per Vedic guidelines</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Gem selection is made after careful analysis of planetary positions and house lordships</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>'Anukul-graha' (favorable planet) selection system ensures most beneficial recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Low-cost alternatives like plant beads, sacred threads, or metals are also effective</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-playfair text-primary mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-2 border-secondary/30">
              <h3 className="text-xl font-bold font-playfair text-primary mb-3">
                What gemstone should I wear?
              </h3>
              <p className="text-muted-foreground">
                Gemstones shall always be worn according to auspicious Graha (Planet) as per your kundali 
                (birth-chart). It is believed that the planetary alignment at the time of birth affects our 
                entire life, so it's important to wear only those gemstones which suit you.
              </p>
            </Card>

            <Card className="p-6 border-2 border-secondary/30">
              <h3 className="text-xl font-bold font-playfair text-primary mb-3">
                Will I get correct recommendations?
              </h3>
              <p className="text-muted-foreground">
                Yes, you will definitely get the correct information. We read the horoscope carefully and 
                suggest appropriate gemstones. We believe in giving 100% satisfaction to our customers.
              </p>
            </Card>

            <Card className="p-6 border-2 border-secondary/30">
              <h3 className="text-xl font-bold font-playfair text-primary mb-3">
                What gem resolves my problems?
              </h3>
              <p className="text-muted-foreground">
                Based on your birth chart analysis, our astrologers suggest best recommendations according 
                to your birth chart and current planetary transits. These recommendations are simple to 
                follow and give the best results.
              </p>
            </Card>

            <Card className="p-6 border-2 border-secondary/30">
              <h3 className="text-xl font-bold font-playfair text-primary mb-3">
                What's included in the report?
              </h3>
              <p className="text-muted-foreground">
                Your gem recommendation report includes: horoscope study, gemstone suggestions as remedies, 
                gemstones for prosperity, features of recommended gemstones, gem selection & setting guidance, 
                and detailed instructions on how to wear them properly.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto">
          <Card className="p-8 border-2 border-secondary/30">
            <div className="inline-block bg-secondary/20 rounded-full px-6 py-3 mb-4">
              <span className="text-3xl font-bold text-primary">₹599</span>
              <span className="text-muted-foreground ml-2">only</span>
            </div>
            <h2 className="text-3xl font-bold font-playfair text-primary mb-4">
              Get Your Personalized Gem Recommendation
            </h2>
            <p className="text-muted-foreground mb-6">
              Detailed analysis delivered to your email within 24 hours
            </p>
            <Button 
              size="lg"
              onClick={() => setModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground divine-glow px-8 py-6 text-lg"
            >
              Request Gem Report Now
            </Button>
          </Card>
        </div>
      </div>
      
      <ConsultationModal 
        open={modalOpen} 
        onOpenChange={setModalOpen}
        serviceType="gems"
      />
    </div>
  );
};

export default Gems;
