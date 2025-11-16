import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import SlokaCard from "@/components/SlokaCard";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import numerologyBanner from "@/assets/slokas/numerology-banner.png";

import numerologyReportImg from "@/assets/numerology/numerology-report.png";
import babyNamingImg from "@/assets/services/baby-naming.jpg";
import nameNumerology from "@/assets/numerology/name-numerology.png";
import nameCorrection from "@/assets/numerology/name-correction.png"
import matchMatching from "@/assets/numerology/match-making.png"
import business from "@/assets/numerology/business.png"
import familyNumerology from "@/assets/numerology/family-numerology.png"

interface Service {
  id: string;
  title: string;
  price: string;
  shortDesc: string;
  image: string;
  fullDescription: string;
  benefits?: string[];
  process?: string[];
  deliverables?: string[];
  additionalInfo?: string;
}

const services: Service[] = [
  {
    id: "complete-numerology",
    title: "Complete Numerology Report",
    price: "₹599",
    shortDesc: "A full numerology analysis based on Chaldean principles covering your destiny, strengths, challenges, and life patterns.",
    image: numerologyReportImg,
    fullDescription: `Numerology reveals the hidden vibrational influence of your name and date of birth. Based on the ancient Chaldean system, this report provides deep insights into your personality, life events, strengths, weaknesses, and future patterns.

This personalized numerology report includes a detailed analysis of your core numbers and the impact they create in your daily life, relationships, career, luck, and overall growth.`,
    benefits: [
      "Understand your core numerology blueprint",
      "Identify friendly and unfriendly numbers",
      "Discover lucky and unlucky colors, days, and professions",
      "Learn your karmic lessons and their significance",
      "Understand missing numbers and their effects",
      "Know your personal year, month, and date vibrations",
      "Receive remedies and actionable guidance"
    ],
    process: [
      "Provide your full name and date of birth",
      "Numerologist prepares Chaldean-based calculations",
      "Interpretation of all core numbers and patterns",
      "Compilation of a detailed personalized report"
    ],
    deliverables: [
      "Detailed PDF report (Driver, Conductor, Karmic, Personal Year analysis)",
      "Friendly & unfriendly number list",
      "Lucky colors, days, directions, and professions",
      "Missing and repeating number significance",
      "Remedies & personalized suggestions"
    ],
    additionalInfo: "Delivered within 3-4 working days. Report is fully personalized based on Chaldean numerology."
  },

  {
    id: "name-correction",
    title: "Name Correction Report",
    price: "₹519",
    shortDesc: "Correct your name vibration to align your destiny and unlock better growth using Chaldean numerology.",
    image: nameCorrection,
    fullDescription: `Your name carries a specific vibration that directly affects your personal and professional life. If your birth name does not match your birth number, it may create obstacles, delays, or reduced progress.

This report analyzes your current name, identifies mismatches with your date of birth, and suggests corrected name spellings for better success, harmony, and growth.`,
    benefits: [
      "Correct name vibrations to match your date of birth",
      "Unlock better opportunities in career, relationships, and health",
      "Remove numerological obstacles created by incompatible names",
      "Receive multiple corrected name options",
      "Understand the effects of your old and new name energies"
    ],
    process: [
      "Provide your full name, DOB, and preferred nicknames",
      "Birth number and name vibration analysis",
      "Name pyramid calculations for old and new names",
      "Suggestion of corrected names with explanations"
    ],
    deliverables: [
      "Driver & Conductor number matching",
      "Suggested name list based on your existing name",
      "Old and new name pyramid numbers",
      "Effects of old vs new name",
      "Steps for adopting the corrected name",
      "Remedies and expert suggestions"
    ],
    additionalInfo: "Add preferred alternative names in the comment box for customized corrections."
  },

  {
    id: "baby-names-report",
    title: "Baby Names & Numerology Report",
    price: "₹519",
    shortDesc: "Get auspicious and numerology-aligned baby name suggestions based on Chaldean numerology.",
    image: nameNumerology,
    fullDescription: `A baby’s name influences personality, confidence, success, and life path. Using Chaldean numerology, this report suggests the most suitable names aligned with the baby’s date of birth and vibration energy.

The report also analyzes the strength, meaning, and numerological progression of each recommended name.`,
    benefits: [
      "Find auspicious names based on baby’s date of birth",
      "Get numerology-compatible and meaningful names",
      "Multiple naming options based on your culture and preference",
      "Detailed vibration analysis of each suggested name",
      "Guidance for spelling variations"
    ],
    process: [
      "Share baby's DOB, time, and place",
      "Provide parents' names and traditions",
      "Optionally mention preferred alphabets or names",
      "Receive numerology-checked name suggestions"
    ],
    deliverables: [
      "3–5 numerology-aligned baby names",
      "Meaning and detailed significance of each name",
      "Lucky numbers, colors, and alphabets",
      "Name pyramid and progression analysis",
      "Cultural + modern naming options"
    ],
    additionalInfo: "Includes 5 naming filters: General, Word search, Numerology, Religion, Birth Star/Rasi."
  },

  {
    id: "match-making-report",
    title: "Numerology Match Making Report",
    price: "₹555",
    shortDesc: "Check date-of-birth compatibility for relationships, marriage, and long-term bonding.",
    image: matchMatching,
    fullDescription: `This numerology match-making report analyzes the DOB compatibility of two people using Chaldean numerology. It reveals relationship strength, emotional compatibility, future challenges, and remedies for better harmony.`,
    benefits: [
      "Understand compatibility between partners",
      "Know relationship strengths and weaknesses",
      "Predict career, health, children, and emotional bonding",
      "Identify conflict areas and receive remedies",
      "Get clarity before marriage or long-term commitment"
    ],
    process: [
      "Share DOB and full name of both individuals",
      "Chaldean numerology comparison between both charts",
      "Evaluation of relationship vibrations",
      "Preparation of compatibility reading"
    ],
    deliverables: [
      "Relationship compatibility score",
      "Career, health, and emotional bonding analysis",
      "Effect of both numbers on the marriage",
      "Strengths and challenges of the pair",
      "Remedies for improving compatibility"
    ],
    additionalInfo: "Highly recommended before marriage or serious relationships."
  },

  {
    id: "business-numerology",
    title: "Numerology for Business",
    price: "₹555",
    shortDesc: "Choose an auspicious business name aligned with your birth numbers and success vibrations.",
    image: business,
    fullDescription: `A business name influences success, customers, financial growth, and brand reputation. This report checks the compatibility of your proposed business names with your birth numbers and suggests the most successful name combinations.`,
    benefits: [
      "Business names aligned with your birth number",
      "Better financial, customer, and growth vibrations",
      "Analysis of name-to-name, name-to-DOB, and DOB-to-business number compatibility",
      "Lucky colors and branding guidance",
      "Suitable launch dates"
    ],
    process: [
      "Provide DOB and full names of all business partners",
      "Submit your business category and keywords",
      "Share 3–10 preferred business name ideas",
      "Numerologist checks vibration compatibility",
      "Receive final suggestions with analysis"
    ],
    deliverables: [
      "5–7 business name options",
      "Complete analysis of each name’s vibration strength",
      "Compatibility with owner’s numbers",
      "Lucky colors for branding",
      "Auspicious launch and registration dates",
      "Logo numerology guidance"
    ],
    additionalInfo: "Perfect for new businesses, rebranding, or product naming."
  },

  {
    id: "family-numerology",
    title: "Complete Family Numerology Report",
    price: "₹1,216",
    shortDesc: "Full numerology analysis for up to 3 family members covering destiny, growth, harmony, and remedies.",
    image: familyNumerology,
    fullDescription: `This comprehensive family numerology report provides detailed analysis for up to three members. It reveals each person's strengths, challenges, and compatibility within the family using Chaldean numerology.`,
    benefits: [
      "Individual numerology analysis for each member",
      "Understand family harmony and compatibility",
      "Identify strengths, challenges, and karmic lessons",
      "Find lucky and unlucky elements for each member",
      "Guidance for improving family relationships"
    ],
    process: [
      "Share DOB and full names of all members",
      "Chaldean calculations for each person",
      "Compatibility mapping within the family",
      "Preparation of personalized reports"
    ],
    deliverables: [
      "Personalized numerology report for up to 3 people",
      "Driver, Conductor, Karmic, and missing number analysis",
      "Lucky colors, professions, and directions",
      "Personal Year, Month, and Date vibrations",
      "Remedies and improvement suggestions"
    ],
    additionalInfo: "Ideal for understanding overall family balance and future harmony."
  }
];


