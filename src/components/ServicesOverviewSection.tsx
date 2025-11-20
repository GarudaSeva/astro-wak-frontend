import { useNavigate } from "react-router-dom";

export default function ServicesOverviewSection() {
  const navigate = useNavigate();

  const items = [
    // ASTROLOGY
    { title: "Janma Patrika / Horoscope", slug: "janam-patri", type: "horoscope" },
    { title: "Detailed Horoscope Report", slug: "detailed-life-report", type: "horoscope" },
    { title: "Career, Business & Finance", slug: "career-business-finance", type: "horoscope" },
    { title: "Match Making & Compatibility", slug: "matching-compatibility", type: "horoscope" },
    { title: "Marriage & Children Guidance", slug: "marriage-children", type: "horoscope" },
    { title: "Health Analysis", slug: "health-analysis", type: "horoscope" },
    { title: "Wealth & Prosperity", slug: "wealth-prosperity", type: "horoscope" },
    { title: "Varshaphala / Transit Reports", slug: "planets-transit-report", type: "horoscope" },
    { title: "Dosha Analysis", slug: "dosha-report", type: "horoscope" },

    // NUMEROLOGY
    { title: "Complete Numerology Report", slug: "complete-numerology", type: "numerology" },
    { title: "Name Correction Report", slug: "name-correction", type: "numerology" },
    { title: "Baby Name Report", slug: "baby-names-report", type: "numerology" },
    { title: "Business Numerology", slug: "business-numerology", type: "numerology" },

    // MUHURTAMS
    { title: "Namakaranam", slug: "namakatana", type: "muhurt" },
    { title: "Annaprasana", slug: "annaprasana", type: "muhurt" },
    { title: "Kesa Khandana", slug: "kesa-khandana", type: "muhurt" },
    { title: "Karna Vedha", slug: "karna-vedha", type: "muhurt" },
    { title: "Aksharabhyasa", slug: "aksharabhyasa", type: "muhurt" },
    { title: "Gruha Pravesh", slug: "griha-pravesh", type: "muhurt" },
    { title: "Vivaha Muhurtam", slug: "vivaha-muhurat", type: "muhurt" },
    { title: "Bhoomi Pooja", slug: "bhoomi-pooja", type: "muhurt" },
    { title: "Business Muhurtam", slug: "other-muhurats", type: "muhurt" },
    { title: "Land Registration Muhurtam", slug: "other-muhurats", type: "muhurt" },
    { title: "Vehicle Muhurtam", slug: "other-muhurats", type: "muhurt" },
    { title: "C-Section Delivery Muhurtam", slug: "other-muhurats", type: "muhurt" },
    { title: "Travel Muhurtam", slug: "other-muhurats", type: "muhurt" },

    // GEMSTONE
    { title: "Gemstone Consultation", slug: "gemstone-consultation", type: "gems" },

    // POOJAS & HOMAS
    { title: "Ganapathi Homa", slug: "Ganapati_Homa", type: "pooja" },
    { title: "Navagraha Homa", slug: "Navagraha_Homa", type: "pooja" },
    { title: "Chandi Homa", slug: "Chandi_Homa", type: "pooja" },
    { title: "Lakshmi Pooja", slug: "Lakshmi_Pooja", type: "pooja" },
    { title: "Saraswati Pooja", slug: "Saraswati_Pooja", type: "pooja" },
    { title: "Rudra Abhishekam", slug: "Rudra_Abhishekam", type: "pooja" },
    { title: "Maha Mrutyunjaya Homa", slug: "Mahamrityunjaya_Homa", type: "pooja" },
    { title: "Sudarshana Homa", slug: "Sudarshana_Homa", type: "pooja" },
    { title: "Ayusha Homa", slug: "Ayushya_Homa", type: "pooja" },
  ];

  const goToService = (type, slug) => {
    if (type === "horoscope") navigate(`/horoscope/${slug}`);
    if (type === "numerology") navigate(`/numerology/${slug}`);
    if (type === "muhurt") navigate(`/muhurt/${slug}`);
    if (type === "pooja") navigate(`/pooja/${slug}`);
    if (type === "gems") navigate(`/gems`);
  };

  return (
    <section className="py-14 mb-8">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary">
            Astro Wak Services for Every Life Need
          </h2>
          <p className="text-xl text-secondary max-w-4xl mx-auto mt-4 font-playfair">
            Accurate guidance in Horoscope, Numerology, Muhurtams, Gemstones, Poojas & more.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-3xl p-8 border border-yellow-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => goToService(item.type, item.slug)}
                className="bg-yellow-50/30 hover:bg-secondary hover:text-white transition-all 
                px-4 py-2 rounded-xl text-center text-secondary border border-yellow-200
                text-sm font-medium cursor-pointer shadow-sm h-10"
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
