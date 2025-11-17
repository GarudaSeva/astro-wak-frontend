import { Button } from "@/components/ui/button";
import { useState } from "react";
import SlokaCard from "@/components/SlokaCard";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import weddingImage from "@/assets/occasions/wedding.jpg";
import gruhaPravesamImage from "@/assets/occasions/gruha-pravesam.png";
import vehicleImage from "@/assets/occasions/vehicle.jpg";
import namingImage from "@/assets/occasions/naming.jpg";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import genStoneBanner from "@/assets/slokas/subha-muhurat-banner.png"
import annaPrasana from "@/assets/occasions/annaprasana.png"
import kesakandana from  "@/assets/occasions/kesa-kandana.png"
import earpeicing from "@/assets/occasions/ear-peicing.png"
import bhoomipooja from  "@/assets/occasions/bhoomi-pooja.png"
import aksaraBasya from "@/assets/occasions/aksarabasyam.png"
import { ServiceKey } from "@/types/serviceKeys";



interface Service {
  id: string;
  title: string;
  price: string;
  shortDesc: string;
  icon: any;
  fullDescription: string;
  benefits?: string[];
  process?: string[];
  deliverables?: string[];
  additionalInfo?: string;
  serviceType : ServiceKey;
}

const services: Service[] = [
  {
    id: "namakarana",
    serviceType: "muhurt_namakaranam",
    title: "Namakarana Muhurat",
    price: "₹599",
    shortDesc: "Auspicious naming ceremony muhurat for bestowing newborn.",
    icon: namingImage,
    fullDescription: `Namakarana is one of the most sacred samskaras in Hindu tradition. It is performed to officially give the baby a name in an auspicious muhurat that brings love, luck, prosperity, wealth, health, and divine blessings.

The ceremony is usually performed on the 11th, 21st, 29th day, or in the 3rd month from the birth of the child. The naming day varies across cultures, castes, and states, but the essence remains the same — welcoming the newborn into the world with a meaningful and blessed name.`,
    benefits: [
      "Blessings for child's future prosperity",
      "Protection and positive energy surrounding the newborn",
      "Strengthening family harmony and cultural bonding",
      "Auspicious beginning for the child’s identity",
      "Enhances the child’s overall growth vibrations"
    ],
    process: [
      "Provide baby’s birth details",
      "Astrologer analyses nakshatra & lunar chart",
      "Identify auspicious muhurat for naming",
      "Suggest lucky starting alphabets",
      "Receive ritual and ceremony guidance"
    ],
    deliverables: [
      "2–3 auspicious naming muhurat options",
      "Lucky alphabets for child’s name",
      "Ritual guidelines for ceremony",
      "Detailed timing and direction recommendations"
    ],
    additionalInfo: "Namakarana is traditionally performed within the first few weeks or months of birth but can also be performed later if needed."
  },
  {
    id: "annaprasana",
    serviceType: "muhurt_annaprasana",
    title: "Annaprasana Muhurat",
    price: "₹599",
    shortDesc: "Auspicious muhurat for your baby's first solid food ceremony.",
    icon: annaPrasana,
    fullDescription: `Annaprasana is the sacred ceremony of feeding solid food (usually rice) to a baby for the first time. It is generally performed between 6 months to 1 year of age.

For boys, it is traditionally done in even months (6th, 8th, 10th, 12th).  
For girls, it is performed in odd months (5th, 7th, 9th, 11th).

The ceremony also includes a symbolic ritual where various objects are placed in front of the baby, and whichever object the child picks first is believed to represent their future inclination.`,
    benefits: [
      "Blessings for child's health and nourishment",
      "Smooth transition to solid foods",
      "Positive future prospects symbolized through the selection ritual",
      "Strengthens family bonding",
      "Promotes divine blessings for growth and wellbeing"
    ],
    process: [
      "Provide baby's birth details",
      "Astrologer analyzes planetary strength and nakshatra",
      "Determine best month and date",
      "Receive full ritual guidelines",
      "Suggestions for symbolic object selection ceremony"
    ],
    deliverables: [
      "2–3 auspicious Annaprasana dates",
      "Exact time window for feeding ritual",
      "Guidelines for symbolic object selection",
      "Direction and setup recommendations"
    ],
    additionalInfo: "Symbolic items include books (knowledge), pen (wisdom), clay (property), jewels (wealth), money, flowers, and food items."
  },
  {
    id: "kesa-khandana",
    serviceType: "muhurt_kesa_khandana",
    title: "Kesa Khandana Muhurat",
    price: "₹599",
    shortDesc: "Auspicious muhurat for the child’s first hair removal (Mundan) ritual.",
    icon: kesakandana,
    fullDescription: `Kesa Khandana, also known as Mundan or Chaul Sanskar, is one of the sixteen important Samskaras. The ceremony involves shaving the child’s hair for the first time and is believed to remove past karmic influences and bring blessings.

It is usually performed within the first year, typically at 7, 9, or 11 months.  
Girls undergo this ritual (called Chaula Karma) in even years such as 2, 4, 6, etc.`,
    benefits: [
      "Removes past karmic influences",
      "Brings good luck and prosperity",
      "Strengthens spiritual and physical energy",
      "Protects the child from negative vibrations",
      "Enhances overall wellbeing"
    ],
    process: [
      "Share child’s birth details",
      "Astrologer evaluates planetary positions",
      "Select the most auspicious day",
      "Receive Mundan ritual instructions",
      "Direction and temple/home ceremony guidance"
    ],
    deliverables: [
      "2–3 Mundan muhurat options",
      "Specific shaving time recommendations",
      "Ritual preparation checklist",
      "Best direction for ritual performance"
    ],
    additionalInfo: "Mundan is believed to ensure the child’s prosperity, luck, and spiritual purity."
  },
  {
    id: "karna-vedha",
    serviceType:"muhurt_karna_vedha",
    title: "Karna Vedha Muhurat",
    price: "₹599",
    shortDesc: "Auspicious time for performing the sacred ear-piercing ritual.",
    icon: earpeicing,
    fullDescription: `Karna Vedha is the sacred ear-piercing ceremony performed in early childhood. It is considered one of the most important samskaras ensuring prosperity, clarity, and protection.

The ideal age for Karna Vedha is between 3 to 5 years. If done at the correct muhurat, this ritual is believed to enhance the child's future prospects, positivity, and fortune.`,
    benefits: [
      "Ensures a bright and prosperous future",
      "Protects the child from negative energies",
      "Enhances clarity and overall wellbeing",
      "Strengthens cultural and spiritual connection",
      "Improves life-long positive vibrations"
    ],
    process: [
      "Provide child’s birth details",
      "Identify auspicious age window",
      "Calculate multiple muhurat options",
      "Receive step-by-step ritual process",
      "Guidelines for safe and traditional piercing ritual"
    ],
    deliverables: [
      "2–3 auspicious Karna Vedha dates",
      "Exact timing for piercing ritual",
      "Do's and don'ts for the ceremony",
      "Ritual items checklist"
    ],
    additionalInfo: "Performed with family blessings and priest guidance for maximum auspicious outcome."
  },
  {
    id: "aksharabhyasa",
    serviceType: "muhurt_aksharabhyasa",
    title: "Aksharabhyasa Muhurat",
    price: "₹599",
    shortDesc: "Auspicious muhurat to begin a child’s education journey.",
    icon: aksaraBasya,
    fullDescription: `Aksharabhyasa or Vidyarambham marks the beginning of a child’s learning experience. This sacred ritual introduces the child to education, writing, and knowledge.

It is usually performed in the 3rd year or in other auspicious odd years. The ceremony includes introducing the child to letters using slate, paper, or rice grains and offering prayers to Guru and deities for wisdom.`,
    benefits: [
      "Boosts learning ability and intelligence",
      "Enhances memory, focus, and academic success",
      "Provides divine blessings for educational growth",
      "Helps the child develop moral direction",
      "Strengthens mental and spiritual foundation"
    ],
    process: [
      "Share the child’s birth details",
      "Astrologer checks Mercury and Moon positions",
      "Finds auspicious dates for education start",
      "Receive Vidyarambham ritual guidelines",
      "Direction and Puja instructions"
    ],
    deliverables: [
      "2–3 auspicious Vidyarambham dates",
      "Preferred time slot for writing ritual",
      "Ritual and Puja guidelines",
      "Items required for ceremony",
      "Study direction recommendations"
    ],
    additionalInfo: "Proper muhurat ensures educational success, improved intellect, and a strong learning foundation."
  },
  {
    id: "vivaha-muhurat",
    serviceType:"muhurt_vivaha",
    title: "Vivaha Muhurat",
    price: "₹499",
    shortDesc: "Auspicious marriage muhurat based on both bride and groom’s horoscopes.",
    icon: weddingImage, // or Ring
    fullDescription: `Marriage is one of the most significant milestones in life. Selecting an auspicious Vivaha Muhurat ensures harmony, compatibility, and long-lasting prosperity.

A marriage muhurat is determined using the horoscopes of both the bride and groom. Factors such as Nakshatra, planetary positions, and doshas are examined to ensure the wedding takes place at a divinely favorable time.

This service checks compatibility, identifies auspicious wedding days, and provides complete guidance for a blessed and harmonious marital life.`,
    benefits: [
      "Strengthens relationship compatibility",
      "Ensures a harmonious and prosperous married life",
      "Reduces chances of marital obstacles or delays",
      "Aligns both partners with divine planetary support",
      "Provides safest and most auspicious wedding timings"
    ],
    process: [
      "Provide bride and groom birth details separately",
      "Horoscope matching & dosha analysis",
      "Identification of auspicious months and dates",
      "Evaluation of planetary transits",
      "Final selection of 2–3 best marriage muhurats"
    ],
    deliverables: [
      "2–3 auspicious Vivaha dates",
      "Exact ceremony timing recommendations",
      "Nakshatra and Tithi-based explanation",
      "Do's and Don'ts for the wedding day",
      "Compatibility and planetary alignment insights"
    ],
    additionalInfo: "Bride and groom details are required separately for accurate matching. Ideal for planning marriage dates within the year."
  },
  {
    id: "bhoomi-pooja",
    serviceType: "muhurt_bhoomi_pooja",
    title: "Bhoomi Pooja Muhurat",
    price: "₹499",
    shortDesc: "Auspicious timing for land worship and beginning house construction.",
    icon: bhoomipooja, // or MountainSun
    fullDescription: `Bhoomi Pooja (Bhumi Puja) or Sankhustapana is performed before starting construction of a house or building. This sacred ritual honors Mother Earth and Vastu Purusha—the deity of directions—to bring prosperity, stability, and protection.

It is ideally performed in the northeast corner of the land. House construction should not begin during Ashada Shukla to Kartik Shukla, as per traditional belief.

The ritual includes Vastu Puja, Balidaana, leveling of land, seed sowing, and laying the foundation stone.`,
    benefits: [
      "Blesses the land with positive energy",
      "Ensures smooth construction without obstacles",
      "Brings prosperity, health, and stability",
      "Removes Vastu defects and negative vibrations",
      "Invokes divine protection for the home and family"
    ],
    process: [
      "Provide owner’s birth details",
      "Share land location and property information",
      "Astrologer checks suitable months and Tithis",
      "Select best day for Bhoomi Pooja",
      "Guidance on Vastu-compliant rituals"
    ],
    deliverables: [
      "2–3 auspicious dates for Bhoomi Pooja",
      "Exact time frame for performing rituals",
      "Direction for digging and foundation laying",
      "Ritual checklist and offerings list",
      "Vastu recommendations for construction"
    ],
    additionalInfo: "Performed before starting construction. Includes rituals like Vastu Puja, Balidaana, seed sowing, and Shila Nyasa."
  },
  {
    id: "griha-pravesh",
    serviceType: "muhurt_gruha_pravesh",
    title: "Griha Pravesh Muhurat",
    price: "₹499",
    shortDesc: "Find the perfect time to enter your new home for prosperity and positivity.",
    icon: gruhaPravesamImage,
    fullDescription: `Griha Pravesh is the sacred ceremony performed before entering a newly built home. A proper muhurat ensures positivity, harmony, prosperity, and protection from negative influences.

The ceremony includes Ganesh Puja, Navagraha Shanti, Vastu Havan, and Satyanarayana Swami Vratam. Only one Griha Pravesh is done per home, so choosing the right muhurat is essential.

Auspicious days are calculated using the Panchang while considering the homeowner’s birth details.`,
    benefits: [
      "Brings prosperity and peace into the new home",
      "Removes Vastu doshas and negative energies",
      "Enhances positivity and long-term happiness",
      "Protects the family from future obstacles",
      "Ensures divine blessings and wellbeing"
    ],
    process: [
      "Provide homeowner’s birth details",
      "Share property location and orientation",
      "Select preferred entry period",
      "Astrologer evaluates lunar calendar and planets",
      "Choose 2–3 best dates for Griha Pravesh"
    ],
    deliverables: [
      "2–3 auspicious Griha Pravesh dates",
      "Entry direction instructions",
      "Complete ritual list for Griha Pravesh Puja",
      "Required items checklist",
      "Vastu do's and don'ts for new homes",
      "Recommended mantras and procedures"
    ],
    additionalInfo: "Includes guidance on Ganesh Puja, Navagraha Shanti, Havan, and Satyanarayana Vratam for maximum positivity."
  },
  {
    id: "other-muhurats",
    serviceType:"muhurt_other",
    title: "Other Muhurats",
    price: "₹499",
    shortDesc: "Get auspicious muhurats for various important life events and activities.(Business, Vehicle, Registration, Travel, etc.)",
    icon: vehicleImage,
    fullDescription: `We also provide muhurat selection for various significant life events beyond traditional ceremonies. These include business openings, land registration, vehicle usage, C-section timings, travel muhurats, and many more.

Each muhurat is calculated using the individual’s birth chart, planetary positions, Nakshatra, and Panchang to ensure the most favorable and safest timing.`,
    benefits: [
      "Ensures success and smooth outcomes in important events",
      "Provides protection from obstacles or delays",
      "Aligns activities with highly favorable planetary energy",
      "Reduces risks and improves chances of positive results",
      "Supports overall wellbeing and harmony"
    ],
    process: [
      "Select the type of muhurat you need",
      "Provide relevant birth details",
      "Share preferred timeframe",
      "Astrologer reviews planetary conditions",
      "Receive best-suited muhurat options"
    ],
    deliverables: [
      "1–3 auspicious date/time options",
      "Activity-specific do's and don'ts",
      "Direction and timing recommendations",
      "Additional Vastu or planetary guidelines"
    ],
    additionalInfo: "Covers business muhurats, travel, vehicle purchase, registrations, C-section timings, and many other personal or professional needs."
  }
];


