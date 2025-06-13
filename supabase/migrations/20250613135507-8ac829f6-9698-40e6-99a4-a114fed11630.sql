
-- Update existing profiles table to add missing columns
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS location TEXT,
ADD COLUMN IF NOT EXISTS language TEXT DEFAULT 'en';

-- Add constraint for language if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'profiles_language_check'
    ) THEN
        ALTER TABLE public.profiles 
        ADD CONSTRAINT profiles_language_check 
        CHECK (language IN ('en', 'sw', 'fr'));
    END IF;
END $$;

-- Create videos table (only if it doesn't exist)
CREATE TABLE IF NOT EXISTS public.videos (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  video_url TEXT,
  duration INTEGER, -- in seconds
  views_count INTEGER DEFAULT 0,
  likes_count INTEGER DEFAULT 0,
  category_id UUID REFERENCES public.categories(id),
  uploader_id UUID REFERENCES auth.users(id),
  location TEXT,
  is_public BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Create subscriptions table (only if it doesn't exist)
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  channel_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id),
  UNIQUE(user_id, channel_id)
);

-- Create watch_later table (only if it doesn't exist)
CREATE TABLE IF NOT EXISTS public.watch_later (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  video_id UUID NOT NULL REFERENCES public.videos(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id),
  UNIQUE(user_id, video_id)
);

-- Create video_likes table (only if it doesn't exist)
CREATE TABLE IF NOT EXISTS public.video_likes (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  video_id UUID NOT NULL REFERENCES public.videos(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id),
  UNIQUE(user_id, video_id)
);

-- Enable Row Level Security on new tables
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.watch_later ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.video_likes ENABLE ROW LEVEL SECURITY;

-- Videos policies
DROP POLICY IF EXISTS "Anyone can view public videos" ON public.videos;
DROP POLICY IF EXISTS "Users can view own videos" ON public.videos;
DROP POLICY IF EXISTS "Users can insert own videos" ON public.videos;
DROP POLICY IF EXISTS "Users can update own videos" ON public.videos;
DROP POLICY IF EXISTS "Users can delete own videos" ON public.videos;

CREATE POLICY "Anyone can view public videos" ON public.videos FOR SELECT USING (is_public = true);
CREATE POLICY "Users can view own videos" ON public.videos FOR SELECT USING (auth.uid() = uploader_id);
CREATE POLICY "Users can insert own videos" ON public.videos FOR INSERT WITH CHECK (auth.uid() = uploader_id);
CREATE POLICY "Users can update own videos" ON public.videos FOR UPDATE USING (auth.uid() = uploader_id);
CREATE POLICY "Users can delete own videos" ON public.videos FOR DELETE USING (auth.uid() = uploader_id);

-- Subscriptions policies
DROP POLICY IF EXISTS "Users can view own subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "Users can manage own subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "Users can delete own subscriptions" ON public.subscriptions;

CREATE POLICY "Users can view own subscriptions" ON public.subscriptions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own subscriptions" ON public.subscriptions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own subscriptions" ON public.subscriptions FOR DELETE USING (auth.uid() = user_id);

-- Watch later policies
DROP POLICY IF EXISTS "Users can view own watch later" ON public.watch_later;
DROP POLICY IF EXISTS "Users can manage own watch later" ON public.watch_later;
DROP POLICY IF EXISTS "Users can delete own watch later" ON public.watch_later;

CREATE POLICY "Users can view own watch later" ON public.watch_later FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own watch later" ON public.watch_later FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own watch later" ON public.watch_later FOR DELETE USING (auth.uid() = user_id);

-- Video likes policies
DROP POLICY IF EXISTS "Users can view all likes" ON public.video_likes;
DROP POLICY IF EXISTS "Users can manage own likes" ON public.video_likes;
DROP POLICY IF EXISTS "Users can delete own likes" ON public.video_likes;

CREATE POLICY "Users can view all likes" ON public.video_likes FOR SELECT USING (true);
CREATE POLICY "Users can manage own likes" ON public.video_likes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own likes" ON public.video_likes FOR DELETE USING (auth.uid() = user_id);
