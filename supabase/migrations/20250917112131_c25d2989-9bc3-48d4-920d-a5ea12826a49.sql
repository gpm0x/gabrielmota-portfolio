-- Create a table for waitlist submissions
CREATE TABLE public.waitlist_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(email)
);

-- Enable Row Level Security
ALTER TABLE public.waitlist_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public waitlist)
CREATE POLICY "Anyone can submit to waitlist" 
ON public.waitlist_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reading (only admin access)
CREATE POLICY "No public read access" 
ON public.waitlist_submissions 
FOR SELECT 
USING (false);