import weddingImage from "@/assets/occasions/wedding.jpg";
import gruhaPravesamImage from "@/assets/occasions/gruha-pravesam.png";
import vehicleImage from "@/assets/occasions/vehicle.jpg";
import namingImage from "@/assets/occasions/naming.jpg";
import genStoneBanner from "@/assets/slokas/subha-muhurat-banner.png";
import annaPrasana from "@/assets/occasions/annaprasana.png";
import kesakandana from "@/assets/occasions/kesa-kandana.png";
import earpeicing from "@/assets/occasions/ear-peicing.png";
import bhoomipooja from "@/assets/occasions/bhoomi-pooja.png";
import aksaraBasya from "@/assets/occasions/aksarabasyam.png";

import { ServiceKey } from "@/types/serviceKeys";

export interface MuhuratService {
  id: string;
  slug: string;
  title: string;
  price: string;
  shortDesc: string;
  image: any;
  description: string;
  benefits?: string[];
  process?: string[];
  deliverables?: string[];
  additionalInfo?: string;
  serviceType: ServiceKey;
}

const muhuratServices: MuhuratService[] = [
  {
    id: "namakarana",
    slug: "namakatana",
    serviceType: "muhurt_namakaranam",
    title: "Namakarana Muhurat",
    price: "₹599",
    shortDesc: "Auspicious naming ceremony muhurat for bestowing newborn.",
    image: namingImage,
    description: `Namakarana is one of the most sacred samskaras in Hindu tradition. It is performed to officially give the baby a name in an auspicious muhurat that brings love, luck, prosperity, wealth, health, and divine blessings.

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
    slug: "annaprasana",
    serviceType: "muhurt_annaprasana",
    title: "Annaprasana Muhurat",
    price: "₹599",
    shortDesc: "Auspicious muhurat for your baby's first solid food ceremony.",
    image: annaPrasana,
    description: `Annaprasana is the sacred ceremony of feeding solid food (usually rice) to a baby for the first time. It is generally performed between 6 months to 1 year of age.

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
    slug: "kesa-khandana",
    serviceType: "muhurt_kesa_khandana",
    title: "Kesa Khandana Muhurat",
    price: "₹599",
    shortDesc: "Auspicious muhurat for the child’s first hair removal (Mundan) ritual.",
    image: kesakandana,
    description: `Kesa Khandana, also known as Mundan or Chaul Sanskar, is one of the sixteen important Samskaras. The ceremony involves shaving the child’s hair for the first time and is believed to remove past karmic influences and bring blessings.

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
    slug: "karna-vedha",
    serviceType:"muhurt_karna_vedha",
    title: "Karna Vedha Muhurat",
    price: "₹599",
    shortDesc: "Auspicious time for performing the sacred ear-piercing ritual.",
    image: earpeicing,
    description: `Karna Vedha is the sacred ear-piercing ceremony performed in early childhood. It is considered one of the most important samskaras ensuring prosperity, clarity, and protection.

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
    slug: "aksharabhyasa",
    serviceType: "muhurt_aksharabhyasa",
    title: "Aksharabhyasa Muhurat",
    price: "₹599",
    shortDesc: "Auspicious muhurat to begin a child’s education journey.",
    image: aksaraBasya,
    description: `Aksharabhyasa or Vidyarambham marks the beginning of a child’s learning experience. This sacred ritual introduces the child to education, writing, and knowledge.

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
    slug: "vivaha-muhurat",
    serviceType:"muhurt_vivaha",
    title: "Vivaha Muhurat",
    price: "₹499",
    shortDesc: "Auspicious marriage muhurat based on both bride and groom’s horoscopes.",
    image: weddingImage, // or Ring
    description: `Marriage is one of the most significant milestones in life. Selecting an auspicious Vivaha Muhurat ensures harmony, compatibility, and long-lasting prosperity.

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
    slug: "bhoomi-pooja",
    serviceType: "muhurt_bhoomi_pooja",
    title: "Bhoomi Pooja Muhurat",
    price: "₹499",
    shortDesc: "Auspicious timing for land worship and beginning house construction.",
    image: bhoomipooja, // or MountainSun
    description: `Bhoomi Pooja (Bhumi Puja) or Sankhustapana is performed before starting construction of a house or building. This sacred ritual honors Mother Earth and Vastu Purusha—the deity of directions—to bring prosperity, stability, and protection.

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
    slug: "griha-pravesh",
    serviceType: "muhurt_gruha_pravesh",
    title: "Griha Pravesh Muhurat",
    price: "₹499",
    shortDesc: "Find the perfect time to enter your new home for prosperity and positivity.",
    image: gruhaPravesamImage,
    description: `Griha Pravesh is the sacred ceremony performed before entering a newly built home. A proper muhurat ensures positivity, harmony, prosperity, and protection from negative influences.

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
    slug: "other-muhurats",
    serviceType:"muhurt_other",
    title: "Other Muhurats",
    price: "₹499",
    shortDesc: "Get auspicious muhurats for various important life events and activities.(Business, Vehicle, Registration, Travel, etc.)",
    image: vehicleImage,
    description: `We also provide muhurat selection for various significant life events beyond traditional ceremonies. These include business openings, land registration, vehicle usage, C-section timings, travel muhurats, and many more.

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
export default muhuratServices;
