
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavBar from '@/components/MobileNavBar';
import { User } from 'lucide-react';

const Profile = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <Header />
          <main>
            <div className="container px-4 md:px-6 py-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-tech-blue to-kenya-green flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
                  <p className="text-muted-foreground">Manage your account and preferences</p>
                </div>
              </div>
              <div className="text-center py-12">
                <p className="text-muted-foreground">Profile management will be available after authentication is implemented.</p>
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

export default Profile;
