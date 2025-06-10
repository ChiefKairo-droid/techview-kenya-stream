
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoriesNav from '@/components/CategoriesNav';
import VideoGrid from '@/components/VideoGrid';
import Footer from '@/components/Footer';
import MobileNavBar from '@/components/MobileNavBar';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <Header />
          <main>
            <div className="container px-4 md:px-6 py-8">
              <HeroSection />
            </div>
            <CategoriesNav />
            <VideoGrid />
          </main>
          <Footer />
        </SidebarInset>
        <MobileNavBar />
      </div>
    </SidebarProvider>
  );
};

export default Index;
