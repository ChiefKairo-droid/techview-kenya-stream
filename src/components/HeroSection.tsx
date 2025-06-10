
import { Play, Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden rounded-xl">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-streaming-dark via-kenya-black to-tech-blue">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Kenya's Premier
              <span className="block bg-gradient-to-r from-kenya-red via-white to-kenya-green bg-clip-text text-transparent">
                Tech Platform
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 animate-fade-in">
              Discover the latest in Kenyan technology, innovation, and digital transformation. 
              From startup stories to tech tutorials, we've got it all.
            </p>
            
            {/* Featured Video Info */}
            <div className="flex items-center gap-4 mb-8 text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>2.4M views</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>2 days ago</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="bg-kenya-red hover:bg-kenya-red/90 text-white">
                <Play className="w-5 h-5 mr-2" />
                Watch Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent z-5"></div>
    </section>
  );
};

export default HeroSection;
