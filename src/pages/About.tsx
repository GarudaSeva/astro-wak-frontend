import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/astro-brahma-logo.png";

const essenceBlocks = [
  {
    title: "Surya - The Cosmic Source of Light & Life",
    intro:
      "In Vedic tradition, Surya is Pratyaksha Daivam - the visible God and the center of the Navagrahas. He symbolizes truth, vitality, illumination, and life force.",
    points: [
      "Clarity - revealing the truth hidden in one's chart",
      "Vitality - energizing purpose and direction",
      "Illumination - awakening inner wisdom",
    ],
    outro:
      "Just as the Sun sustains the cosmos, AstroWak sustains spiritual clarity and helps seekers align with cosmic harmony.",
  },
  {
    title: "Wak - The Divine Word of Lord Ganesha",
    intro:
      "\"Wak\" (Vak) is associated with Lord Ganesha as Vakpathaye - the Lord of Speech, Knowledge, and Conscious Understanding.",
    points: [
      "Divine Communication - clarity in expression",
      "Wisdom - interpreting cosmic messages",
      "Obstacle Removal - clearing emotional and mental blocks",
    ],
    outro:
      "\"Wak\" transforms astrology from information into meaningful spiritual conversation, helping seekers understand life with deeper awareness.",
  },
];

const objectives = [
  {
    title: "Illuminate Lives Through Divine Knowledge",
    description:
      "Just as Surya dispels darkness, AstroWak illuminates the mind and soul through astrology, numerology and spiritual guidance.",
  },
  {
    title: "Bridge Ancient Wisdom with Modern Life",
    description:
      "AstroWak translates timeless Vedic teachings into practical, modern-friendly guidance for conscious living.",
  },
  {
    title: "Empower Through Conscious Dialogue",
    description:
      "Inspired by Lord Ganesha, our consultations are not predictions but meaningful, insightful conversations rooted in compassion.",
  },
  {
    title: "Guide Spiritual Awakening & Inner Transformation",
    description:
      "Every reading becomes a mirror for deep reflection - helping you grow, heal and align with your higher purpose.",
  },
  {
    title: "Honour Surya - The Source of Truth & Energy",
    description:
      "Surya represents clarity, vitality and divine illumination - the foundation of all astrological insights at AstroWak.",
  },
  {
    title: "Embody the Wisdom of Lord Ganesha",
    description:
      "Guided by Vakpathaye, AstroWak removes obstacles of confusion and opens the path to clarity, purity, and spiritual understanding.",
  },
  {
    title: "Harmonize Cosmic Energies with Daily Life",
    description:
      "Through astrology, gems, pooja, muhurtha - we help you align your life with cosmic rhythms for effortless flow.",
  },
  {
    title: "Serve with Trust, Compassion & Authenticity",
    description:
      "AstroWak offers a safe, respectful, deeply spiritual space where seekers feel heard, understood and supported.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-4 pb-4">
      <section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 mt-8 animate-fade-in-up">
            <h1 className="text-5xl font-bold font-playfair text-primary mb-6">
              About AstroWak
            </h1>
            <p className="text-xl font-playfair text-secondary max-w-3xl mx-auto">
              A sacred bridge between cosmic intelligence and divine wisdom
            </p>
          </div>

          <Card className="mb-16 border-2 border-secondary/30 p-8 shadow-lg">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
              <div className="flex-1 space-y-4 lg:pr-8">
                <h2 className="text-3xl font-bold font-playfair text-primary">
                  What is AstroWak?
                </h2>
                <p className="text-lg font-playfair leading-relaxed text-secondary md:text-xl text-justify">
                  AstroWak is a sacred bridge between cosmic intelligence and
                  divine wisdom. "Astro" represents Surya - the source of
                  light, clarity, and cosmic order. "Wak" (from Vak)
                  represents the divine speech of Lord Ganesha - wisdom,
                  communication, and conscious understanding.
                </p>
                <p className="text-lg font-playfair leading-relaxed text-secondary md:text-xl text-justify">
                  AstroWak integrates ancient Vedic sciences with modern
                  accessibility, offering astrology, numerology, gem guidance,
                  poojas & homas, muhurtha selection, and spiritual rituals
                  with compassion, clarity, and authenticity.
                </p>
                <p className="text-lg font-playfair leading-relaxed text-secondary md:text-xl text-justify">
                  Rooted in the symbolism of the Lotus (purity), Surya
                  (illumination), and Ganesha (auspicious beginnings),
                  AstroWak helps every seeker understand their energies,
                  karmic patterns, and life direction with divine clarity.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button size="lg" asChild>
                    <Link to="/book/horoscope">Book Consultation</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/25 bg-secondary/10 text-primary hover:bg-secondary/20"
                    asChild
                  >
                    <a href="tel:9553231199" className="flex items-center gap-1.5">
                      <span>Call</span>
                      <span className="font-bold text-primary">+91 9553231199</span>
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center lg:w-[400px] lg:pl-10">
                <div className="w-full max-w-[330px] rounded-2xl border border-secondary/20 bg-accent/15 p-6 shadow-sm">
                  <img
                    src={logoImage}
                    alt="AstroWak logo"
                    className="mx-auto w-full max-w-[260px] object-contain"
                  />
                  <div className="mt-5 space-y-4 text-left">
                    {/* <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                        Astro
                      </p>
                      <p className="mt-1 font-playfair text-secondary">
                        Cosmic intelligence, guidance, and sacred order.
                      </p>
                    </div> */}
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                        Surya
                      </p>
                      <p className="mt-1 font-playfair text-secondary">
                        The source of light, clarity, vitality, and illumination.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                        Wak
                      </p>
                      <p className="mt-1 font-playfair text-secondary">
                        Divine speech, wisdom, communication, and conscious understanding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-8 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-2">
            {essenceBlocks.map((block) => (
              <Card
                key={block.title}
                className="h-full border-secondary/20 bg-card/85 p-7 shadow-lg"
              >
                <div className="space-y-5">
                  <h2 className="text-3xl font-bold font-playfair text-primary">
                    {block.title}
                  </h2>
                  <p className="font-playfair text-lg leading-relaxed text-secondary">
                    {block.intro}
                  </p>
                  <ul className="space-y-3 font-playfair text-lg text-secondary">
                    {block.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-2xl border border-secondary/15 bg-accent/30 px-4 py-3"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="font-playfair text-lg leading-relaxed text-secondary">
                    {block.outro}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 md:py-4">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-8xl space-y-5">
            <Card className="border-secondary/20 bg-card/85 p-8 shadow-lg md:p-10">
              <div className="space-y-6">
              <div className="inline-flex rounded-full border border-secondary/25 bg-card px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Divine Guidance
              </div>
              <h2 className="text-3xl font-bold font-playfair text-primary md:text-4xl">
                About Brahma Shri Jaanakiram Garu
              </h2>
              <p className="text-lg font-playfair leading-[1.95] text-secondary md:text-[1.15rem]">
                Welcome to AstroWak, your trusted gateway to divine guidance
                and cosmic wisdom. Led by the esteemed Brahma Shri Jaanakiram
                Garu, we bring you authentic Vedic astrology services rooted
                in ancient traditions. With years of dedicated study and
                practice in astrology, numerology, gemstone therapy, and
                Vedic rituals, our mission is to illuminate your path with
                spiritual insights and practical guidance for life's journey.
              </p>
              <p className="text-lg font-playfair leading-[1.95] text-secondary md:text-[1.15rem]">
                Brahma Sree Jaanakiram Sarma - son of Late Parimi Sreerama
                Murthy Garu - is a renowned Smartha Pandit, Astrologer,
                Muhurtha and Vastu expert with over 23 years of dedicated
                practice. With mastery in Vedas, Vedangas, Jyotisham, Vaastu,
                and other Sastras, he is celebrated for translating ancient
                scriptures into modern, practical wisdom. Widely respected
                across Andhra Pradesh and Telangana, he has guided thousands
                of individuals with compassion, clarity, and deep spiritual
                insight.
              </p>
              <blockquote className="rounded-r-2xl border-l-4 border-secondary bg-secondary/10 px-6 py-4 text-xl font-playfair italic text-primary">
                "Your cosmic guide to a brighter life journey."
              </blockquote>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-8xl">
          <h2 className="text-center text-4xl font-bold font-playfair text-primary md:text-5xl">
            Objectives of AstroWak
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg font-playfair leading-relaxed text-secondary">
            Every consultation, ritual, and recommendation at AstroWak is
            rooted in clarity, compassion, and alignment with divine wisdom.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {objectives.map((item) => (
              <Card
                key={item.title}
                className="h-full border-secondary/20 bg-card/80 p-7 shadow-lg"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-playfair text-primary">
                    {item.title}
                  </h3>
                  <p className="text-lg font-playfair leading-relaxed text-secondary">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8 pt-8">
        <div className="container mx-auto px-4">
          <Card className="border-secondary/20 bg-primary px-6 py-10 text-center text-primary-foreground shadow-2xl md:px-10">
            <h2 className="text-3xl font-bold font-playfair md:text-5xl">
              Align With Divine Clarity
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg font-playfair leading-relaxed text-primary-foreground/90">
              AstroWak is here to help you understand your energies, karmic
              patterns, and life direction with wisdom, authenticity, and
              compassion.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/horoscope">Explore Services</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/70 bg-transparent text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="tel:9553231199">Speak to AstroWak</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
