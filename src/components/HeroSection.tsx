import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import heroBackground from "@/assets/hero-cosmic-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(128, 0, 0, 0.4)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
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
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-fade-in-up">
          <Sparkles className="h-16 w-16 mx-auto mb-6 text-secondary animate-twinkle" />
          
          <h1 className="text-5xl md:text-7xl font-bold font-playfair text-primary-foreground mb-6 leading-tight">
            Welcome to <span className="text-secondary">Astro Wak</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground mb-4 max-w-3xl mx-auto">
            Your Gateway to Divine Guidance
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover your cosmic destiny with Brahma Shri Jaanakiram Garu
          </p>

          {/* Video Embed Inspired Section */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="relative pb-[56.25%] rounded-xl overflow-hidden shadow-2xl border-4 border-secondary/50">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/IUvoXnPHw6k?autoplay=1&mute=1&loop=1&playlist=IUvoXnPHw6k"
                title="Astrology Guidance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground divine-glow"
              asChild
            >
              <a href="/horoscope">Get Your Horoscope</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground border-secondary divine-glow"
              asChild
            >
              <a href="tel:9553231199">Book Consultation</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-2 h-2 bg-secondary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