const ShubhaMuhurt = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div>
    <div className="min-h-screen pt-24 pb-2">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up mt-8">
          {/* <Clock className="h-16 w-16 mx-auto mb-4 text-secondary animate-twinkle" /> */}
          <h1 className="text-5xl md:text-5xl font-bold font-playfair text-primary mb-6">
            Shubha Muhurt
          </h1>
          <p className="text-xl font-playfair text-secondary max-w-3xl mx-auto">
            Auspicious time for rituals, customs & celebrations
          </p>
        </div>

        {/* Sloka */}
        <div className="mb-16">
          <SlokaCard
            sloka="ఆదిత్యాది గ్రహస్సర్వేః సనక్షత్రాణాం స్వరాశయః కుర్వంతు మంగళమ్ నిత్యం యస్త్యైషా లగ్న పత్రికా||"
            translation="May all planets starting from the Sun, along with the constellations in their respective houses, always bestow auspiciousness as indicated in this lagna patrika (time chart)."
            image={genStoneBanner}
            opacity={1.9}
          />
        </div>

        {/* Content Grid */}
        <div className="space-y-8 mb-16">
          {/* Main Card - Full Width */}
          <Card className="p-8 border-2 border-secondary/30">
            <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
              What is Shubha Muhurt?
            </h2>
            <div className="space-y-4 font-playfair text-secondary leading-relaxed">
              <p>
                Shubha Muhurt refers to the most auspicious time for conducting important ceremonies,
                rituals, and life events. In Vedic astrology, time is not just a linear progression but
                a cosmic dance of planetary energies that can either support or hinder our endeavors.
              </p>
              <p>
                By selecting the right muhurt (auspicious time), we align our actions with favorable
                cosmic energies, ensuring success, prosperity, and divine blessings for our undertakings.
              </p>
              <br />
              <strong className="font-semibold font-playfair text-secondary ">
                Our Muhurt calculation considers:
              </strong>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Planetary positions and their strengths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Nakshatra (lunar mansion) suitability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Tithi (lunar day) appropriateness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Lagna (ascendant) compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Your personal birth chart alignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✦</span>
                  <span>Absence of inauspicious yogas</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Two Cards Side by Side */}
          <div className="grid lg:grid-cols-1 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary/30">
  <h3 className="text-2xl font-bold font-playfair text-primary mb-4">
    Why Shubha Muhurtam Matters
  </h3>

  <div className="space-y-4 font-playfair text-secondary">

    {/* Existing Points */}
    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Divine Alignment:</strong>{" "}
        Synchronize with cosmic energies.
      </div>
    </div>

    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Success Assurance:</strong>{" "}
        Minimize obstacles and maximize favorable outcomes.
      </div>
    </div>

    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Ancestral Wisdom:</strong>{" "}
        Follow time-tested Vedic traditions.
      </div>
    </div>

    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Peace of Mind:</strong>{" "}
        Confidence from divine timing.
      </div>
    </div>

    {/* NEW Points Added Below */}

    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Enhances Positive Results:</strong>{" "}
        Choosing the right time amplifies success in marriage, business, home rituals,
        and major life events.
      </div>
    </div>

    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Reduces Negative Impact:</strong>{" "}
        A proper muhurt avoids inauspicious planetary influences that may delay or
        disturb your plans.
      </div>
    </div>

    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Spiritual Harmony:</strong>{" "}
        Rituals performed at a sacred time attract divine blessings and energetic purity.
      </div>
    </div>

    <div className="flex items-start gap-2">
      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
      <div>
        <strong className="text-foreground">Ensures Long-Term Stability:</strong>{" "}
        Whether it is marriage, business opening, naming ceremony, or home entry —
        Shubha Muhurtam creates a strong and auspicious foundation.
      </div>
    </div>
  </div>
