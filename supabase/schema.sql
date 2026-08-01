-- ============================================================
-- MERIDIUM — schema Supabase
-- Rode este arquivo em: Supabase Dashboard > SQL Editor > New query
-- ============================================================

create extension if not exists "uuid-ossp";

-- ---------- SERVIÇOS (tiers) ----------
create table if not exists services (
  id uuid primary key default uuid_generate_v4(),
  tier text not null,
  title text not null,
  items text not null default '',      -- itens separados por quebra de linha
  featured boolean not null default false,
  image_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ---------- PORTFÓLIO ----------
create table if not exists projects (
  id uuid primary key default uuid_generate_v4(),
  code text not null default '',
  category text not null default 'Engenharia',
  title text not null,
  description text not null default '',
  image_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ---------- NOTÍCIAS ----------
create table if not exists news (
  id uuid primary key default uuid_generate_v4(),
  published_date text not null,
  title text not null,
  description text not null default '',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ---------- EQUIPE ----------
create table if not exists team_members (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  role text not null default '',
  bio text not null default '',
  photo_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ---------- LEGISLAÇÃO ----------
create table if not exists legislation (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ---------- CONTATO (linha única) ----------
create table if not exists contact_info (
  id int primary key default 1,
  phone text not null default '',
  email text not null default '',
  address text not null default '',
  hours text not null default '',
  constraint single_row check (id = 1)
);

-- ============================================================
-- ROW LEVEL SECURITY
-- Leitura pública (o site institucional é público).
-- Escrita somente para usuários autenticados (o admin logado).
-- ============================================================

alter table services enable row level security;
alter table projects enable row level security;
alter table news enable row level security;
alter table team_members enable row level security;
alter table legislation enable row level security;
alter table contact_info enable row level security;

-- Leitura pública
create policy "public read services" on services for select using (true);
create policy "public read projects" on projects for select using (true);
create policy "public read news" on news for select using (true);
create policy "public read team" on team_members for select using (true);
create policy "public read legislation" on legislation for select using (true);
create policy "public read contact" on contact_info for select using (true);

-- Escrita apenas autenticado (qualquer usuário logado no projeto Supabase,
-- que na prática será só a conta admin criada em Authentication > Users)
create policy "auth write services" on services for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "auth write projects" on projects for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "auth write news" on news for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "auth write team" on team_members for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "auth write legislation" on legislation for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "auth write contact" on contact_info for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

-- ============================================================
-- STORAGE (arquivos: fotos, PDFs, certificados etc.)
-- Rode isto também no SQL Editor após criar o bucket "media"
-- em Storage > New bucket > nome "media" > marque "Public bucket".
-- ============================================================

create policy "public read media" on storage.objects
  for select using (bucket_id = 'media');
create policy "auth upload media" on storage.objects
  for insert with check (bucket_id = 'media' and auth.role() = 'authenticated');
create policy "auth update media" on storage.objects
  for update using (bucket_id = 'media' and auth.role() = 'authenticated');
create policy "auth delete media" on storage.objects
  for delete using (bucket_id = 'media' and auth.role() = 'authenticated');
