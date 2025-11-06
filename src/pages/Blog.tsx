import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "Understanding Your Birth Chart",
      excerpt: "Learn how to read and interpret the fundamental elements of your Janma Kundali",
      category: "Astrology Basics",
    },
    {
      title: "The Power of Gemstones in Vedic Astrology",
      excerpt: "Discover how gemstones can balance planetary energies and bring positive changes",
      category: "Gemstone Wisdom",
    },
    {
      title: "Navagraha: The Nine Planetary Deities",
      excerpt: "Explore the significance of the nine planets and their influence on our lives",
      category: "Planetary Knowledge",
    },
    {
      title: "Numerology: Your Life Path Number",
      excerpt: "Calculate and understand the deeper meaning of your Life Path Number",
      category: "Numerology",
    },
    {
      title: "Auspicious Timings for Important Events",
      excerpt: "Why muhurt matters and how to choose the right time for ceremonies",
      category: "Muhurt",
    },
    {
      title: "Remedies for Planetary Doshas",
      excerpt: "Practical Vedic remedies to mitigate negative planetary influences",
      category: "Remedies",
    }
  ];

  const externalResources = [
    {
      title: "Shubh Gems Astro Advice",
      description: "Comprehensive astrological guidance and gemstone information",
      url: "https://www.shubhgems.com/astro-advice"
    },
    {
      title: "Gemstone Wearing Procedures",
      description: "Detailed guide on how to wear planetary gemstones according to Vedic principles",
      url: "https://www.shubhgems.com/blog/post/gemstone-procedure-wear-planetary-stone"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up mt-8">
          {/* <BookOpen className="h-16 w-16 mx-auto mb-4 text-yellow-700 animate-twinkle" /> */}
          <h1 className="text-5xl md:text-5xl font-bold font-playfair text-primary mb-6">
            Knowledge Center
          </h1>
          <p className="text-xl font-playfair text-yellow-700 max-w-3xl mx-auto">
            Explore the ancient wisdom of Vedic astrology and spiritual sciences
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="p-8 md:p-12 border-2 border-secondary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="inline-block bg-secondary/20 rounded-full px-4 py-1 mb-4">
              <span className="text-sm font-semibold text-yellow-700">Featured Article</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-primary mb-4">
              The Complete Guide to Vedic Astrology
            </h2>
            <p className="text-lg font-playfair text-yellow-700 mb-6 leading-relaxed">
              Dive deep into the ancient science of Jyotish (Vedic Astrology) and understand how
              cosmic energies shape our destiny. This comprehensive guide covers everything from basic
              concepts to advanced techniques used by traditional astrologers.
            </p>
            <div className="flex items-center gap-12 text-sm font-playfair text-yellow-700 mb-6">
              <span className="bg-accent/20 px-3 py-1 rounded-full">Astrology</span>

              <a
                href="https://jyotishbooks.wordpress.com/2025/10/25/parashari-jyotish-a-complete-guide-to-vedic-astrology-by-mani-ji/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="sm" className="divine-glow">
                  Read Article
                </Button>
              </a>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-playfair text-primary mb-8">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-secondary/50 group cursor-pointer"
              >
                <div className="inline-block bg-secondary/20 rounded-full px-3 py-1 mb-3">
                  <span className="text-xs font-semibold text-yellow-700">{article.category}</span>
                </div>
                <h3 className="text-xl font-bold font-playfair text-primary mb-3 group-hover:text-yellow-700 transition-colors">
                  {article.title}
                </h3>
                <p className="font-playfair text-yellow-700 mb-4 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                {/* <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="group-hover:text-yellow-700">
                    Read More →
                  </Button>
                </div> */}
              </Card>
            ))}
          </div>
        </div>

        {/* External Resources */}
        <div>
          <h2 className="text-3xl font-bold font-playfair text-primary mb-8 text-center">
            Recommended Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {externalResources.map((resource, index) => (
              <Card
                key={index}
                className="p-6 border-2 border-secondary/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold font-playfair text-primary group-hover:text-yellow-700 transition-colors">
                    {resource.title}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-yellow-700 flex-shrink-0" />
                </div>
                <p className="font-playfair text-yellow-700 mb-4 text-sm">
                  {resource.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-secondary group-hover:text-yellow-700-foreground transition-colors"
                  asChild
                >
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    Visit Resource
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16">
          <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary/30">
            <h2 className="text-3xl font-bold font-playfair text-primary mb-4">
              Stay Connected with Cosmic Wisdom
            </h2>
            <p className="font-playfair text-yellow-700 mb-6 max-w-2xl mx-auto">
              Subscribe to receive astrological insights, gemstone guidance, and spiritual wisdom
              directly in your inbox
            </p>
            <div className="flex justify-center mt-6">
              <Button
                variant="default"
                size="sm"
                className="divine-glow"
                asChild
              >
                <a
                  href="https://wa.me/919553231199?text=Hello%20I%20would%20like%20to%20book%20a%20consultation%20with%20Astro%20Wak."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Consultation
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
