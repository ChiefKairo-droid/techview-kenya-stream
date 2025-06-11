
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavBar from '@/components/MobileNavBar';
import { Bell } from 'lucide-react';

const Notifications = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <Header />
          <main>
            <div className="container px-4 md:px-6 py-8">
              <div className="flex items-center gap-4 mb-8">
                <Bell className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Notifications</h1>
              </div>
              <p className="text-muted-foreground mb-8">
                Stay updated with the latest from your subscriptions
              </p>
              <div className="text-center py-12">
                <p className="text-muted-foreground">No notifications yet. Subscribe to channels to get notified about new videos.</p>
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

export default Notifications;
