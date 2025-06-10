
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const categories = [
  'All',
  'Tech News',
  'Startups',
  'AI & ML',
  'Mobile Apps',
  'Web Development',
  'Blockchain',
  'IoT',
  'Cybersecurity',
  'Digital Marketing',
  'Fintech',
  'Agritech'
];

const CategoriesNav = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container px-4 md:px-6 py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "secondary"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap flex-shrink-0 ${
                activeCategory === category 
                  ? 'bg-tech-blue hover:bg-tech-blue/90' 
                  : 'hover:bg-secondary/80'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesNav;
