import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SlokaCard from "@/components/SlokaCard";
import { Star } from "lucide-react";

const Horoscope = () => {
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

          {/* Form Section */}
          <div>
            <Card className="p-8 border-2 border-secondary/30 sticky top-24">
              <h2 className="text-3xl font-bold font-playfair text-primary mb-6 text-center">
                Get Your Horoscope
              </h2>
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
                  <Label htmlFor="queries">Specific Questions (Optional)</Label>
                  <Textarea 
                    id="queries" 
                    placeholder="Any specific areas you'd like us to focus on?"
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground divine-glow"
                >
                  Submit Request
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  We'll contact you within 24 hours to discuss your horoscope
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horoscope;
