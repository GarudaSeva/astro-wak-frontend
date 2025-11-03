import { Card } from "@/components/ui/card";
import mandalaPattern from "@/assets/mandala-pattern.png";

interface SlokaCardProps {
  sloka: string;
  translation?: string;
}

const SlokaCard = ({ sloka, translation }: SlokaCardProps) => {
  return (
    <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-secondary/30 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
        style={{
          backgroundImage: `url(${mandalaPattern})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative z-10">
        <div className="text-center mb-4">
          <div className="inline-block px-4 py-1 bg-secondary/20 rounded-full">
            <span className="text-sm font-semibold text-secondary ">Sacred Sloka</span>
          </div>
        </div>
        
        <p className="sloka-text text-xl md:text-2xl font-playfair text-secondary text-center leading-relaxed mb-4">
          {sloka}
        </p>
        
        {translation && (
          <p className="text-sm  text-primary text-center italic border-t border-border pt-4">
            {translation}
          </p>
        )}
      </div>
    </Card>
  );
};

export default SlokaCard;
