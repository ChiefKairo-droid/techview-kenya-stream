
import { useParams } from 'react-router-dom';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavBar from '@/components/MobileNavBar';
import VideoPlayer from '@/components/VideoPlayer';

const VideoWatch = () => {
  const { id } = useParams();

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <Header />
          <main className="container px-4 md:px-6 py-8">
            <VideoPlayer />
            <div className="mt-6">
              <h1 className="text-2xl font-bold mb-4">Sample Tech Video {id}</h1>
              <p className="text-muted-foreground">
                This is a placeholder for the video details. In a real implementation, 
                video data would be fetched based on the ID parameter.
              </p>
            </div>
          </main>
          <Footer />
        </SidebarInset>
        <MobileNavBar />
      </div>
    </SidebarProvider>
  );
};

export default VideoWatch;
