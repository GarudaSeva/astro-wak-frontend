import { Phone, MapPin, Mail } from "lucide-react";
import diyaIcon from "@/assets/lord-ganesh.png";

const Footer = () => {
  return (
    <footer className="bg-muted text-secondary py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold font-playfair text-secondary mb-4">Astro Wak</h3>
            <p className="text-sm leading-relaxed text-secondary">
              Your gateway to divine guidance through Vedic astrology, numerology, and spiritual wisdom.
              Serving seekers with authentic astrological insights since years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-playfair text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className=" text-secondary hover:text-secondary transition-colors">Home</a></li>
              <li><a href="/horoscope" className="text-secondary hover:text-secondary transition-colors">Janma Patrika</a></li>
              <li><a href="/numerology" className="text-secondary hover:text-secondary transition-colors">Numerology</a></li>
              <li><a href="/gems" className="text-secondary hover:text-secondary transition-colors">Gems</a></li>
              <li><a href="/muhurt" className="text-secondary hover:text-secondary transition-colors">Shubha Muhurt</a></li>
              <li><a href="/pooja" className="text-secondary hover:text-secondary transition-colors">Pooja & Homa</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold font-playfair text-secondary mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-secondary">Walbridge apts, Radha Nagar,<br />Sun City, Hyderabad – 500091</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary" />
                <div className="flex flex-col">
                  <a href="tel:9553231199" className="text-secondary hover:text-secondary transition-colors">
                    +91 9553231199
                  </a>
                  <a href="tel:9441662365" className="text-secondary hover:text-secondary transition-colors">
                    +91 9441662365
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Sree Rama Jayam */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <img src={diyaIcon} alt="Diya" className="text-secondary h-12 w-12" />
            <p className="text-2xl font-bold font-playfair text-secondary">
              శ్రీ రామ జయం
            </p>
            <img src={diyaIcon} alt="Diya" className="text-secondary h-12 w-12" />
          </div>
          <p className="text-center text-secondary text-sm flex flex-col sm:flex-row items-center justify-center gap-1 text-wrap">
            <span>© {new Date().getFullYear()} Astro Wak | All Rights Reserved |</span>
            <span>Developed by Build your vision</span>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
