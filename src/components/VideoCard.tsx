
import { Clock, Eye, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import VideoMenu from './VideoMenu';

interface VideoCardProps {
  id: number;
  title: string;
  channel: string;
  views: string;
  duration: string;
  timestamp: string;
  thumbnail: string;
  channelAvatar?: string;
}

const VideoCard = ({ 
  id,
  title, 
  channel, 
  views, 
  duration, 
  timestamp, 
  thumbnail,
  channelAvatar 
}: VideoCardProps) => {
  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/watch/${id}`);
  };

  return (
    <div className="group cursor-pointer video-hover" onClick={handleVideoClick}>
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
          {duration}
        </div>
        {/* Video Menu */}
        <div className="absolute top-2 right-2">
          <VideoMenu 
            videoId={id.toString()} 
            videoTitle={title}
            videoUrl={`${window.location.origin}/watch/${id}`}
          />
        </div>
      </div>

      {/* Video Info */}
      <div className="flex gap-3 mt-3">
        {/* Channel Avatar */}
        <div className="flex-shrink-0">
          {channelAvatar ? (
            <img 
              src={channelAvatar} 
              alt={channel}
              className="w-9 h-9 rounded-full"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-tech-blue to-kenya-green flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          )}
        </div>

        {/* Video Details */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm md:text-base line-clamp-2 group-hover:text-tech-blue transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">{channel}</p>
          <div className="flex items-center gap-2 text-muted-foreground text-xs mt-1">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{views}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{timestamp}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
