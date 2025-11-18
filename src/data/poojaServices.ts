import ganapatiImg from "@/assets/services/ganapati-homa.jpg";
import navagrahaImg from "@/assets/services/navagraha-homa.jpg";
import lakshmiImg from "@/assets/services/lakshmi-pooja.jpg";
import saraswatiImg from "@/assets/services/saraswati-pooja.jpg";
import rudraImg from "@/assets/services/rudra-abhishekam.jpg";
import mahamrityunjayaImg from "@/assets/services/mahamrityunjaya-homa.jpg";
import sudarshanImg from "@/assets/services/sudarshana-homa.jpg";
import chandiImg from "@/assets/services/chandi-homa.jpg";
import ayushyaImg from "@/assets/services/ayushya-homa.jpg";
import { ServiceKey } from "@/types/serviceKeys";

export interface PoojaService {
  title: string;
  slug: string;
  price: string;
  image: string;
  description: string;
  benefits: string[];
  process: string[];
  deliverables: string[];
  additionalInfo: string;
  serviceType: ServiceKey;
}

const poojaServices: PoojaService[] = [
    {
      title: "Ganapati Homa",
      serviceType: "pooja",
      slug: "Ganapati_Homa",
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
      slug: "Navagraha_Homa",
      serviceType: "pooja",
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
      slug: "Lakshmi_Pooja",
      serviceType: "pooja",
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
      slug: "Saraswati_Pooja",
      serviceType: "pooja",
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
      slug:  "Rudra_Abhishekam",
      serviceType: "pooja",
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
      slug: "Mahamrityunjaya_Homa",
      serviceType: "pooja",
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
      slug: "Sudarshana_Homa",
      price: "₹9,100",
      image: sudarshanImg,
      serviceType: "pooja",
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
      slug: "Chandi_Homa",
      price: "₹11,100",
      serviceType: "pooja",
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
      slug: "Ayushya_Homa",
      price: "₹6,100",
      serviceType: "pooja",
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
  
export default poojaServices;
