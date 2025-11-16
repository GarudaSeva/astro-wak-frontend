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
import { Sun, Heart } from "lucide-react";
import image1 from "@/assets/objectives/card1.png"
import image2 from "@/assets/objectives/card2.png"
import image3 from "@/assets/objectives/card3.png"
import image4 from "@/assets/objectives/card4.png"
import image5 from "@/assets/objectives/card5.png"
import image6 from "@/assets/objectives/card6.png"
import image7 from "@/assets/objectives/card7.png"
import image8 from "@/assets/objectives/card8.png"


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

          <h2 className="text-4xl mt-10 md:text-5xl font-bold font-playfair text-primary text-center">
            About Brahma Shri Jaanakiram Garu
          </h2>

          <div className="mt-12 grid md:grid-cols-[300px_1fr] gap-12 items-start max-w-8xl mx-auto">
            {/* ===== MOBILE VIEW (Heading → Photo → Content → Long Bio → Quote) ===== */}
            <div className="md:hidden space-y-6 px-4 order-1">
              {/* Photo */}
              <div className="flex justify-center">
                <div className="w-72 h-72 rounded-lg overflow-hidden shadow-xl border-4 border-secondary/30 divine-glow">
                  <img
                    src={astrologerPhoto}
                    alt="Brahma Shri Jaanakiram Garu"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name Under Photo */}
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold font-playfair text-primary">
                  Brahma Shri Jaanakiram Garu
                </h3>
                <p className="text-sm text-secondary">
                  Expert Vedic Astrologer & Spiritual Guide
                </p>
              </div>

              {/* Paragraph 1 */}
              <p className="text-lg font-playfair text-secondary leading-relaxed bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-secondary/20">
                Welcome to Astro Wak, your trusted gateway to divine guidance
                and cosmic wisdom. Led by the esteemed{" "}
                <span className="text-primary font-semibold">
                  Brahma Shri Jaanakiram Garu
                </span>
                , we bring you authentic Vedic astrology services rooted in
                ancient traditions. With years of dedicated study and practice
                in astrology, numerology, gemstone therapy, and Vedic rituals,
                our mission is to illuminate your path with spiritual insights
                and practical guidance for life's journey.
              </p>

              {/* ⭐ Long Biography Paragraph */}
              <p className="text-lg font-playfair text-secondary leading-relaxed bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-secondary/20">
                Brahma Sree Jaanakiram Sarma — son of Late Parimi Sreerama
                Murthy Garu — is a renowned Smartha Pandit, Astrologer, Muhurtha
                and Vastu expert with over 23 years of dedicated practice. With
                mastery in Vedas, Vedangas, Jyotisham, Vaastu, and other
                Sastras, he is celebrated for translating ancient scriptures
                into modern, practical wisdom. Widely respected across Andhra
                Pradesh and Telangana, he has guided thousands of individuals
                with compassion, clarity, and deep spiritual insight.
              </p>

              {/* Quote */}
              <blockquote className="border-l-4 border-secondary pl-6 py-3 italic text-xl text-primary bg-secondary/10 rounded-r-lg">
                "Your cosmic guide to a brighter life journey."
              </blockquote>
            </div>

            {/* ===== DESKTOP VIEW (Photo Left → Content Right) ===== */}
            <div className="hidden md:flex flex-col items-center space-y-6">
              <div className="w-84 h-96 rounded-lg overflow-hidden shadow-xl border-4 border-secondary/30 divine-glow">
                <img
                  src={astrologerPhoto}
                  alt="Brahma Shri Jaanakiram Garu"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold font-playfair text-primary">
                  Brahma Shri Jaanakiram Garu
                </h3>
                <p className="text-sm text-secondary">
                  Expert Vedic Astrologer & Spiritual Guide
                </p>
              </div>
            </div>

            <div className="hidden md:block space-y-6 px-4">
              {/* Paragraph 1 */}
              <p className="text-lg font-playfair text-secondary leading-relaxed bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-secondary/20">
                Welcome to Astro Wak, your trusted gateway to divine guidance
                and cosmic wisdom. Led by the esteemed{" "}
                <span className="text-primary font-semibold">
                  Brahma Shri Jaanakiram Garu
                </span>
                , we bring you authentic Vedic astrology services rooted in
                ancient traditions. With years of dedicated study and practice
                in astrology, numerology, gemstone therapy, and Vedic rituals,
                our mission is to illuminate your path with spiritual insights
                and practical guidance for life's journey.
              </p>

              {/* ⭐ Long Biography Paragraph */}
              <p className="text-lg font-playfair text-secondary leading-relaxed bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-secondary/20">
                Brahma Sree Jaanakiram Sarma — son of Late Parimi Sreerama
                Murthy Garu — is a renowned Smartha Pandit, Astrologer, Muhurtha
                and Vastu expert with over 23 years of dedicated practice. With
                mastery in Vedas, Vedangas, Jyotisham, Vaastu, and other
                Sastras, he is celebrated for translating ancient scriptures
                into modern, practical wisdom. Widely respected across Andhra
                Pradesh and Telangana, he has guided thousands of individuals
                with compassion, clarity, and deep spiritual insight.
              </p>

              <blockquote className="border-l-4 border-secondary pl-6 py-3 italic text-xl text-primary bg-secondary/10 rounded-r-lg">
                "Your cosmic guide to a brighter life journey."
              </blockquote>
            </div>
          </div>

