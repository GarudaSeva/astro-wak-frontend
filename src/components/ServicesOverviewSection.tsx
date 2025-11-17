export default function ServicesOverviewSection() {
  const items = [
    // ASTROLOGY
    "Janma Patrika / Horoscope",
    "Detailed Horoscope Report",
    "Career, Business & Finance",
    "Match Making & Compatibility",
    "Marriage & Children Guidance",
    "Health Analysis",
    "Wealth & Prosperity",
    "Varshaphala / Transit Reports",
    "Dosha Analysis",

    // NUMEROLOGY
    "Complete Numerology Report",
    "Name Correction Report",
    "Baby Name Report",
    "Business Numerology",

    // MUHURTAMS
    "Namakaranam",
    "Annaprasana",
    "Kesa Khandana",
    "Karna Vedha",
    "Aksharabhyasa",
    "Gruha Pravesh",
    "Vivaha Muhurtam",
    "Bhoomi Pooja",
    "Business Muhurtam",
    "Land Registration Muhurtam",
    "Vehicle Muhurtam",
    "C-Section Delivery Muhurtam",
    "Travel Muhurtam",

    // GEMSTONE
    "Gemstone Consultation",

    // POOJAS & HOMAS
    "Ganapathi Homa",
    "Navagraha Homa",
    "Chandi Homa",
    "Lakshmi Pooja",
    "Saraswati Pooja",
    "Rudra Abhishekam",
    "Maha Mrutyunjaya Homa",
    "Sudarshana Homa",
    "Ayusha Homa",
  ];

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
                className="bg-yellow-50/30 hover:bg-secondary hover:text-white transition-all 
                px-4 py-2 rounded-xl text-center text-secondary border border-yellow-200
                text-sm font-medium cursor-default shadow-sm h-10"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
