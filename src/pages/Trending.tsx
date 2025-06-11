
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import VideoGrid from '@/components/VideoGrid';
import Footer from '@/components/Footer';
import MobileNavBar from '@/components/MobileNavBar';

const Trending = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <Header />
          <main>
            <div className="container px-4 md:px-6 py-8">
              <h1 className="text-3xl font-bold mb-6">Trending Videos</h1>
              <p className="text-muted-foreground mb-8">
                Discover the most popular tech and engineering content in Kenya
              </p>
            </div>
            <VideoGrid />
          </main>
          <Footer />
        </SidebarInset>
        <MobileNavBar />
      </div>
    </SidebarProvider>
  );
};

export default Trending;
