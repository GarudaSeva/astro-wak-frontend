import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SlokaCard from "@/components/SlokaCard";
import {
  Star,
  MessageCircle,
  FileText,
  Briefcase,
  Heart,
  Users,
  Activity,
  TrendingUp,
  Calendar,
  Shield,
} from "lucide-react";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import slokaBg from "@/assets/sloka-bg.jpg";
import askExpertImg from "@/assets/services/ask-expert.jpg";
import janamPatriImg from "@/assets/services/janam-patri.jpg";
import detailedReportImg from "@/assets/services/detailed-report.jpg";
import careerImg from "@/assets/services/career-business.jpg";
import matchingImg from "@/assets/services/matching.jpg";
import marriageImg from "@/assets/services/marriage-children.jpg";
import healthImg from "@/assets/services/health.jpg";
import wealthImg from "@/assets/services/wealth.jpg";

const HoroscopeComponent = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const services = [
    {
      title: "Ask An Expert / Talk to Astrologer",
      price: "Rs. 2,516/-",
      image: askExpertImg,
      shortDescription:
        "Horoscope highlights hand-written by ASTROWAK team. Get personal consultation.",
      description: `Got a circumstance you can't find the solution to? Things are totally against you? Not knowing the reasons for not coming out of it?

To overcome such circumstances, you wish the eternal support.

Whatever the circumstance or trouble you're facing, our Vedic astrologers are here to assist you and give you the exact answers you're looking for. With the assistance of Vedic astrology and Vedic devices accessible, our master astrologers will reply all your questions with the most extreme exactness. They will thoroughly analyze your birth chart and evaluate the strength of your horoscope.

Thus, if you got any pressing issues related to love, marriage, health, career, work, or any doshas - anything that's not letting you rest, ask our experts to get powerful insights and accurate answers.`,
      benefits: [
        "Easy to understand answers with minimal astrological charts",
        "Accurate predictions based on personalized birth chart and current transits",
        "Personalized remedial solutions that are effective and easy to follow",
        "Answers by expert Vedic astrologers with 20+ years of experience",
      ],
      process: [
        "Booking - Reserve your consultation slot",
        "Analyze the Horoscope - Our team examines your birth chart",
        "Scheduling - Within 2 business days, consultation time will be scheduled",
      ],
      deliverables: [
        "75-90 minutes one-on-one conversation",
        "No limit on number of questions",
        "Birth time rectification (+/- 5 min)",
        "PDF of Janam Kundali (Total Report)",
        "Deep insight of your horoscope",
        "Hand-written remedies & suggestions",
        "Multiple types of remedies suggested",
      ],
    },
    {
      title: "Janam Patri / Horoscope",
      price: "Rs. 1,517/-",
      image: janamPatriImg,
      shortDescription:
        "Complete birth chart revealing your cosmic blueprint and life path.",
      description: `Have you heard about Janampatri/Kundali/Horoscope at least once in your life? But do you know what powers the pages of Janampatri/Kundali/Horoscope hold for you?

It helps you to reveal your potential energy and what you can aim for. With the help of Janampatri/Kundali/Horoscope you'll get a more detailed analysis of your past, present and future.

Your horoscope is a sacred document that captures the exact planetary positions at the moment of your birth. This cosmic snapshot serves as your personal spiritual GPS, revealing the celestial influences that shape your destiny.`,
      benefits: [
        "Complete birth chart (Rasi and Navamsa)",
        "Planetary positions and their significances",
        "Dasha predictions (planetary periods)",
        "Career, marriage, and financial prospects",
        "Health indications and remedies",
        "Auspicious timings for major life events",
      ],
    },
    {
      title: "Detailed Life Report",
      price: "Rs. 1216/-",
      image: detailedReportImg,
      shortDescription:
        "Comprehensive analysis of all major life areas with predictions.",
      description: `Get a comprehensive analysis of your entire life based on your birth chart. This detailed report covers all major areas of your life including career, earnings, income, finance, marriage, and much more.

Our expert astrologers will analyze your horoscope thoroughly and provide accurate predictions for your future. Know your strengths, weaknesses, opportunities, and challenges.`,
      benefits: [
        "Comprehensive analysis for all major areas",
        "Career and earnings prospects",
        "Marriage and relationship compatibility",
        "Effects of major planetary periods (Dashas)",
        "Predictions for future and entire life",
        "Detailed remedies for obstacles",
      ],
    },
    {
      title: "Career, Business & Finance",
      price:"Rs. 599/-",
      image: careerImg,
      shortDescription:
        "Professional astrology guidance for career growth and financial success.",
      description: `Get professional astrological guidance for your career, business ventures, and financial planning. Our experts analyze your 10th house (career), 2nd house (wealth), and 11th house (income) to provide accurate predictions and remedies.

Understand the best career paths for you, timing for job changes, business partnerships, investment opportunities, and financial growth prospects.`,
      benefits: [
        "Career path recommendations",
        "Best timing for job changes",
        "Business partnership compatibility",
        "Investment timing and opportunities",
        "Financial growth prospects",
        "Remedies for professional obstacles",
      ],
    },
    {
      title: "Matching Horoscopes & Compatibility",
      price:"Rs. 599/-",
      image: matchingImg,
      shortDescription:
        "Comprehensive horoscope matching for marriage and relationships.",
      description: `Get detailed horoscope matching (Kundali Milan) for marriage. Our experts analyze Ashtakoot matching, Manglik dosha, and overall compatibility between partners.

Understand the physical, mental, and spiritual compatibility with your partner. Get insights into married life prospects, children, and long-term relationship harmony.`,
      benefits: [
        "Detailed Ashtakoot (36 points) matching",
        "Manglik dosha analysis",
        "Physical and mental compatibility",
        "Spiritual and emotional harmony",
        "Married life predictions",
        "Remedies for compatibility issues",
      ],
    },
    {
      title: "Marriage & Children",
      price:"Rs. 599/-",
      image: marriageImg,
      shortDescription:
        "Marriage timing, spouse characteristics, and children prospects.",
      description: `Get comprehensive analysis of your 7th house (marriage) and 5th house (children). Know the timing of your marriage, characteristics of your spouse, marital harmony, and prospects for children.

Our experts provide detailed predictions about married life, spouse's nature, family relationships, and remedies for any obstacles in marriage or having children.`,
      benefits: [
        "Marriage timing predictions",
        "Spouse characteristics and nature",
        "Marital harmony analysis",
        "Children prospects and timing",
        "Family relationship dynamics",
        "Remedies for marriage obstacles",
      ],
    },
    {
      title: "Health Analysis",
      price:"Rs. 599/-",
      image: healthImg,
      shortDescription:
        "Health predictions and remedies based on planetary positions.",
      description: `Get detailed health analysis based on your birth chart. Our experts analyze the 6th house, 8th house, and 12th house along with planetary positions to predict health issues and provide preventive remedies.

Understand your body constitution, susceptibility to diseases, and the best ways to maintain good health according to your horoscope.`,
      benefits: [
        "Detailed health predictions",
        "Disease susceptibility analysis",
        "Body constitution understanding",
        "Preventive health remedies",
        "Best diet and lifestyle for you",
        "Timing of health issues",
      ],
    },
    {
      title: "Wealth & Prosperity",
      price:"Rs. 599/-",
      image: wealthImg,
      shortDescription:
        "Financial prosperity analysis and wealth accumulation guidance.",
      description: `Get comprehensive wealth and prosperity analysis based on your 2nd house (wealth), 11th house (gains), and 9th house (fortune). Understand your earning potential, wealth accumulation capabilities, and financial prosperity.

Our experts provide guidance on best investment timings, wealth-building strategies, and remedies for financial growth.`,
      benefits: [
        "Wealth accumulation potential",
        "Earning capacity analysis",
        "Investment timing guidance",
        "Financial prosperity predictions",
        "Lakshmi yoga identification",
        "Remedies for wealth growth",
      ],
    },
    {
      title: "Varshaphala & Planets Transit Reports",
      price:"Rs. 599/-",
      image: janamPatriImg,
      shortDescription:
        "Annual predictions and planetary transit effects on your life.",
      description: `Get your annual Varshaphala (yearly predictions) and understand how current planetary transits are affecting your life. This report covers the entire year ahead with month-by-month predictions.

Understand the effects of major transits like Saturn, Jupiter, Rahu-Ketu on your life and get remedies to maximize positive effects and minimize negative influences.`,
      benefits: [
        "Complete year-ahead predictions",
        "Month-by-month forecast",
        "Major planetary transit effects",
        "Best timing for important activities",
        "Remedies for challenging periods",
        "Opportunities to maximize",
      ],
    },
    {
      title: "Dosha Report",
      price:"Rs. 599/-",
      image: detailedReportImg,
      shortDescription: "Comprehensive dosha analysis and remedial solutions.",
      description: `Get detailed analysis of various doshas in your horoscope like Manglik Dosha, Kaal Sarp Dosha, Pitra Dosha, and others. Understand their effects on different areas of your life and get effective remedies.

Our expert astrologers provide simple yet powerful remedies to reduce or nullify the negative effects of doshas and improve your life quality.`,
      benefits: [
        "Manglik Dosha analysis",
        "Kaal Sarp Dosha identification",
        "Pitra Dosha effects",
        "Other doshas analysis",
        "Effective remedial solutions",
        "Life-specific impact assessment",
      ],
    },
  ];

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-2 border-primary/20 hover:border-secondary/50"
                onClick={() => handleServiceClick(service)}
              >
                <div className="relative h-64 overflow-hidden">
                  {" "}
                  {/* Increased height */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold font-playfair text-primary mb-2 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>

                  {service.price && (
                    <p className="text-2xl font-bold text-secondary mb-3">
                      {service.price}
                    </p>
                  )}

                  <p className="text-secondary text-sm mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>

                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {" "}
                    View Details{" "}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <ServiceDetailModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title={selectedService?.title || ""}
        price={selectedService?.price}
        description={selectedService?.description || ""}
        benefits={selectedService?.benefits}
        process={selectedService?.process}
        deliverables={selectedService?.deliverables}
        serviceType="horoscope"
      />
    </div>
  );
};

export default HoroscopeComponent;
