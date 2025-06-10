
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoriesNav from '@/components/CategoriesNav';
import VideoGrid from '@/components/VideoGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container px-4 md:px-6 py-8">
          <HeroSection />
        </div>
        <CategoriesNav />
        <VideoGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
