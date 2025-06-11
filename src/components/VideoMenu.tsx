
import { useState } from 'react';
import { MoreVertical, Share, Link, Download, Clock, Plus, Flag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

interface VideoMenuProps {
  videoId: string;
  videoTitle: string;
  videoUrl?: string;
}

const VideoMenu = ({ videoId, videoTitle, videoUrl }: VideoMenuProps) => {
  const { toast } = useToast();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: videoTitle,
        url: videoUrl || window.location.href,
      });
    } else {
      toast({
        title: "Share",
        description: "Share functionality will be enhanced soon",
      });
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(videoUrl || window.location.href);
      toast({
        title: "Link copied",
        description: "Video link copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Could not copy link to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    toast({
      title: "Download",
      description: "Download functionality will be available soon",
    });
  };

  const handleWatchLater = () => {
    toast({
      title: "Added to Watch Later",
      description: `"${videoTitle}" added to your Watch Later playlist`,
    });
  };

  const handleAddToPlaylist = () => {
    toast({
      title: "Add to Playlist",
      description: "Playlist functionality will be available soon",
    });
  };

  const handleReport = () => {
    toast({
      title: "Report",
      description: "Report functionality will be available soon",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => e.stopPropagation()}
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={handleAddToPlaylist}>
          <Plus className="mr-2 h-4 w-4" />
          Add to playlist
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleWatchLater}>
          <Clock className="mr-2 h-4 w-4" />
          Save to Watch later
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDownload}>
          <Download className="mr-2 h-4 w-4" />
          Download
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleShare}>
          <Share className="mr-2 h-4 w-4" />
          Share
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyLink}>
          <Link className="mr-2 h-4 w-4" />
          Copy link
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleReport}>
          <Flag className="mr-2 h-4 w-4" />
          Report
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default VideoMenu;