const Numerology = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div>
    <div className="min-h-screen pt-24 pb-4">
      <div className="container mx-auto px-4">

        
      
        {/* Header */}
        <div className="text-center mb-12 mt-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-5xl font-bold font-playfair text-primary mb-6">
            Numerology
          </h1>
          <p className="text-xl font-playfair text-secondary max-w-3xl mx-auto">
            Where numbers whisper the story of your life's true path
          </p>
        </div>


   {/* Sloka */}
        <div className="mb-16">
          <SlokaCard
            sloka="ఓం పూర్ణమదః పూర్ణమిదం పూర్ణాత్ పూర్ణముదచ్యతే పూర్ణస్య పూర్ణమాదయ పూర్ణమేవావశిష్యతే||"
            // translation="Om, That is full, this is full. From fullness, fullness comes out. Taking fullness from fullness, what remains is also fullness."
            image={numerologyBanner}
            height="h-60"
          />
        </div>
      

        {/* 1️⃣ The Power of Numbers - Full Width */}
        <Card className="p-8 border-2 border-secondary/30 mb-16">
          <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
            The Power of Numbers
          </h2>
          <div className="space-y-4 font-playfair text-secondary">
            <p className="leading-relaxed mb-2">
              Numerology is the ancient science of numbers and their mystical
              influence on human life. Every number carries a unique vibration
              that resonates with the cosmic energies, shaping your personality,
              destiny, and life events.
            </p>

            <strong>Our numerology services reveal:</strong>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-2">
                <span>✦</span>
                <span>
                  <strong>Life Path Number:</strong> Your soul's purpose and
                  destiny
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>✦</span>
                <span>
                  <strong>Name Number:</strong> The vibration of your identity
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>✦</span>
                <span>
                  <strong>Lucky Numbers:</strong> Numbers that attract prosperity
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>✦</span>
                <span>
                  <strong>Career Path:</strong> Professional directions aligned
                  with your numbers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>✦</span>
                <span>
                  <strong>Compatibility:</strong> Relationship harmony through
                  numbers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>✦</span>
                <span>
                  <strong>Name Correction:</strong> Optimizing your name for
                  success
                </span>
              </li>
            </ul>
          </div>
        </Card>

       
      </div>
    </div>


    <div>

      <section className="py-2 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-primary mb-4">
              Our Numerology Services
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Professional numerology consultations to guide your life decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold">
                    {service.price}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair text-primary group-hover:text-secondary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.shortDesc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => handleServiceClick(service)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    View Details & Book
                  </Button>
                </CardContent>
              </Card>
            ))}
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
          serviceType="numerology"
        />
      )}

    </div>
    </div>
  );
};

export default Numerology;