<div className="my-12">
  <SlokaCard
            sloka="ప్రణమ్య శిరసాదేవం గౌరిపుత్రమ్ వినాయకం భక్తా వాసం స్మరేనిత్యం ఆయుః కామార్థ Siddhayē||"
            image={slokaBackfround}
            height="h-60"
          />
</div>
          
        </div>
      </section>

<section className="py-12 bg-gradient-to-b from-background to-primary/10">
  <div className="container mx-auto px-6 max-w-8xl">

    <h2 className="text-center text-4xl md:text-5xl font-bold font-playfair text-primary mb-12">
      What is AstroWak?
    </h2>

    {/* ONE CLEAN VERTICAL CARD */}
    <div className="bg-card/80 p-10 md:p-14 rounded-2xl shadow-xl border border-secondary/20 space-y-8">

      {/* INTRO */}
      <div className="max-w-8xl mx-auto space-y-4">
        <p className="text-lg md:text-xl font-playfair text-secondary leading-relaxed text-left">
          AstroWak is a sacred bridge between cosmic intelligence and divine wisdom.
          “Astro” represents Surya — the source of light, clarity, and cosmic order.
          “Wak” (from Vāk) represents the divine speech of Lord Ganesha — wisdom,
          communication, and conscious understanding.
        </p>

        <p className="text-lg md:text-xl font-playfair text-secondary leading-relaxed text-left">
          AstroWak integrates ancient Vedic sciences with modern accessibility,
          offering astrology, numerology, gem guidance, poojas & homas,
          muhurtha selection, and spiritual rituals with compassion, clarity, and authenticity.
        </p>

        <p className="text-lg md:text-xl font-playfair text-secondary leading-relaxed text-left">
          Rooted in the symbolism of the <strong>Lotus</strong> (purity),
          <strong> Surya</strong> (illumination), and <strong>Ganesha</strong>
          (auspicious beginnings), AstroWak helps every seeker understand their
          energies, karmic patterns, and life direction with divine clarity.
        </p>
      </div>

      {/* SURYA SECTION */}
      <div className="max-w-8xl mx-auto space-y-4">
        <h3 className="text-3xl font-bold font-playfair text-primary text-left">
          Surya — The Cosmic Source of Light & Life
        </h3>

        <p className="text-secondary font-playfair text-lg leading-relaxed text-left">
          In Vedic tradition, Surya is Pratyaksha Daivam — the visible God and 
          the center of the Navagrahas. He symbolizes truth, vitality, illumination, 
          and life force.
        </p>

        <ul className="text-secondary font-playfair text-lg leading-relaxed space-y-2 text-left">
          <li>• <strong>Clarity</strong> — revealing the truth hidden in one’s chart</li>
          <li>• <strong>Vitality</strong> — energizing purpose and direction</li>
          <li>• <strong>Illumination</strong> — awakening inner wisdom</li>
        </ul>

        <p className="text-secondary font-playfair text-lg leading-relaxed text-left">
          Just as the Sun sustains the cosmos, AstroWak sustains spiritual clarity 
          and helps seekers align with cosmic harmony.
        </p>
      </div>


      {/* WAK SECTION */}
      <div className="max-w-8xl mx-auto space-y-5">
        <h3 className="text-3xl font-bold font-playfair text-primary text-left">
          Wak — The Divine Word of Lord Ganesha
        </h3>

        <p className="text-secondary font-playfair text-lg leading-relaxed text-left">
          “Wak” (Vāk) is associated with Lord Ganesha as Vakpathaye — the Lord 
          of Speech, Knowledge, and Conscious Understanding.
        </p>

        <ul className="text-secondary font-playfair text-lg leading-relaxed space-y-2 text-left">
          <li>• <strong>Divine Communication</strong> — clarity in expression</li>
          <li>• <strong>Wisdom</strong> — interpreting cosmic messages</li>
          <li>• <strong>Obstacle Removal</strong> — clearing emotional & mental blocks</li>
        </ul>

        <p className="text-secondary font-playfair text-lg leading-relaxed text-left">
          “Wak” transforms astrology from information into meaningful spiritual 
          conversation, helping seekers understand life with deeper awareness.
        </p>
      </div>

    </div>
  </div>
