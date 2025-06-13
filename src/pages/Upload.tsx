
import { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavBar from '@/components/MobileNavBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload as UploadIcon, Film } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Upload = () => {
  const { t } = useTranslation();
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    privacy: 'public',
    videoFile: null as File | null,
    thumbnailFile: null as File | null,
  });

  const categories = [
    'technology', 'engineering', 'programming', 'aiMl', 
    'webDev', 'mobileDev', 'devops', 'cybersecurity'
  ];

  const locations = [
    'kenya', 'uganda', 'tanzania', 'rwanda', 
    'ethiopia', 'ghana', 'nigeria', 'southAfrica'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to upload videos",
        variant: "destructive",
      });
      return;
    }

    if (!formData.videoFile) {
      toast({
        title: "Video Required",
        description: "Please select a video file to upload",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    
    try {
      // For now, just show success message
      // In a real implementation, you would upload to storage
      toast({
        title: "Upload Started",
        description: "Your video is being processed. This may take a few minutes.",
      });
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        category: '',
        location: '',
        privacy: 'public',
        videoFile: null,
        thumbnailFile: null,
      });
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your video",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  if (!isAuthenticated) {
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
                  <h1 className="text-3xl font-bold mb-4">{t('uploadVideos')}</h1>
                  <p className="text-muted-foreground mb-8">
                    Please sign in to upload videos
                  </p>
                  <Button onClick={() => window.location.href = '/login'}>
                    {t('signIn')}
                  </Button>
                </div>
              </div>
            </main>
            <Footer />
          </SidebarInset>
          <MobileNavBar />
        </div>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <Header />
          <main>
            <div className="container px-4 md:px-6 py-8">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-4">{t('uploadVideos')}</h1>
                  <p className="text-muted-foreground">
                    {t('shareContent')}
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Film className="w-5 h-5" />
                      Upload New Video
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="videoFile">{t('videoFile')} *</Label>
                        <Input
                          id="videoFile"
                          type="file"
                          accept="video/*"
                          onChange={(e) => setFormData({...formData, videoFile: e.target.files?.[0] || null})}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="thumbnailFile">Thumbnail (Optional)</Label>
                        <Input
                          id="thumbnailFile"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setFormData({...formData, thumbnailFile: e.target.files?.[0] || null})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="title">{t('videoTitle')} *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => setFormData({...formData, title: e.target.value})}
                          placeholder="Enter video title"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">{t('videoDescription')}</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                          placeholder="Describe your video"
                          rows={4}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>{t('category')}</Label>
                          <Select onValueChange={(value) => setFormData({...formData, category: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((cat) => (
                                <SelectItem key={cat} value={cat}>
                                  {t(cat)}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>{t('location')}</Label>
                          <Select onValueChange={(value) => setFormData({...formData, location: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select location" />
                            </SelectTrigger>
                            <SelectContent>
                              {locations.map((loc) => (
                                <SelectItem key={loc} value={loc}>
                                  {t(loc)}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>{t('privacy')}</Label>
                        <Select onValueChange={(value) => setFormData({...formData, privacy: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select privacy" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">{t('public')}</SelectItem>
                            <SelectItem value="private">{t('private')}</SelectItem>
                            <SelectItem value="unlisted">{t('unlisted')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button type="submit" className="w-full" disabled={isUploading}>
                        {isUploading ? 'Uploading...' : 'Upload Video'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
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
