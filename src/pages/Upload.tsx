
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavBar from '@/components/MobileNavBar';
import { Upload as UploadIcon } from 'lucide-react';

const Upload = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <Header />
          <main>
            <div className="container px-4 md:px-6 py-8">
              <div className="text-center py-12">
                <UploadIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h1 className="text-3xl font-bold mb-4">Upload Videos</h1>
                <p className="text-muted-foreground mb-8">
                  Share your tech and engineering content with the community
                </p>
                <p className="text-muted-foreground">Upload functionality will be available after authentication is implemented.</p>
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

export default Upload;
