
import { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavBar from '@/components/MobileNavBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, Upload, Calendar, Eye, ThumbsUp, MessageSquare, Settings } from 'lucide-react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Tech enthusiast and content creator passionate about software development.',
    joinDate: '2024-01-15',
    avatar: ''
  });

  const stats = {
    videosUploaded: 12,
    totalViews: 15420,
    subscribers: 342,
    likes: 1250
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
    // In a real app, this would make an API call
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <Header />
          <main>
            <div className="container px-4 md:px-6 py-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-6 mb-8">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={profile.avatar} />
                    <AvatarFallback className="bg-gradient-to-r from-tech-blue to-kenya-green text-white text-2xl">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
                    <p className="text-muted-foreground mb-4">{profile.bio}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Joined {new Date(profile.joinDate).toLocaleDateString()}
                      </div>
                      <Badge variant="secondary">{stats.subscribers} subscribers</Badge>
                    </div>
                  </div>
                  <Button>
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Video
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-tech-blue">{stats.videosUploaded}</div>
                      <div className="text-sm text-muted-foreground">Videos</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-kenya-green">{stats.totalViews.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Views</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-kenya-red">{stats.subscribers}</div>
                      <div className="text-sm text-muted-foreground">Subscribers</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-purple-500">{stats.likes.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Likes</div>
                    </CardContent>
                  </Card>
                </div>

                <Tabs defaultValue="profile" className="space-y-6">
                  <TabsList>
                    <TabsTrigger value="profile">Profile Settings</TabsTrigger>
                    <TabsTrigger value="videos">My Videos</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="privacy">Privacy</TabsTrigger>
                  </TabsList>

                  <TabsContent value="profile">
                    <Card>
                      <CardHeader>
                        <CardTitle>Edit Profile</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleProfileUpdate} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Display Name</Label>
                            <Input
                              id="name"
                              value={profile.name}
                              onChange={(e) => setProfile({...profile, name: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={profile.email}
                              onChange={(e) => setProfile({...profile, email: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Input
                              id="bio"
                              value={profile.bio}
                              onChange={(e) => setProfile({...profile, bio: e.target.value})}
                              placeholder="Tell us about yourself..."
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="avatar">Profile Picture URL</Label>
                            <Input
                              id="avatar"
                              value={profile.avatar}
                              onChange={(e) => setProfile({...profile, avatar: e.target.value})}
                              placeholder="https://example.com/your-photo.jpg"
                            />
                          </div>
                          <Button type="submit">Save Changes</Button>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="videos">
                    <Card>
                      <CardHeader>
                        <CardTitle>Your Videos</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">Manage your uploaded videos</p>
                        <div className="text-center py-8">
                          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                          <p className="text-muted-foreground mb-4">No videos uploaded yet</p>
                          <Button>Upload Your First Video</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="analytics">
                    <Card>
                      <CardHeader>
                        <CardTitle>Channel Analytics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 border rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Eye className="w-4 h-4" />
                              <span className="font-medium">Total Views</span>
                            </div>
                            <div className="text-2xl font-bold">{stats.totalViews.toLocaleString()}</div>
                            <div className="text-sm text-green-600">+12% from last month</div>
                          </div>
                          <div className="p-4 border rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <ThumbsUp className="w-4 h-4" />
                              <span className="font-medium">Total Likes</span>
                            </div>
                            <div className="text-2xl font-bold">{stats.likes.toLocaleString()}</div>
                            <div className="text-sm text-green-600">+8% from last month</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="privacy">
                    <Card>
                      <CardHeader>
                        <CardTitle>Privacy Settings</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Public Profile</h4>
                            <p className="text-sm text-muted-foreground">Allow others to see your profile</p>
                          </div>
                          <Button variant="outline">Enabled</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Show Subscription List</h4>
                            <p className="text-sm text-muted-foreground">Display your subscriptions publicly</p>
                          </div>
                          <Button variant="outline">Disabled</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Comment Notifications</h4>
                            <p className="text-sm text-muted-foreground">Get notified about new comments</p>
                          </div>
                          <Button variant="outline">Enabled</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
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
