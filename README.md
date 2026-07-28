# MERIDIUM — site institucional (Next.js + Supabase)

Site institucional completo com painel administrativo real: login autenticado, banco de
dados Postgres (Supabase) e gerenciamento de conteúdo (serviços, portfólio, notícias,
equipe, legislação e contato) sem precisar editar código.

## 1. Pré-requisitos

- [Node.js](https://nodejs.org) 18 ou superior instalado no seu computador
- Uma conta gratuita em [supabase.com](https://supabase.com)
- Uma conta gratuita em [vercel.com](https://vercel.com) (para publicar o site)

## 2. Criar o projeto no Supabase

1. Acesse [supabase.com](https://supabase.com) → **New project**.
2. Escolha um nome (ex: `meridium`) e uma senha forte para o banco (guarde-a).
3. Aguarde a criação (leva ~2 minutos).
4. Vá em **SQL Editor** → **New query**, cole o conteúdo de `supabase/schema.sql`
   deste projeto e clique em **Run**.
5. Ainda no SQL Editor, rode uma **New query** com o conteúdo de `supabase/seed.sql`
   para popular o site com os dados reais da MERIDIUM.
6. Vá em **Storage** → **New bucket** → nome `media` → marque **Public bucket** → **Create**.
   (As políticas de acesso do bucket já foram criadas pelo `schema.sql`.)
7. Vá em **Authentication** → **Users** → **Add user** → cadastre o e-mail e senha que
   você (Douglas) vai usar para logar no painel administrativo do site.
8. Vá em **Project Settings** → **API** e copie:
   - `Project URL`
   - `anon public` key
   - `service_role` key (nunca compartilhe esta — fica só no servidor)

## 3. Configurar o projeto localmente

```bash
# dentro da pasta do projeto
cp .env.example .env.local
```

Abra `.env.local` e cole os valores copiados do Supabase:

```
NEXT_PUBLIC_SUPABASE_URL=https://SEU-PROJETO.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-anon-key-publica
SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key-secreta
```

Instale as dependências e rode localmente:

```bash
npm install
npm run dev
```

Abra http://localhost:3000 para ver o site, e http://localhost:3000/admin/login
para entrar no painel administrativo com o e-mail/senha criados no passo 2.7.

## 4. Publicar (deploy) na internet

A forma mais simples é pela [Vercel](https://vercel.com), que é feita pela mesma
empresa do Next.js e tem plano gratuito generoso:

1. Suba este projeto para um repositório no GitHub (crie uma conta gratuita se
   ainda não tiver, e um repositório novo — pode ser privado).
2. Em [vercel.com](https://vercel.com), clique em **Add New → Project** e
   selecione esse repositório.
3. Na tela de configuração, adicione as mesmas 3 variáveis de ambiente do
   `.env.local` (em **Environment Variables**).
4. Clique em **Deploy**. Em poucos minutos você recebe uma URL pública, por
   exemplo `meridium.vercel.app`.

## 5. Colocar um domínio próprio (ex: meridium.com.br)

1. Registre o domínio em qualquer registrador (Registro.br para `.com.br`,
   ou Namecheap/GoDaddy para `.com`).
2. Na Vercel, abra o projeto → **Settings → Domains** → adicione
   `meridium.com.br` (e `www.meridium.com.br`).
3. A Vercel mostra os registros DNS que você precisa cadastrar no painel do
   seu registrador (geralmente um registro `A` e um `CNAME`). Depois de
   configurar, a propagação leva de alguns minutos a 24h.

## 6. Aparecer no Google

Depois que o site estiver publicado em um domínio público:

1. Acesse o [Google Search Console](https://search.google.com/search-console).
2. Adicione a propriedade com a URL do seu domínio e verifique a posse
   (a Vercel/registrador geralmente oferece verificação por DNS ou meta tag).
3. Em **Sitemaps**, envie `https://meridium.com.br/sitemap.xml` (o Next.js já
   gera um sitemap básico automaticamente a partir das páginas do projeto —
   se quiser um sitemap mais completo, posso adicionar um `app/sitemap.ts`).
4. Use **Solicitar indexação** na URL principal para acelerar a primeira
   indexação. O Google normalmente indexa em alguns dias a poucas semanas.

## 7. Como o painel administrativo funciona

- `/admin/login` — tela de login (Supabase Auth real, e-mail + senha).
- `/admin/servicos`, `/admin/portfolio`, `/admin/noticias`, `/admin/equipe`,
  `/admin/legislacao`, `/admin/contato` — cada aba permite adicionar, editar
  e remover itens diretamente no banco de dados Postgres do Supabase.
- Qualquer pessoa sem login é redirecionada automaticamente para o login ao
  tentar acessar `/admin/*` (proteção feita em `middleware.ts`).
- O site público (`/`) já busca os dados direto do banco a cada requisição,
  então uma edição no painel aparece no site em até 60 segundos (ou
  imediatamente, dependendo do cache da Vercel).

## 8. Fotos, PDFs e certificados (Google Drive / OneDrive / upload direto)

O jeito mais simples e já pronto neste projeto: envie o arquivo em
**Supabase → Storage → bucket `media`**, copie a URL pública gerada, e cole
essa URL no campo correspondente do painel (ex: "URL da foto" na aba Equipe).

Se preferir manter os arquivos originais no Google Drive ou OneDrive (para já
ter backup automático lá), o caminho mais simples é: deixar os arquivos
organizados numa pasta compartilhada do Drive/OneDrive com "link público de
visualização" ativado, e colar esse link nos campos de URL do painel. Uma
integração mais profunda (upload direto do painel para o Drive via OAuth do
Google) é possível, mas exige configurar um app OAuth no Google Cloud Console
— posso te ajudar a montar isso depois se quiser ir por esse caminho.

## 9. Estrutura do projeto

```
app/
  page.tsx                 → site público (Server Component, busca do Supabase)
  layout.tsx                → layout raiz + metadata (SEO)
  globals.css                → design system (cores, tipografia, componentes)
  admin/
    login/page.tsx          → login real (Supabase Auth)
    layout.tsx               → shell do painel (menu, sair)
    servicos/page.tsx        → CRUD de planos/serviços
    portfolio/page.tsx       → CRUD de projetos do portfólio
    noticias/page.tsx        → CRUD de notícias
    equipe/page.tsx           → CRUD de equipe
    legislacao/page.tsx      → CRUD de normas
    contato/page.tsx          → formulário de contato institucional
components/
  site/                      → seções do site público
  admin/                     → tabela CRUD genérica + navegação do admin
lib/
  supabase/                  → clientes Supabase (browser, server, middleware)
  actions.ts                 → Server Actions (criar/editar/remover no banco)
  types.ts                   → tipos TypeScript compartilhados
supabase/
  schema.sql                 → tabelas + segurança (RLS) + bucket de storage
  seed.sql                   → conteúdo inicial real da MERIDIUM
```

## 10. Próximos passos sugeridos

- Substituir o telefone/e-mail de placeholder que ainda restarem por
  quaisquer outros números da empresa que você use (WhatsApp comercial, etc.)
- Adicionar fotos reais dos demais colaboradores na aba Equipe.
- Adicionar um `app/sitemap.ts` e `app/robots.ts` para SEO mais completo.
- Configurar um domínio de e-mail profissional (ex: contato@meridium.com.br)
  junto ao mesmo registrador do domínio.
