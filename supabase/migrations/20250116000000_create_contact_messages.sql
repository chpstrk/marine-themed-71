-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public to insert messages
CREATE POLICY "Allow public to insert contact messages" ON contact_messages
  FOR INSERT TO public
  WITH CHECK (true);

-- Create policy to allow authenticated users to view messages (for admin access)
CREATE POLICY "Allow authenticated users to view contact messages" ON contact_messages
  FOR SELECT TO authenticated
  USING (true);