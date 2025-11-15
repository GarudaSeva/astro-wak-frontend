import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Phone,
  MapPin,
  Star,
  Hash,
  Gem,
  Clock,
  Flame,
} from "lucide-react";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SlokaCard from "@/components/SlokaCard";
import ConsultationModal from "@/components/ConsultationModal";
import astrologerPhoto from "@/assets/astrologer-photo.jpg";
import Pay599Button from "@/components/Pay599Button";
import logo from "@/assets/lord-ganesh.png";
import slokaBackfround from "@/assets/slokas/home.png";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<
    "horoscope" | "numerology" | "gems" | "muhurt" | "pooja"
  >("horoscope");

  const services = [
    {
      title: "Janma Patrika",
      description:
        "Detailed birth chart analysis revealing your cosmic blueprint and life path",
      icon: Star,
      link: "/horoscope",
      serviceType: "horoscope" as const,
    },
    {
      title: "Numerology",
      description:
        "Discover the hidden meanings in numbers and their influence on your destiny",
      icon: Hash,
      link: "/numerology",
      serviceType: "numerology" as const,
    },
    {
      title: "Gemstone Consultation",
      description:
        "Personalized gemstone recommendations for planetary balance and prosperity",
      icon: Gem,
      link: "/gems",
      serviceType: "gems" as const,
    },
    {
      title: "Shubha Muhurt",
      description:
        "Auspicious timing for rituals, ceremonies, and important life events",
      icon: Clock,
      link: "/muhurt",
      serviceType: "muhurt" as const,
    },
    {
      title: "Pooja & Homa",
      description:
        "Sacred rituals and fire ceremonies for spiritual growth and blessings",
      icon: Flame,
      link: "/pooja",
      serviceType: "pooja" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* About Section */}
      <section className="py-10 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <SlokaCard
            sloka="ప్రణమ్య శిరసాదేవం గౌరిపుత్రమ్ వినాయకం భక్తా వాసం స్మరేనిత్యం ఆయుః కామార్థ సిద్ధయే||"
            image={slokaBackfround}
            height="h-60"
          />

          <div className="mt-16 grid md:grid-cols-[300px_1fr] gap-12 items-start max-w-6xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-64 h-80 rounded-lg overflow-hidden shadow-xl border-4 border-secondary/30 divine-glow">
                <img
                  src={astrologerPhoto}
                  alt="Brahma Shri Jaanakiram Garu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold font-playfair text-primary">
                  Brahma Shri Jaanakiram Garu
                </h3>
                <p className="text-sm text-secondary">
                  Expert Vedic Astrologer & Spiritual Guide
                </p>

                <div className="relative flex flex-col items-center text-center md:items-start md:text-left space-y-2 text-sm pt-2">
                  {/* Address */}
                  <div className="relative w-full max-w-[280px] mx-auto md:mx-0 pl-5">
                    <MapPin className="absolute left-0 top-1 h-4 w-4 text-secondary" />
                    <p className="text-foreground/80 leading-relaxed">
                      Walbridge apts, Radha Nagar, Sun City, Hyderabad – 500091
                    </p>
                  </div>

                  {/* Phone Numbers */}
                  <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-2 pt-2">
                    <div className="relative pl-5">
                      <Phone className="absolute left-0 top-1 h-4 w-4 text-secondary" />
                      <div className="flex gap-6">
                        <a
                          href="tel:9553231199"
                          className="text-foreground hover:text-secondary transition-colors font-semibold"
                        >
                          +91 9553231199
                        </a>
                        <a
                          href="tel:9441662365"
                          className="text-foreground hover:text-secondary transition-colors font-semibold"
                        >
                          +91 9441662365
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 px-4">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary">
                About Brahma Shri Jaanakiram Garu
              </h2>
              <p className="text-lg font-playfair text-secondary leading-relaxed bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-secondary/20">
                Welcome to Astro Wak, your trusted gateway to divine guidance
                and cosmic wisdom. Led by the esteemed{" "}
                <span className="text-primary font-semibold">
                  Brahma Shri Jaanakiram Garu
                </span>
                , we bring you authentic Vedic astrology services rooted in
                ancient traditions.
              </p>
              <p className="text-lg font-playfair text-secondary leading-relaxed bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-secondary/20">
                With years of dedicated study and practice in astrology,
                numerology, gemstone therapy, and Vedic rituals, our mission is
                to illuminate your path with spiritual insights and practical
                guidance for life's journey.
              </p>
              <blockquote className="border-l-4 border-secondary pl-6 py-3 italic text-xl text-primary bg-secondary/10 rounded-r-lg">
                "Your cosmic guide to a brighter life journey."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-4">
              Our Services
            </h2>
            <p className="text-xl max-w-2xl mx-auto font-playfair text-secondary">
              Comprehensive astrological guidance for every aspect of your life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-yellow-50 hover:border-secondary/50 group"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="h-10 w-10 text-secondary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold font-playfair text-primary mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className=" text-center font-playfair text-secondary mb-6">
                    {service.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors"
                    onClick={() => {
                      setSelectedService(service.serviceType);
                      setModalOpen(true);
                    }}
                  >
                    Book Now
                  </Button>
                </Card>
              );
            })}
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

      <ConsultationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        serviceType={selectedService}
      />
    </div>
  );
};

export default Home;
