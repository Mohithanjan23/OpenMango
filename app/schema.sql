-- Songs Table
create table songs (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  title text not null,
  artist text,
  album text,
  cover_url text,
  song_url text not null, -- Supabase Storage URL
  duration int,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Row Level Security (RLS) for Songs
alter table songs enable row level security;

-- Allow read access to everyone
create policy "Public songs are viewable by everyone"
  on songs for select
  using ( true );

-- Allow users to insert their own songs
create policy "Users can insert their own songs"
  on songs for insert
  with check ( auth.uid() = user_id );

-- Allow users to update their own songs
create policy "Users can update their own songs"
  on songs for update
  using ( auth.uid() = user_id );

-- Allow users to delete their own songs
create policy "Users can delete their own songs"
  on songs for delete
  using ( auth.uid() = user_id );

-- Storage Policy
-- Bucket: music
insert into storage.buckets (id, name, public) values ('music', 'music', true);

-- Allow authenticated uploads to 'music' bucket
create policy "Authenticated users can upload music"
  on storage.objects for insert
  to authenticated
  with check ( bucket_id = 'music' );

-- Allow public read access to 'music' bucket
create policy "Public can read music"
  on storage.objects for select
  using ( bucket_id = 'music' );
