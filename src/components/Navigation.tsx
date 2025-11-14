import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import swastik from "@/assets/image-removebg-preview.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/horoscope", label: "Horoscope" },
    { path: "/numerology", label: "Numerology" },
    { path: "/gems", label: "Gems" },
    { path: "/muhurt", label: "Shubha Muhurt" },
    { path: "/pooja", label: "Pooja & Homa" },
    { path: "/blog", label: "Blog" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src={swastik}
              alt="Astro Wak Logo"
              className="h-10 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <h1 className="text-2xl font-bold font-playfair text-primary">
                Astro Wak
              </h1>
              <strong className="text-xs font-playfair text-secondary">
                Divine Guidance
              </strong>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg transition-all ${
                  isActive(link.path)
                    ? "bg-accent text-primary font-semibold" // Lighter active state
                    : "text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" size="sm" className="ml-4" asChild>
              <a href="tel:9553231199">Book Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="default" className="w-full" asChild>
                <a href="tel:9553231199">Book Consultation</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
