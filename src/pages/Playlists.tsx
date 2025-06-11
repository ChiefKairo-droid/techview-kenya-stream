
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavBar from '@/components/MobileNavBar';

const Playlists = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <Header />
          <main>
            <div className="container px-4 md:px-6 py-8">
              <h1 className="text-3xl font-bold mb-6">Your Playlists</h1>
              <p className="text-muted-foreground mb-8">
                Organize your favorite videos into playlists
              </p>
              <div className="text-center py-12">
                <p className="text-muted-foreground">No playlists created yet. Create playlists to organize your videos.</p>
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

export default Playlists;
