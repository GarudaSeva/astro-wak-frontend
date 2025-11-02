import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, User, Phone, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SlokaCard from "@/components/SlokaCard";

const Home = () => {
  const services = [
    {
      title: "Janma Patrika",
      description: "Detailed birth chart analysis revealing your cosmic blueprint and life path",
      icon: "🌟",
      link: "/horoscope"
    },
    {
      title: "Numerology",
      description: "Discover the hidden meanings in numbers and their influence on your destiny",
      icon: "🔢",
      link: "/numerology"
    },
    {
      title: "Gemstone Consultation",
      description: "Personalized gemstone recommendations for planetary balance and prosperity",
      icon: "💎",
      link: "/gems"
    },
    {
      title: "Shubha Muhurt",
      description: "Auspicious timing for rituals, ceremonies, and important life events",
      icon: "⏰",
      link: "/muhurt"
    },
    {
      title: "Pooja & Homa",
      description: "Sacred rituals and fire ceremonies for spiritual growth and blessings",
      icon: "🔥",
      link: "/pooja"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* About Section */}
      <section className="py-20 cosmic-pattern">
        <div className="container mx-auto px-4">
          <SlokaCard sloka="ప్రణమ్య శిరసాదేవం గౌరిపుత్రమ్ వినాయకం భక్తా వాసం స్మరేనిత్యం ఆయుః కామార్థ సిద్ధయే||" />

          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary">
                About Brahma Shri Jaanakiram Garu
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to Astro Wak, your trusted gateway to divine guidance and cosmic wisdom. 
                Led by the esteemed <span className="text-primary font-semibold">Brahma Shri Jaanakiram Garu</span>, 
                we bring you authentic Vedic astrology services rooted in ancient traditions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of dedicated study and practice in astrology, numerology, gemstone therapy, 
                and Vedic rituals, our mission is to illuminate your path with spiritual insights and 
                practical guidance for life's journey.
              </p>
              <blockquote className="border-l-4 border-secondary pl-4 py-2 italic text-xl text-primary">
                "Your cosmic guide to a brighter life journey."
              </blockquote>

              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-foreground">
                    Walbridge apts, Radha Nagar, Sun City, Hyderabad – 500091
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-secondary" />
                  <div className="flex gap-4">
                    <a href="tel:9553231199" className="text-foreground hover:text-secondary transition-colors font-semibold">
                      +91 9553231199
                    </a>
                    <span className="text-muted-foreground">/</span>
                    <a href="tel:9441662365" className="text-foreground hover:text-secondary transition-colors font-semibold">
                      +91 9441662365
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary/30 divine-glow">
                <User className="h-48 w-48 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-2xl font-bold font-playfair text-center text-primary mb-2">
                  Brahma Shri Jaanakiram Garu
                </h3>
                <p className="text-center text-muted-foreground">
                  Expert Vedic Astrologer & Spiritual Guide
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Sparkles className="h-12 w-12 mx-auto mb-4 text-secondary animate-twinkle" />
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive astrological guidance for every aspect of your life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-secondary/50 group cursor-pointer"
              >
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-playfair text-primary mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-center mb-6">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors"
                  asChild
                >
                  <a href={service.link}>Learn More</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground cosmic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Ready to Discover Your Destiny?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a consultation today and unlock the wisdom of the cosmos
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground border-secondary divine-glow"
            asChild
          >
            <a href="tel:9553231199">Call Now: +91 9553231199</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
