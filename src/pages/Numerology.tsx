import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import numerologyServices, { NumerologyService } from "@/data/numerologyServices";
import { Button } from "@/components/ui/button";
import SlokaCard from "@/components/SlokaCard";
import numerologyBanner from "@/assets/slokas/numerology-banner.png";
import { useNavigate } from "react-router-dom";

const Numerology = () => {
  const navigate = useNavigate();

  const handleServiceClick = (service: NumerologyService) => {
    navigate(`/numerology/${service.slug}`);
  };

  return (
    <div>
      {/* HEADER SECTION */}
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12 mt-8">
            <h1 className="text-5xl font-bold font-playfair text-primary mb-6">
              Numerology
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Where numbers whisper the story of your life's true path
            </p>
          </div>

          {/* Sloka */}
          <div className="mb-16">
            <SlokaCard
              sloka={`ఓం పూర్ణమదః పూర్ణమిదం పూర్ణాత్ పూర్ణముదచ్యతే
                      పూర్ణస్య పూర్ణమాదయ పూర్ణమేవావశిష్యతే ||`}
              image={numerologyBanner}
              height="h-60"
            />
          </div>


          <Card className="p-8 border-2 border-secondary/30 mb-16">
  <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
    What is Numerology?
  </h2>

  <div className="space-y-4 font-playfair text-secondary leading-relaxed">

    <p>
      Numerology is an ancient metaphysical science that studies the
      vibrational power of numbers and their influence on human life. 
      Every number—from your date of birth to the letters in your name—carries 
      a unique frequency that shapes your personality, strengths, challenges, 
      and destiny. 
    </p>

    <p>
      Just like astrology uses planets, numerology uses numbers as a 
      universal code to decode your life path, opportunities, and 
      hidden patterns. By understanding these number vibrations, you can 
      gain clarity about your relationships, career choices, financial 
      growth, and overall life direction.
    </p>

    <p>
      In numerology, your <strong>Birth Number</strong>, 
      <strong>Destiny Number</strong>, and <strong>Name Number</strong> work
      together to reveal the blueprint of your life. These calculations are 
      commonly derived using systems like the 
      <strong> Chaldean method</strong> and the 
      <strong> Loshu Grid</strong>, which map energetic patterns and karmic 
      influences.
    </p>

    <strong className="font-semibold text-secondary">
      Numerology helps you understand:
    </strong>

    <ul className="space-y-2 ml-6">
      <li className="flex items-start gap-2">
        <span className="text-secondary">✦</span>
        <span>Your personality traits and natural strengths</span>
      </li>

      <li className="flex items-start gap-2">
        <span className="text-secondary">✦</span>
        <span>Your life purpose and soul’s journey</span>
      </li>

      <li className="flex items-start gap-2">
        <span className="text-secondary">✦</span>
        <span>Compatibility in relationships and marriage</span>
      </li>

      <li className="flex items-start gap-2">
        <span className="text-secondary">✦</span>
        <span>Karmic lessons and obstacles</span>
      </li>

      <li className="flex items-start gap-2">
        <span className="text-secondary">✦</span>
        <span>Lucky colors, dates, directions & opportunities</span>
      </li>

      <li className="flex items-start gap-2">
        <span className="text-secondary">✦</span>
        <span>Name influence and how name correction improves success</span>
      </li>
    </ul>

    <p>
      Ultimately, numerology acts as a guiding tool, illuminating your
      path, strengthening your decisions, and bringing deeper understanding 
      into every sphere of life—health, wealth, career, marriage, and destiny.
    </p>

  </div>
</Card>



          {/* Power of Numbers */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary/30">
            <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
              The Power of Numbers
            </h2>

            <div className="space-y-4 font-playfair text-secondary">
              <p>
                Numerology is the ancient science of numbers and their mystical influence on human life.
                Every number carries a unique vibration that shapes your personality, destiny, and life events.
              </p>

              <strong>Our numerology services reveal:</strong>
              <ul className="space-y-3 ml-6">
                <li>✦ Life Path Number — Your soul's purpose</li>
                <li>✦ Name Number — The vibration of your identity</li>
                <li>✦ Lucky Numbers — For prosperity & growth</li>
                <li>✦ Career Direction — Based on numerology</li>
                <li>✦ Compatibility — Relationship harmony</li>
                <li>✦ Name Correction — Improve success & fortune</li>
              </ul>
            </div>
          </Card>

        </div>
      </div>

      {/* SERVICES LIST */}
      <section className="py-2 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-primary mb-4">
              Our Numerology Services
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Professional numerology consultations for accurate insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {numerologyServices.map((service) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full font-bold">
                    {service.price}
                  </div>
                </div>

                {/* CONTENT */}
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair text-primary group-hover:text-secondary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.shortDesc}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    View Details & Book
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Numerology;
