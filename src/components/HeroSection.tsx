import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import { useState } from "react";
import heroBackground from "@/assets/hero-cosmic-bg.jpg";
import ConsultationModal from "./ConsultationModal";
import logo from "@/assets/lord-ganesh.png"

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden my-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(128, 0, 0, 0.6)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.9)'
        }}
      >
        {/* Blur overlay for text readability */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        {/* Animated Stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <Star
              key={i}
              className="absolute text-secondary animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
              size={Math.random() * 20 + 10}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 text-center">
          <div className="animate-fade-in-up bg-black/30 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-secondary/30">
            <img
              src={logo}
              alt="Astro Wak Symbol"
              className="h-24 w-32 mx-auto mb-2 "
              // className="h-24 w-32 mx-auto mb-2 animate-twinkle drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]"
              // style={{
              //   filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.7))',
              // }}
            />
            <strong className="text-yellow-600 text-xl ">ఓం శ్రీ గురుభ్యో నమః</strong>

            <h1 className="text-5xl md:text-7xl font-bold font-playfair text-white mb-6 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Welcome to <span className="text-yellow-600">Astro Wak</span>
            </h1>

            <p className="text-2xl md:text-3xl text-white font-semibold mb-4 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Your Gateway to Divine Guidance
            </p>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Discover your cosmic destiny with <span className="text-yellow-600"><strong> Brahma Shri Jaanakiram Garu </strong></span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button
                size="lg"
                onClick={() => setModalOpen(true)}
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground divine-glow"
              >
                Get Your Horoscope
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground border-secondary divine-glow"
                asChild
              >
                <a href="tel:9553231199">Call Now</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
            <div className="w-2 h-2 bg-secondary rounded-full mt-2 animate-pulse" />
          </div>
        </div> */}
      </section>

      <ConsultationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        serviceType="horoscope"
      />
    </>
  );
};

export default HeroSection;
