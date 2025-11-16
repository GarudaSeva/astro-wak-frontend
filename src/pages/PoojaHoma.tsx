import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SlokaCard from "@/components/SlokaCard";
import { Flame } from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import diwaliImg from "@/assets/diwali-celebration.jpg";
import swastikImg from "@/assets/swastik-symbol.png";
import ServiceDetailModal from "@/components/ServiceDetailModal";

import ganapatiImg from "@/assets/services/ganapati-homa.jpg";
import navagrahaImg from "@/assets/services/navagraha-homa.jpg";
import lakshmiImg from "@/assets/services/lakshmi-pooja.jpg";
import saraswatiImg from "@/assets/services/saraswati-pooja.jpg";
import rudraImg from "@/assets/services/rudra-abhishekam.jpg";
import mahamrityunjayaImg from "@/assets/services/mahamrityunjaya-homa.jpg";
import sudarshanImg from "@/assets/services/sudarshana-homa.jpg";
import chandiImg from "@/assets/services/chandi-homa.jpg";
import ayushyaImg from "@/assets/services/ayushya-homa.jpg";
import poojasBanner from  "@/assets/slokas/poojas-homas.png"

const PoojaHoma = () => {
  const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<any>(null);

 const services = [
    {
      title: "Ganapati Homa",
      price: "₹5,100",
      image: ganapatiImg,
      description: "Remove obstacles and invoke Lord Ganesha's blessings for new beginnings and success in all endeavors.",
      benefits: [
        "Removal of obstacles in personal and professional life",
        "Success in new ventures and initiatives",
        "Enhanced wisdom and decision-making abilities",
        "Protection from negative energies",
        "Prosperity and good fortune"
      ],
      process: [
        "Sankalpa (intention setting) with your birth details",
        "Ganapati Dhyana and invocation",
        "Ganesh Puja with 21 sacred items",
        "Homa ritual with special herbs and offerings",
        "Ganapati Atharvasirsha recitation",
        "Mangala Aarti and prasad distribution"
      ],
      deliverables: [
        "Video recording of the entire ritual",
        "Energized Ganapati idol or yantra",
        "Sacred ash (vibhuti) from the homa",
        "Prasadam from the ceremony",
        "Detailed report of the ritual performed"
      ],
      additionalInfo: "This powerful ritual is especially beneficial when starting new business ventures, education, or any important life event. The sacred fire ceremony amplifies Lord Ganesha's blessings manifold."
    },
    {
      title: "Navagraha Homa",
      price: "₹11,100",
      image: navagrahaImg,
      description: "Pacify all nine planets and balance their energies to bring harmony, health, and prosperity into your life.",
      benefits: [
        "Balance of planetary energies in horoscope",
        "Relief from doshas and afflictions",
        "Improved health and vitality",
        "Enhanced career and financial prospects",
        "Mental peace and emotional stability",
        "Protection from planetary malefic effects"
      ],
      process: [
        "Detailed analysis of your planetary positions",
        "Sankalpa with birth details",
        "Individual worship of all nine planets",
        "Navagraha Stotra recitation",
        "Homa with planet-specific offerings",
        "Installation of energized Navagraha yantra",
        "Final aarti and blessings"
      ],
      deliverables: [
        "Complete video documentation",
        "Energized Navagraha yantra",
        "Sacred ash from nine planetary altars",
        "Detailed astrological report",
        "Prasadam and sacred thread",
        "Remedial recommendations"
      ],
      additionalInfo: "Performed during astrologically auspicious times for maximum benefit. Each planet is individually honored to ensure complete harmony in your astrological chart."
    },
    {
      title: "Lakshmi Pooja",
      price: "₹3,100",
      image: lakshmiImg,
      description: "Invoke Goddess Lakshmi's divine grace for wealth, prosperity, abundance, and overall material well-being.",
      benefits: [
        "Attraction of wealth and prosperity",
        "Success in business and investments",
        "Financial stability and growth",
        "Material comforts and luxuries",
        "Overall abundance in life",
        "Blessings for family prosperity"
      ],
      process: [
        "Purification and preparation rituals",
        "Lakshmi Dhyana and invocation",
        "16-step worship (Shodashopachara Puja)",
        "Sri Suktam recitation",
        "Offering of gold, grains, and prosperity items",
        "Lakshmi Ashtottara recitation",
        "Mangala Aarti and prasad"
      ],
      deliverables: [
        "Video recording of the entire puja",
        "Energized Sri Lakshmi photo/yantra",
        "Sacred coins blessed during puja",
        "Prasadam and kumkum",
        "Prosperity-enhancing recommendations"
      ],
      additionalInfo: "Especially powerful when performed on Fridays, during Diwali, or on Lakshmi-related auspicious days. The goddess's blessings bring not just material wealth but also spiritual prosperity."
    },
    {
      title: "Saraswati Pooja",
      price: "₹2,100",
      image: saraswatiImg,
      description: "Seek blessings of the Goddess of Knowledge for academic success, artistic excellence, and intellectual growth.",
      benefits: [
        "Enhanced learning and memory",
        "Success in education and examinations",
        "Development of artistic abilities",
        "Improved communication skills",
        "Clarity of thought and wisdom",
        "Excellence in creative fields"
      ],
      process: [
        "Meditation and invocation of Goddess Saraswati",
        "Traditional 16-step worship",
        "Placement of books and instruments for blessing",
        "Saraswati Kavacham recitation",
        "Offering of white flowers, fruits, and sweets",
        "Saraswati Stotram chanting",
        "Final aarti and prasad distribution"
      ],
      deliverables: [
        "Video documentation of the puja",
        "Energized Saraswati photo/yantra",
        "Blessed white thread for students",
        "Prasadam and sacred flowers",
        "Study-enhancing recommendations"
      ],
      additionalInfo: "Ideal for students, teachers, artists, musicians, and anyone in creative or intellectual fields. Traditionally performed on Vasant Panchami and during examination periods."
    },
    {
      title: "Rudra Abhishekam",
      price: "₹5,100",
      image: rudraImg,
      description: "Powerful ritual bathing of Lord Shiva's Lingam for health, spiritual growth, and divine protection.",
      benefits: [
        "Recovery from chronic health issues",
        "Spiritual advancement and inner peace",
        "Mental clarity and emotional balance",
        "Protection from negative influences",
        "Fulfillment of desires",
        "Moksha (spiritual liberation) pursuit"
      ],
      process: [
        "Installation and purification of Shiva Lingam",
        "Abhishekam with sacred items: milk, honey, yogurt, ghee, sugar",
        "Water from holy rivers",
        "Rudram and Chamakam chanting",
        "Bilva leaf offerings",
        "Sacred ash application",
        "Deep meditation and aarti"
      ],
      deliverables: [
        "Full video of abhishekam ritual",
        "Energized Rudraksha mala",
        "Sacred vibhuti (ash)",
        "Blessed Bilva leaves",
        "Prasadam and water from abhishekam"
      ],
      additionalInfo: "Mondays and Mahashivaratri are especially auspicious for this ritual. The abhishekam can be customized with specific offerings based on your intentions and needs."
    },
    {
      title: "Mahamrityunjaya Homa",
      price: "₹7,100",
      image: mahamrityunjayaImg,
      description: "Sacred fire ritual invoking Lord Shiva for protection from illness, accidents, and premature death.",
      benefits: [
        "Protection from serious health issues",
        "Recovery from diseases and ailments",
        "Increased longevity and vitality",
        "Victory over fears and anxieties",
        "Spiritual protection and strength",
        "Peace for departed souls"
      ],
      process: [
        "Sankalpa with specific intentions",
        "Shiva Panchakshari Mantra chanting",
        "Mahamrityunjaya Mantra 108/1008 times",
        "Homa with medicinal herbs and healing substances",
        "Rudraksha and bilva offerings",
        "Healing prayer circle",
        "Final abhishekam and aarti"
      ],
      deliverables: [
        "Complete video documentation",
        "Energized Mahamrityunjaya yantra",
        "Rudraksha blessed during homa",
        "Sacred ash with healing properties",
        "Audio of mantra chanting",
        "Health protection guidelines"
      ],
      additionalInfo: "One of the most powerful healing rituals in Vedic tradition. Can be performed for yourself or on behalf of loved ones facing health challenges."
    },
    {
      title: "Sudarshana Homa",
      price: "₹9,100",
      image: sudarshanImg,
      description: "Powerful protective ritual invoking Lord Vishnu's divine disc for victory over enemies and negative energies.",
      benefits: [
        "Protection from enemies and evil intentions",
        "Victory in legal matters and conflicts",
        "Removal of curses and black magic",
        "Spiritual shield against negativity",
        "Success in overcoming obstacles",
        "Divine protection for family"
      ],
      process: [
        "Installation of Sudarshana yantra",
        "Vishnu Sahasranama recitation",
        "Sudarshana Ashtakam chanting",
        "Fire ritual with protective mantras",
        "108 rounds of Sudarshana Mantra",
        "Offering of kumkum and turmeric",
        "Protection ceremony completion"
      ],
      deliverables: [
        "Full video of the homa ritual",
        "Energized Sudarshana yantra",
        "Protection thread (raksha)",
        "Sacred ash and kumkum",
        "Prasadam blessed by ritual",
        "Protection maintenance guidelines"
      ],
      additionalInfo: "Recommended when facing severe opposition, legal issues, or when protection from negative forces is needed. The divine disc of Vishnu provides impenetrable spiritual armor."
    },
    {
      title: "Chandi Homa",
      price: "₹11,100",
      image: chandiImg,
      description: "Invoke the fierce protective power of Divine Mother Durga for courage, strength, and victory over challenges.",
      benefits: [
        "Immense courage and fearlessness",
        "Victory over powerful enemies",
        "Removal of severe obstacles",
        "Protection from negative forces",
        "Empowerment and confidence",
        "Success in difficult endeavors"
      ],
      process: [
        "Elaborate setup with Goddess images",
        "Durga Saptashati path",
        "Chandi Homa with specific offerings",
        "Red flowers and kumkum worship",
        "Shakti Mantra repetitions",
        "Divine Mother's warrior aspect invocation",
        "Powerful blessing ceremony"
      ],
      deliverables: [
        "Complete video recording",
        "Energized Durga yantra",
        "Sacred red cloth blessed by Mother",
        "Kumkum and sacred ash",
        "Empowerment mantra audio",
        "Strength-enhancing practices"
      ],
      additionalInfo: "Especially powerful during Navaratri and when facing seemingly insurmountable challenges. The Divine Mother's fierce grace destroys all negativity and empowers devotees."
    },
    {
      title: "Ayushya Homa",
      price: "₹6,100",
      image: ayushyaImg,
      description: "Sacred fire ritual for longevity, vitality, health, and a long, healthy, prosperous life.",
      benefits: [
        "Extended lifespan and longevity",
        "Enhanced vitality and energy",
        "Prevention of accidents and mishaps",
        "Strong immunity and health",
        "Youthful vigor and strength",
        "Overall well-being and happiness"
      ],
      process: [
        "Ayurveda-based ritual setup",
        "Dhanvantari invocation",
        "Ayushya Suktam recitation",
        "Homa with medicinal herbs and grains",
        "Longevity mantras 108 times",
        "Energization of health items",
        "Blessing for long, healthy life"
      ],
      deliverables: [
        "Full ritual video documentation",
        "Energized health yantra",
        "Medicinal herbs blessed in ritual",
        "Sacred ash with healing energy",
        "Longevity-promoting prasadam",
        "Wellness lifestyle recommendations"
      ],
      additionalInfo: "Ideal for milestone birthdays, after health scares, or as preventive care. The ritual combines Vedic and Ayurvedic principles for holistic health and longevity."
    }
  ];

   const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div>
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up mt-8">
          {/* <Flame className="h-16 w-16 mx-auto mb-4 text-secondary animate-twinkle" /> */}
          <h1 className="text-5xl md:text-5xl font-bold font-playfair text-primary mb-6">
            Pooja & Homa Services
          </h1>
          <p className="text-xl font-playfair text-secondary max-w-3xl mx-auto">
            Manifest your desires & wishes through sacred rituals
          </p>
        </div>

        {/* Sloka */}
        <div className="mb-16">
          <SlokaCard
            sloka="ఓం సర్వమంగళమాంగళ్యే శివే సర్వార్థ సాధికే శరణ్యే త్రయంబకే గౌరీ నారాయణీ నమోస్తుతే||"
            translation="Om, to the One who is the auspiciousness of all that is auspicious, who is pure, who grants all desires, the one who is refuge, who has three eyes, Gauri (Parvati), Narayani, to You, I bow."
             image={poojasBanner}
          />
        </div>


        {/* About Section */}
        <div className="mb-16">
          <Card className="p-8 border-2 border-secondary/30">
            <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
              The Power of Vedic Rituals
            </h2>
            <div className="space-y-4 font-playfair text-secondary leading-relaxed">
              <p>
                Pooja (worship) and Homa (fire ritual) are ancient Vedic practices that have been performed
                for thousands of years to invoke divine blessings, remove obstacles, and manifest positive
                energies in one's life. These sacred ceremonies create a powerful spiritual connection between
                the devotee and the divine forces.
              </p>
              <p>
                During a Homa, offerings are made into the sacred fire (Agni) while chanting powerful mantras.
                Fire is considered the divine messenger that carries our prayers and offerings to the deities.
                The smoke, vibrations of mantras, and the sanctified atmosphere create transformative energies
                that purify the environment and the participants.
              </p>
              <br />
              <strong className="font-semibold font-playfair text-secondary ">
                Benefits of Performing Pooja & Homa:
              </strong>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Removal of planetary doshas and negative influences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Fulfillment of specific desires and goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Health improvement and disease prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Financial prosperity and business success</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Spiritual growth and mental peace</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Protection from negative energies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Harmonious family relationships</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>

      </div>

      <ConsultationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        serviceType="pooja"
      />
    </div>

 <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-6">
            Pooja & Homa Services
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Manifest your desires & wishes through sacred Vedic fire rituals and traditional worship ceremonies
          </p>
        </div>

       
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-primary/50 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleServiceClick(service)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
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
                    e.stopPropagation();
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
          <p className="text-secondary mb-6 max-w-2xl mx-auto">
            Experience the divine power of ancient Vedic rituals. Book your personalized pooja or homa ceremony today.
          </p>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          title={selectedService.title}
          price={selectedService.price}
          description={selectedService.description}
          benefits={selectedService.benefits}
          process={selectedService.process}
          deliverables={selectedService.deliverables}
          additionalInfo={selectedService.additionalInfo}
          serviceType="pooja"
        />
      )}
        

    </div>
  );
};

export default PoojaHoma;
