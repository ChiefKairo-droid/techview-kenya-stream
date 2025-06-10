
import { useState } from 'react';
import { Search, Bell, Upload, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo and Menu */}
        <div className="flex items-center gap-4">
          <SidebarTrigger className="md:flex hidden" />
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-kenya"></div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-kenya-red to-kenya-green bg-clip-text text-transparent">
              TechView Kenya
            </h1>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search TechView Kenya..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-2 rounded-full border-2 focus:border-tech-blue"
            />
            <Button 
              size="icon" 
              className="absolute right-0 top-0 h-full rounded-r-full bg-tech-blue hover:bg-tech-blue/90"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Upload className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
