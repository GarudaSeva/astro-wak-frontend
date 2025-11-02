import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SlokaCard from "@/components/SlokaCard";
import { Flame } from "lucide-react";

const PoojaHoma = () => {
  const services = [
    {
      title: "Ganapati Homa",
      description: "Remove obstacles and invoke Lord Ganesha's blessings for new beginnings",
      benefits: "Success in new ventures, obstacle removal, wisdom"
    },
    {
      title: "Navagraha Homa",
      description: "Pacify all nine planets and balance their energies in your life",
      benefits: "Planetary peace, health improvement, overall prosperity"
    },
    {
      title: "Lakshmi Pooja",
      description: "Invoke Goddess Lakshmi for wealth, prosperity and abundance",
      benefits: "Financial growth, business success, material comforts"
    },
    {
      title: "Saraswati Pooja",
      description: "Seek blessings of the Goddess of Knowledge for education and arts",
      benefits: "Academic excellence, artistic skills, intellectual growth"
    },
    {
      title: "Rudra Abhishekam",
      description: "Powerful ritual for Lord Shiva for health and spiritual growth",
      benefits: "Health recovery, spiritual progress, mental peace"
    },
    {
      title: "Mahamrityunjaya Homa",
      description: "Sacred fire ritual for protection from illness and untimely death",
      benefits: "Health protection, longevity, victory over fears"
    },
    {
      title: "Sudarshana Homa",
      description: "Powerful ritual for protection from enemies and negative energies",
      benefits: "Protection from evil, victory over obstacles, spiritual shield"
    },
    {
      title: "Chandi Homa",
      description: "Invoke Divine Mother's power for courage and success",
      benefits: "Strength, victory, removal of negativity"
    },
    {
      title: "Ayushya Homa",
      description: "Ritual for longevity, health and vitality",
      benefits: "Long life, good health, energy"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <Flame className="h-16 w-16 mx-auto mb-4 text-secondary animate-twinkle" />
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-6">
            Pooja & Homa Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manifest your desires & wishes through sacred rituals
          </p>
        </div>

        {/* Sloka */}
        <div className="mb-16">
          <SlokaCard 
            sloka="ఓం సర్వమంగళమాంగళ్యే శివే సర్వార్థ సాధికే శరణ్యే త్రయంబకే గౌరీ నారాయణీ నమోస్తుతే||"
            translation="O Auspicious One, who bestows all that is auspicious and sacred, O Shiva (the benevolent), the accomplisher of all aims, the giver of refuge, O three-eyed Goddess, O Gauri, O Narayani, salutations to You!"
          />
        </div>

        {/* About Section */}
        <div className="mb-16">
          <Card className="p-8 border-2 border-secondary/30">
            <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
              The Power of Vedic Rituals
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Pooja (worship) and Homa (fire ritual) are ancient Vedic practices that have been performed 
                for thousands of years to invoke divine blessings, remove obstacles, and manifest positive 
                energies in one's life. These sacred ceremonies create a powerful spiritual connection between 
                the devotee and the divine forces.
              </p>
              <p>
                During a Homa, offerings are made into the sacred fire (Agni) while chanting powerful mantras. 
                Fire is considered the divine messenger that carries our prayers and offerings to the deities. 
                The smoke, vibrations of mantras, and the sanctified atmosphere create transformative energies 
                that purify the environment and the participants.
              </p>
              <p className="font-semibold text-foreground">
                Benefits of Performing Pooja & Homa:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Removal of planetary doshas and negative influences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Fulfillment of specific desires and goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Health improvement and disease prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Financial prosperity and business success</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Spiritual growth and mental peace</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Protection from negative energies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Harmonious family relationships</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-playfair text-primary mb-8 text-center">
            Our Pooja & Homa Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-secondary/50 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Flame className="h-8 w-8 text-secondary group-hover:animate-twinkle" />
                  <h3 className="text-xl font-bold font-playfair text-primary">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  {service.description}
                </p>
                <div className="bg-accent/20 rounded-lg p-3">
                  <p className="text-xs font-semibold text-secondary mb-1">Benefits:</p>
                  <p className="text-sm text-foreground">{service.benefits}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 border-2 border-secondary/30">
            <h2 className="text-3xl font-bold font-playfair text-primary mb-6 text-center">
              Book a Pooja or Homa
            </h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>

              <div>
                <Label htmlFor="service">Select Service *</Label>
                <select 
                  id="service" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  required
                >
                  <option value="">Choose a pooja or homa</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dob">Date of Birth *</Label>
                  <Input id="dob" type="date" required />
                </div>
                <div>
                  <Label htmlFor="gotra">Gotra</Label>
                  <Input id="gotra" placeholder="Your gotra" />
                </div>
              </div>

              <div>
                <Label htmlFor="preferredDate">Preferred Date</Label>
                <Input id="preferredDate" type="date" />
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
                <Label htmlFor="intention">Your Intention/Sankalpa</Label>
                <Textarea 
                  id="intention" 
                  placeholder="What do you wish to achieve through this ritual?"
                  rows={3}
                />
              </div>

              <div className="flex items-start gap-2 bg-accent/20 p-4 rounded-lg">
                <input type="checkbox" id="prasad" className="mt-1" />
                <label htmlFor="prasad" className="text-sm text-muted-foreground">
                  I would like to receive prasad (blessed offerings) after the ritual
                </label>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground divine-glow"
              >
                Book Pooja/Homa
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                Our team will contact you to discuss details and pricing
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PoojaHoma;
