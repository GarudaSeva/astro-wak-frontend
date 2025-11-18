import numerologyReportImg from "@/assets/numerology/numerology-report.png";
import nameNumerology from "@/assets/numerology/name-numerology.png";
import nameCorrection from "@/assets/numerology/name-correction.png";
import matchMatching from "@/assets/numerology/match-making.png";
import business from "@/assets/numerology/business.png";
import familyNumerology from "@/assets/numerology/family-numerology.png";
import { ServiceKey } from "@/types/serviceKeys";

export interface NumerologyService {
  id: string;
  slug: string;
  title: string;
  price: string;
  shortDesc: string;
  image: string;
  description: string;
  benefits?: string[];
  process?: string[];
  deliverables?: string[];
  additionalInfo?: string;
  serviceType: ServiceKey;
}

const numerologyServices: NumerologyService[] = [
  {
    id: "complete-numerology",
    slug: "complete-numerology",
    title: "Complete Numerology Report",
    price: "₹599",
    shortDesc: "A full numerology analysis based on Chaldean principles covering your destiny, strengths, challenges, and life patterns.",
    image: numerologyReportImg,
    description: `Numerology reveals the hidden vibrational influence of your name and date of birth. Based on the ancient Chaldean system, this report provides deep insights into your personality, life events, strengths, weaknesses, and future patterns.

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
    additionalInfo: "Delivered within 3-4 working days. Report is fully personalized based on Chaldean numerology.",
    serviceType: "numerology_complete"
  },

  {
    id: "name-correction",
    slug: "name-correction",
    title: "Name Correction Report",
    price: "₹519",
    shortDesc: "Correct your name vibration to align your destiny and unlock better growth using Chaldean numerology.",
    image: nameCorrection,
    description: `Your name carries a specific vibration that directly affects your personal and professional life. If your birth name does not match your birth number, it may create obstacles, delays, or reduced progress.

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
    additionalInfo: "Add preferred alternative names in the comment box for customized corrections.",
    serviceType : "numerology_name_correction"
  },

  {
    id: "baby-names-report",
    slug: "baby-names-report",
    title: "Baby Names & Numerology Report",
    price: "₹519",
    shortDesc: "Get auspicious and numerology-aligned baby name suggestions based on Chaldean numerology.",
    image: nameNumerology,
    description: `A baby’s name influences personality, confidence, success, and life path. Using Chaldean numerology, this report suggests the most suitable names aligned with the baby’s date of birth and vibration energy.

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
    additionalInfo: "Includes 5 naming filters: General, Word search, Numerology, Religion, Birth Star/Rasi.",
    serviceType: "numerology_baby_name"
  },

  {
    id: "match-making-report",
    slug: "match-making-report",
    title: "Numerology Match Making Report",
    price: "₹555",
    shortDesc: "Check date-of-birth compatibility for relationships, marriage, and long-term bonding.",
    image: matchMatching,
    description: `This numerology match-making report analyzes the DOB compatibility of two people using Chaldean numerology. It reveals relationship strength, emotional compatibility, future challenges, and remedies for better harmony.`,
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
    additionalInfo: "Highly recommended before marriage or serious relationships.",
    serviceType: "numerology_match_making"
  },

  {
    id: "business-numerology",
    slug: "business-numerology",
    title: "Numerology for Business",
    price: "₹555",
    shortDesc: "Choose an auspicious business name aligned with your birth numbers and success vibrations.",
    image: business,
    description: `A business name influences success, customers, financial growth, and brand reputation. This report checks the compatibility of your proposed business names with your birth numbers and suggests the most successful name combinations.`,
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
    additionalInfo: "Perfect for new businesses, rebranding, or product naming.",
    serviceType: "numerology_business"
  },

  {
    id: "family-numerology",
    slug: "family-numerology",
    title: "Numerology for Complete Family ",
    price: "₹1,216",
    shortDesc: "Numerology analysis for up to 3 family members covering destiny, growth, and remedies.",
    image: familyNumerology,
    description: `This comprehensive family numerology report provides detailed analysis for up to three members. It reveals each person's strengths, challenges, and compatibility within the family using Chaldean numerology.`,
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
    additionalInfo: "Ideal for understanding overall family balance and future harmony.",
    serviceType: "numerology_family"
  }
];


export default numerologyServices;