</Card>

          </div>
        </div>
      </div>

    </div>

    <section className="py-1 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-primary mb-4">
              Our Muhurat Services
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Auspicious timing for all your life's important moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
               <Card
  key={service.id}
  className="group hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 p-6 flex flex-col items-center text-center"
>
  {/* ICON CIRCLE */}
  <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center 
                  mb-4 group-hover:bg-primary/20 transition-colors shadow-md overflow-hidden">

    {typeof service.icon === "function" ? (
      <service.icon className="w-14 h-14 text-primary" />
    ) : (
      <img
        src={service.icon}
        alt={service.title}
        className="w-full h-full object-cover"
      />
    )}

  </div>

  {/* TITLE */}
  <h3 className="text-xl font-playfair font-bold text-primary group-hover:text-secondary transition-colors mb-2">
    {service.title}
  </h3>

  {/* PRICE */}
  <div className="text-2xl font-bold text-secondary mb-4">
    {service.price}
  </div>

  {/* SHORT DESCRIPTION */}
  <p className="text-secondary font-playfair text-sm mb-6">
    {service.shortDesc}
  </p>

  <Button
    onClick={() => handleServiceClick(service)}
    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
  >
    View Details & Book
  </Button>
</Card>


              );
            })}
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceDetailModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          title={selectedService.title}
          price={selectedService.price}
          description={selectedService.fullDescription}
          benefits={selectedService.benefits}
          process={selectedService.process}
          deliverables={selectedService.deliverables}
          additionalInfo={selectedService.additionalInfo}
          serviceType={selectedService.serviceType}
        />
      )}
    </div>
  );
};

export default ShubhaMuhurt;
