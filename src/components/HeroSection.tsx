import { Button } from "@/components/ui/button";
import {  Star } from "lucide-react";
import { useState } from "react";
import heroBackground from "@/assets/hero-cosmic-bg.jpg";
import logo from "@/assets/lord-ganesh.png";
import ConsultationModalAdvanced from "./ConsultationModalAdvanced";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 50,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden  my-4 md:my-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(128, 0, 0, 0.6)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "brightness(0.9)",
        }}
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        {/* Animated Stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <Star
              key={i}
              className="absolute text-accent animate-twinkle"
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
          <div className="animate-fade-in-up bg-black/30 backdrop-blur-md p-6 md:p-12 rounded-3xl border border-accent/30">
            <img
              src={logo}
              alt="Astro Wak Symbol"
              className="h-20 w-24 md:h-24 md:w-32 mx-auto mb-2"
            />

            {/* Responsive Text */}
            <strong className="text-accent text-lg md:text-2xl">
              ఓం శ్రీ గురుభ్యో నమః
            </strong>

            <h1 className="text-4xl md:text-7xl font-bold font-playfair text-white mb-4 md:mb-6 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Welcome to <span className="text-yellow-600">Astro Wak</span>
            </h1>

            <p className="text-xl md:text-3xl text-white font-semibold mb-3 md:mb-4 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Your Gateway to Divine Guidance
            </p>

            <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Discover your cosmic destiny with{" "}
              <span className="text-yellow-600">
                <strong>Brahma Shri Jaanakiram Garu</strong>
              </span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 md:mt-8">
              <Button
                size="lg"
                onClick={() => setModalOpen(true)}
                className="text-lg px-6 py-4 md:px-8 md:py-6 bg-primary hover:bg-primary/90 text-primary-foreground divine-glow"
              >
                Get Your Horoscope
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-6 py-4 md:px-8 md:py-6 bg-accent hover:bg-accent/90 text-accent-foreground border-accent divine-glow"
                asChild
              >
                <a href="tel:9553231199">Call Now</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow (Desktop Only) */}
        <button
          onClick={handleScrollDown}
          className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
        >
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce z-20 text-accent">
            <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </button>
      </section>

      <ConsultationModalAdvanced
        price={599}
        open={modalOpen}
        onOpenChange={setModalOpen}
        serviceType="horoscope"
      />
    </>
  );
};

export default HeroSection;
