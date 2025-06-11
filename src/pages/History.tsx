
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavBar from '@/components/MobileNavBar';

const History = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <Header />
          <main>
            <div className="container px-4 md:px-6 py-8">
              <h1 className="text-3xl font-bold mb-6">Watch History</h1>
              <p className="text-muted-foreground mb-8">
                Videos you've recently watched
              </p>
              <div className="text-center py-12">
                <p className="text-muted-foreground">No watch history yet. Videos you watch will appear here.</p>
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

export default History;