</section>





      {/* Objectives Section */}
   <section className="py-12 bg-background">
  <div className="container mx-auto px-4 max-w-6xl">
    
    <h2 className="text-center text-4xl md:text-5xl font-bold font-playfair text-primary mb-12">
      Objectives of AstroWak
    </h2>

    <div className="space-y-12">
      {[
        {
          title: "Illuminate Lives Through Divine Knowledge",
          desc: "Just as Surya dispels darkness, AstroWak illuminates the mind and soul through astrology, numerology and spiritual guidance.",
          img: image1,
        },
        {
          title: "Bridge Ancient Wisdom with Modern Life",
          desc: "AstroWak translates timeless Vedic teachings into practical, modern-friendly guidance for conscious living.",
          img: image2,
        },
        {
          title: "Empower Through Conscious Dialogue",
          desc: "Inspired by Lord Ganesha, our consultations are not predictions but meaningful, insightful conversations rooted in compassion.",
          img: image3,
        },
        {
          title: "Guide Spiritual Awakening & Inner Transformation",
          desc: "Every reading becomes a mirror for deep reflection — helping you grow, heal and align with your higher purpose.",
          img: image4,
        },
        {
          title: "Honour Surya – The Source of Truth & Energy",
          desc: "Surya represents clarity, vitality and divine illumination — the foundation of all astrological insights at AstroWak.",
          img: image5,
        },
        {
          title: "Embody the Wisdom of Lord Ganesha",
          desc: "Guided by Vakpathaye, AstroWak removes obstacles of confusion and opens the path to clarity, purity, and spiritual understanding.",
          img: image6,
        },
        {
          title: "Harmonize Cosmic Energies with Daily Life",
          desc: "Through astrology, gems, pooja, muhurtha — we help you align your life with cosmic rhythms for effortless flow.",
          img: image7,
        },
        {
          title: "Serve with Trust, Compassion & Authenticity",
          desc: "AstroWak offers a safe, respectful, deeply spiritual space where seekers feel heard, understood and supported.",
          img: image8,
        },
      ].map((item, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl bg-card/70 shadow-lg border border-secondary/20 ${
            i % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* PERFECT CIRCLE IMAGE */}
          <div className="flex-shrink-0 w-28 h-28 rounded-full bg-secondary/10 shadow-inner 
                          flex items-center justify-center overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT BLOCK */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold font-playfair text-primary">
              {item.title}
            </h3>
            <p className="text-secondary font-playfair text-lg leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
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
