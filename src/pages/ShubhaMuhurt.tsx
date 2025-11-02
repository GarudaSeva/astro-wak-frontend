import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SlokaCard from "@/components/SlokaCard";
import { Clock, Calendar } from "lucide-react";

const ShubhaMuhurt = () => {
  const occasions = [
    { icon: "💒", title: "Wedding Ceremonies", description: "Auspicious timing for marriage rituals" },
    { icon: "🏠", title: "Griha Pravesh", description: "Housewarming and moving in" },
    { icon: "💼", title: "Business Opening", description: "Starting new ventures and enterprises" },
    { icon: "📚", title: "Education Start", description: "Beginning academic pursuits" },
    { icon: "🚗", title: "Vehicle Purchase", description: "Buying new vehicles" },
    { icon: "💍", title: "Engagement", description: "Betrothal ceremonies" },
    { icon: "🎭", title: "Name Ceremonies", description: "Naming rituals for newborns" },
    { icon: "⚕️", title: "Medical Procedures", description: "Surgeries and treatments" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <Clock className="h-16 w-16 mx-auto mb-4 text-secondary animate-twinkle" />
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-6">
            Shubha Muhurt
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Information Section */}
          <div className="space-y-6">
            <Card className="p-8 border-2 border-secondary/30">
              <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
                What is Shubha Muhurt?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Shubha Muhurt refers to the most auspicious time for conducting important ceremonies, 
                  rituals, and life events. In Vedic astrology, time is not just a linear progression but 
                  a cosmic dance of planetary energies that can either support or hinder our endeavors.
                </p>
                <p>
                  By selecting the right muhurt (auspicious time), we align our actions with favorable 
                  cosmic energies, ensuring success, prosperity, and divine blessings for our undertakings.
                </p>
                <p className="font-semibold text-foreground">
                  Our Muhurt calculation considers:
                </p>
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

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary/30">
              <h3 className="text-2xl font-bold font-playfair text-primary mb-4">
                Why Muhurt Matters
              </h3>
              <div className="space-y-3 text-muted-foreground">
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
          </div>

          {/* Form Section */}
          <div>
            <Card className="p-8 border-2 border-secondary/30 sticky top-24">
              <h2 className="text-3xl font-bold font-playfair text-primary mb-6 text-center">
                Request Muhurt Consultation
              </h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>

                <div>
                  <Label htmlFor="occasion">Type of Occasion *</Label>
                  <select 
                    id="occasion" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    required
                  >
                    <option value="">Select occasion type</option>
                    <option value="wedding">Wedding Ceremony</option>
                    <option value="housewarming">Griha Pravesh (Housewarming)</option>
                    <option value="business">Business/Office Opening</option>
                    <option value="engagement">Engagement</option>
                    <option value="naming">Name Ceremony</option>
                    <option value="vehicle">Vehicle Purchase</option>
                    <option value="education">Education Start</option>
                    <option value="medical">Medical Procedure</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dob">Your Date of Birth *</Label>
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
                  <Label htmlFor="preferredPeriod">Preferred Time Period</Label>
                  <Input id="preferredPeriod" placeholder="e.g., January 2025" />
                </div>

                <div>
                  <Label htmlFor="location">Event Location *</Label>
                  <Input id="location" placeholder="City where event will take place" required />
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
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea 
                    id="details" 
                    placeholder="Any specific requirements or constraints?"
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground divine-glow"
                >
                  Request Muhurt
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  We'll provide multiple auspicious time options within 24-48 hours
                </p>
              </form>
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
                className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-secondary/50 group"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {occasion.icon}
                </div>
                <h3 className="font-bold font-playfair text-primary mb-2">
                  {occasion.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {occasion.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShubhaMuhurt;
