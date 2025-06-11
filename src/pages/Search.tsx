
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavBar from '@/components/MobileNavBar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search as SearchIcon, Filter } from 'lucide-react';
import VideoGrid from '@/components/VideoGrid';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [sortBy, setSortBy] = useState('relevance');
  const [duration, setDuration] = useState('any');
  const [uploadDate, setUploadDate] = useState('any');

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // In a real app, this would trigger the search API call
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <Header />
          <main>
            <div className="container px-4 md:px-6 py-8">
              <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSearch} className="mb-6">
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search TechView TV..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-4 pr-12 py-3 text-lg rounded-full border-2 focus:border-tech-blue"
                    />
                    <Button 
                      type="submit"
                      size="icon" 
                      className="absolute right-0 top-0 h-full rounded-r-full bg-tech-blue hover:bg-tech-blue/90"
                    >
                      <SearchIcon className="h-5 w-5" />
                    </Button>
                  </div>
                </form>

                {searchQuery && (
                  <>
                    <div className="flex items-center gap-4 mb-6 p-4 bg-muted rounded-lg">
                      <Filter className="h-5 w-5" />
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="relevance">Relevance</SelectItem>
                          <SelectItem value="date">Upload date</SelectItem>
                          <SelectItem value="views">View count</SelectItem>
                          <SelectItem value="rating">Rating</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any duration</SelectItem>
                          <SelectItem value="short">Under 4 minutes</SelectItem>
                          <SelectItem value="medium">4-20 minutes</SelectItem>
                          <SelectItem value="long">Over 20 minutes</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select value={uploadDate} onValueChange={setUploadDate}>
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Upload date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any time</SelectItem>
                          <SelectItem value="hour">Last hour</SelectItem>
                          <SelectItem value="day">Today</SelectItem>
                          <SelectItem value="week">This week</SelectItem>
                          <SelectItem value="month">This month</SelectItem>
                          <SelectItem value="year">This year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="mb-6">
                      <h1 className="text-2xl font-bold mb-2">Search results for "{searchQuery}"</h1>
                      <p className="text-muted-foreground">About 150 results found</p>
                    </div>

                    <VideoGrid />
                  </>
                )}

                {!searchQuery && (
                  <div className="text-center py-12">
                    <SearchIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <h1 className="text-3xl font-bold mb-4">Search TechView TV</h1>
                    <p className="text-muted-foreground mb-8">
                      Find the latest tech content, tutorials, and reviews
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                      <Button variant="outline" onClick={() => setSearchQuery('programming')}>
                        Programming
                      </Button>
                      <Button variant="outline" onClick={() => setSearchQuery('web development')}>
                        Web Dev
                      </Button>
                      <Button variant="outline" onClick={() => setSearchQuery('mobile apps')}>
                        Mobile Apps
                      </Button>
                      <Button variant="outline" onClick={() => setSearchQuery('AI machine learning')}>
                        AI/ML
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>
          <Footer />
        </SidebarInset>
        <MobileNavBar />
      </div>
    </SidebarProvider>
  );
};

export default Search;
