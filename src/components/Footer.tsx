import { Phone, MapPin, Mail } from "lucide-react";
import diyaIcon from "@/assets/diya-icon.png";

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold font-playfair text-secondary mb-4">Astro Wak</h3>
            <p className="text-sm leading-relaxed">
              Your gateway to divine guidance through Vedic astrology, numerology, and spiritual wisdom.
              Serving seekers with authentic astrological insights since years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-playfair text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="/horoscope" className="hover:text-secondary transition-colors">Janma Patrika</a></li>
              <li><a href="/numerology" className="hover:text-secondary transition-colors">Numerology</a></li>
              <li><a href="/gems" className="hover:text-secondary transition-colors">Gems</a></li>
              <li><a href="/muhurt" className="hover:text-secondary transition-colors">Shubha Muhurt</a></li>
              <li><a href="/pooja" className="hover:text-secondary transition-colors">Pooja & Homa</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold font-playfair text-secondary mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <p>Walbridge apts, Radha Nagar,<br />Sun City, Hyderabad – 500091</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary" />
                <div className="flex flex-col">
                  <a href="tel:9553231199" className="hover:text-secondary transition-colors">
                    +91 9553231199
                  </a>
                  <a href="tel:9441662365" className="hover:text-secondary transition-colors">
                    +91 9441662365
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Sree Rama Jayam */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex items-center justify-center gap-6 mb-6">
            <img src={diyaIcon} alt="Diya" className="h-12 w-12 animate-twinkle" />
            <p className="text-2xl font-bold font-playfair text-secondary">
              శ్రీ రామ జయం
            </p>
            <img src={diyaIcon} alt="Diya" className="h-12 w-12 animate-twinkle" />
          </div>
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Astro Wak | All Rights Reserved | Developed by Build your vision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
