
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
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Play, Bell, Shield, Eye, Palette, Volume2, Accessibility } from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
    autoplay: true,
    quality: 'auto',
    captions: false,
    volume: [80],
    theme: 'system',
    notifications: {
      email: true,
      push: true,
      subscriptions: true,
      comments: false
    },
    privacy: {
      watchHistory: true,
      searchHistory: true,
      publicProfile: true
    },
    accessibility: {
      fontSize: 'medium',
      highContrast: false,
      screenReader: false
    }
  });

  const handleSettingChange = (category: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [key]: value
      }
    }));
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
                <h1 className="text-3xl font-bold mb-6">Settings</h1>
                <p className="text-muted-foreground mb-8">
                  Customize your TechView TV experience
                </p>

                <Tabs defaultValue="playback" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
                    <TabsTrigger value="playback">Playback</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="privacy">Privacy</TabsTrigger>
                    <TabsTrigger value="display">Display</TabsTrigger>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                  </TabsList>

                  <TabsContent value="playback">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Play className="w-5 h-5" />
                          Playback Settings
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="autoplay">Autoplay</Label>
                            <p className="text-sm text-muted-foreground">Automatically play the next video</p>
                          </div>
                          <Switch
                            id="autoplay"
                            checked={settings.autoplay}
                            onCheckedChange={(checked) => setSettings({...settings, autoplay: checked})}
                          />
                        </div>

                        <div className="space-y-3">
                          <Label>Video Quality</Label>
                          <Select 
                            value={settings.quality} 
                            onValueChange={(value) => setSettings({...settings, quality: value})}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="auto">Auto</SelectItem>
                              <SelectItem value="1080p">1080p</SelectItem>
                              <SelectItem value="720p">720p</SelectItem>
                              <SelectItem value="480p">480p</SelectItem>
                              <SelectItem value="360p">360p</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="captions">Always show captions</Label>
                            <p className="text-sm text-muted-foreground">Show subtitles when available</p>
                          </div>
                          <Switch
                            id="captions"
                            checked={settings.captions}
                            onCheckedChange={(checked) => setSettings({...settings, captions: checked})}
                          />
                        </div>

                        <div className="space-y-3">
                          <Label>Default Volume: {settings.volume[0]}%</Label>
                          <Slider
                            value={settings.volume}
                            onValueChange={(value) => setSettings({...settings, volume: value})}
                            max={100}
                            step={5}
                            className="w-full"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="notifications">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Bell className="w-5 h-5" />
                          Notification Settings
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Email Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                          </div>
                          <Switch
                            checked={settings.notifications.email}
                            onCheckedChange={(checked) => handleSettingChange('notifications', 'email', checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Push Notifications</Label>
                            <p className="text-sm text-muted-foreground">Browser push notifications</p>
                          </div>
                          <Switch
                            checked={settings.notifications.push}
                            onCheckedChange={(checked) => handleSettingChange('notifications', 'push', checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Subscription Notifications</Label>
                            <p className="text-sm text-muted-foreground">New videos from subscribed channels</p>
                          </div>
                          <Switch
                            checked={settings.notifications.subscriptions}
                            onCheckedChange={(checked) => handleSettingChange('notifications', 'subscriptions', checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Comment Replies</Label>
                            <p className="text-sm text-muted-foreground">Replies to your comments</p>
                          </div>
                          <Switch
                            checked={settings.notifications.comments}
                            onCheckedChange={(checked) => handleSettingChange('notifications', 'comments', checked)}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="privacy">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="w-5 h-5" />
                          Privacy & Data
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Save Watch History</Label>
                            <p className="text-sm text-muted-foreground">Keep track of videos you've watched</p>
                          </div>
                          <Switch
                            checked={settings.privacy.watchHistory}
                            onCheckedChange={(checked) => handleSettingChange('privacy', 'watchHistory', checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Save Search History</Label>
                            <p className="text-sm text-muted-foreground">Remember your search queries</p>
                          </div>
                          <Switch
                            checked={settings.privacy.searchHistory}
                            onCheckedChange={(checked) => handleSettingChange('privacy', 'searchHistory', checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Public Profile</Label>
                            <p className="text-sm text-muted-foreground">Allow others to view your profile</p>
                          </div>
                          <Switch
                            checked={settings.privacy.publicProfile}
                            onCheckedChange={(checked) => handleSettingChange('privacy', 'publicProfile', checked)}
                          />
                        </div>

                        <div className="pt-4 border-t">
                          <Button variant="outline" className="mr-4">Clear Watch History</Button>
                          <Button variant="outline" className="mr-4">Clear Search History</Button>
                          <Button variant="destructive">Download My Data</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="display">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Palette className="w-5 h-5" />
                          Display Settings
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          <Label>Theme</Label>
                          <Select 
                            value={settings.theme} 
                            onValueChange={(value) => setSettings({...settings, theme: value})}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                              <SelectItem value="dark">Dark</SelectItem>
                              <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <Label>Language</Label>
                          <Select defaultValue="en">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="sw">Swahili</SelectItem>
                              <SelectItem value="fr">French</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="account">
                    <Card>
                      <CardHeader>
                        <CardTitle>Account Settings</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                        <Button>Change Password</Button>

                        <div className="pt-6 border-t">
                          <h4 className="font-medium text-destructive mb-4">Danger Zone</h4>
                          <Button variant="destructive">Delete Account</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="accessibility">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Accessibility className="w-5 h-5" />
                          Accessibility
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          <Label>Font Size</Label>
                          <Select 
                            value={settings.accessibility.fontSize} 
                            onValueChange={(value) => handleSettingChange('accessibility', 'fontSize', value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="small">Small</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="large">Large</SelectItem>
                              <SelectItem value="extra-large">Extra Large</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label>High Contrast</Label>
                            <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                          </div>
                          <Switch
                            checked={settings.accessibility.highContrast}
                            onCheckedChange={(checked) => handleSettingChange('accessibility', 'highContrast', checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Screen Reader Support</Label>
                            <p className="text-sm text-muted-foreground">Enhanced support for screen readers</p>
                          </div>
                          <Switch
                            checked={settings.accessibility.screenReader}
                            onCheckedChange={(checked) => handleSettingChange('accessibility', 'screenReader', checked)}
                          />
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

export default Settings;
