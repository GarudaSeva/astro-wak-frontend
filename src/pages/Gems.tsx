import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SlokaCard from "@/components/SlokaCard";
import { Gem, CheckCircle } from "lucide-react";
import gemstonesImage from "@/assets/gemstones-collection.jpg";

const Gems = () => {
  const gemstones = [
    { name: "Ruby (Manikya)", planet: "Sun", duration: "4 years", color: "Red" },
    { name: "Pearl (Moti)", planet: "Moon", duration: "2 years", color: "White" },
    { name: "Emerald (Panna)", planet: "Mercury", duration: "3 years", color: "Green" },
    { name: "Diamond (Heera)", planet: "Venus", duration: "7 years", color: "White" },
    { name: "Red Coral (Moonga)", planet: "Mars", duration: "3 years", color: "Red" },
    { name: "Yellow Sapphire (Pukhraj)", planet: "Jupiter", duration: "4 years", color: "Yellow" },
    { name: "Blue Sapphire (Neelam)", planet: "Saturn", duration: "5 years", color: "Blue" },
    { name: "Hessonite (Gomed)", planet: "Rahu", duration: "3 years", color: "Brown" },
    { name: "Cat's Eye (Lehsunia)", planet: "Ketu", duration: "5 years", color: "Yellow-Green" },
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

        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src={gemstonesImage} 
            alt="Collection of precious gemstones" 
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
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

        {/* Gemstones Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-playfair text-primary mb-8 text-center">
            The Nine Sacred Gemstones (Navaratna)
          </h2>
          <Card className="p-6 border-2 border-secondary/30 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary/30">
                  <th className="text-left py-4 px-4 font-playfair text-primary">Gemstone</th>
                  <th className="text-left py-4 px-4 font-playfair text-primary">Planet</th>
                  <th className="text-left py-4 px-4 font-playfair text-primary">Color</th>
                  <th className="text-left py-4 px-4 font-playfair text-primary">Effective Duration</th>
                </tr>
              </thead>
              <tbody>
                {gemstones.map((gem, index) => (
                  <tr key={index} className="border-b border-border hover:bg-accent/10 transition-colors">
                    <td className="py-4 px-4 font-semibold">{gem.name}</td>
                    <td className="py-4 px-4">{gem.planet}</td>
                    <td className="py-4 px-4">{gem.color}</td>
                    <td className="py-4 px-4">{gem.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
          <p className="text-sm text-muted-foreground mt-4 text-center">
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

        {/* Order Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 border-2 border-secondary/30">
            <div className="text-center mb-6">
              <div className="inline-block bg-secondary/20 rounded-full px-6 py-3 mb-4">
                <span className="text-3xl font-bold text-primary">₹599</span>
                <span className="text-muted-foreground ml-2">only</span>
              </div>
              <h2 className="text-3xl font-bold font-playfair text-primary mb-2">
                Get Your Gem Recommendation Report
              </h2>
              <p className="text-muted-foreground">
                Delivered to your email within 24 hours
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dob">Date of Birth *</Label>
                  <Input id="dob" type="date" required />
                </div>
                <div>
                  <Label htmlFor="tob">Time of Birth *</Label>
                  <Input id="tob" type="time" required />
                </div>
              </div>

              <div>
                <Label htmlFor="pob">Place of Birth *</Label>
                <Input id="pob" placeholder="City, State, Country" required />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="+91 " required />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>

              <div>
                <Label htmlFor="concerns">Health/Life Concerns (Optional)</Label>
                <Textarea 
                  id="concerns" 
                  placeholder="Any specific issues you want to address with gemstone therapy?"
                  rows={3}
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground divine-glow"
              >
                Order Gem Report - ₹599
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                After submission, you'll receive payment instructions via email
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gems;
