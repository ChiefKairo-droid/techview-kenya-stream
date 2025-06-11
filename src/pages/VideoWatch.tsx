
import { useParams } from 'react-router-dom';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavBar from '@/components/MobileNavBar';
import VideoPlayer from '@/components/VideoPlayer';

const VideoWatch = () => {
  const { id } = useParams();

  const handleAddToPlaylist = () => {
    console.log('Add to playlist clicked');
  };

  const handleDownload = () => {
    console.log('Download clicked');
  };

  const handleSave = () => {
    console.log('Save clicked');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <Header />
          <main className="container px-4 md:px-6 py-8">
            <VideoPlayer 
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
              title={`Sample Tech Video ${id}`}
              onAddToPlaylist={handleAddToPlaylist}
              onDownload={handleDownload}
              onSave={handleSave}
            />
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
