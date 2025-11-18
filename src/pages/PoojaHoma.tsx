import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SlokaCard from "@/components/SlokaCard";
import { Flame } from "lucide-react";
import poojasBanner from "@/assets/slokas/poojas-homas.png";
import poojaServices, { PoojaService } from "@/data/poojaServices";
import { useNavigate } from "react-router-dom";

const PoojaHoma = () => {
  const navigate = useNavigate();

  const handleServiceClick = (service: PoojaService) => {
    navigate(`/pooja/${service.slug}`);
  };

  return (
    <div>

      {/* ---------------- HEADER + SLOKA ---------------- */}
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-12 mt-8">
            <h1 className="text-5xl font-bold font-playfair text-primary mb-6">
              Pooja & Homas
            </h1>
            <p className="text-xl font-playfair text-secondary max-w-3xl mx-auto">
              Manifest your desires & wishes through sacred rituals
            </p>
          </div>

          {/* Sloka */}
          <div className="mb-16">
            <SlokaCard
              sloka="ఓం సర్వమంగళమాంగళ్యే శివే సర్వార్థ సాధికే శరణ్యే త్రయంబకే గౌరీ నారాయణీ నమోస్తుతే||"
              // translation="Om, to the One who is the auspiciousness of all that is auspicious..."
              image={poojasBanner}
            />
          </div>

          {/* About Section */}
          <Card className="p-8 border-2 border-secondary/30 mb-8">
            <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
              The Power of Vedic Rituals
            </h2>
            <div className="space-y-4 text-secondary font-playfair leading-relaxed">
              <p>
                Pooja and Homa are ancient Vedic rituals that invoke divine blessings,
                remove obstacles, and create powerful spiritual energies.
              </p>
              <p>
                Fire (Agni) acts as a divine messenger that carries our prayers
                to the higher realms and purifies the surroundings.
              </p>

              <strong>Benefits:</strong>
              <ul className="space-y-2 ml-6">
                <li>✦ Removal of doshas and negative energies</li>
                <li>✦ Fulfillment of desires & goals</li>
                <li>✦ Health improvement</li>
                <li>✦ Business & financial growth</li>
                <li>✦ Spiritual upliftment</li>
                <li>✦ Family harmony</li>
                <li>✦ Protection from negativity</li>
              </ul>
            </div>
          </Card>

        </div>
      </div>


      {/* ---------------- SERVICES LIST ---------------- */}
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold font-playfair text-primary mb-6">
            Our Pooja & Homa Services
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Sacred fire rituals performed by experienced priests
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {poojaServices.map((service, index) => (
            <Card
              key={index}
              className="cursor-pointer group border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-xl"
              onClick={() => handleServiceClick(service)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.price}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  <Flame className="h-5 w-5 text-secondary" />
                  {service.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Button
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering card click
                    handleServiceClick(service);
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-12 border border-border/50">
          <Flame className="h-12 w-12 mx-auto mb-4 text-secondary animate-twinkle" />
          <h2 className="text-3xl font-bold font-playfair text-primary mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Experience the divine power of Vedic rituals. Book your pooja or homa today.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PoojaHoma;
