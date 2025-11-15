import { Card } from "@/components/ui/card";

interface SlokaCardProps {
  sloka: string;
  translation?: string;
  image?: string;             // Dynamic background image
  badge?: string;             // Text above sloka
  opacity?: number;           // Background image opacity
  height?: string;            // Card height (e.g., "h-80" or "h-[400px]")
}

const SlokaCard = ({
  sloka,
  translation,
  image,
  badge = "Sacred Sloka",
  opacity = 1.8,
  height = "h-60", 
}: SlokaCardProps) => {
  return (
    <Card
      className={`relative p-8 rounded-3xl overflow-hidden group border border-secondary/40 shadow-lg hover:shadow-2xl transition-all duration-500 ${height}`}
    >
      {/* Background Image */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: `url(${image})`,
            opacity: opacity,
          }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">

        
        {/* Badge */}
        {/* <div className="inline-block mb-4 px-5 py-1 rounded-full bg-secondary/20 border border-secondary/40">
          <span className="text-sm font-semibold text-accent">
            {badge}
          </span>
        </div> */}

        {/* Sloka */}
        <p className="sloka-text text-2xl md:text-3xl font-playfair text-accent leading-relaxed mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {sloka}
        </p>

        {/* Translation */}
        {translation && (
          <p className="text-sm md:text-base text-yellow-200 italic border-t border-white/20 pt-4 mt-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            {translation}
          </p>
        )}
      </div>
    </Card>
  );
};

export default SlokaCard;
