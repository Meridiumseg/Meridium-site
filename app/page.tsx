import { createClient } from "@/lib/supabase/server";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import ImpactSection from "@/components/site/ImpactSection";
import Manifesto from "@/components/site/Manifesto";
import About from "@/components/site/About";
import Diferencial from "@/components/site/Diferencial";
import AreasAtuacao from "@/components/site/AreasAtuacao";
import Method from "@/components/site/Method";
import Segmentos from "@/components/site/Segmentos";
import PorQueEscolher from "@/components/site/PorQueEscolher";
import Services from "@/components/site/Services";
import Portfolio from "@/components/site/Portfolio";
import News from "@/components/site/News";
import Legislation from "@/components/site/Legislation";
import Team from "@/components/site/Team";
import Roadmap from "@/components/site/Roadmap";
import FAQ from "@/components/site/FAQ";
import CTABanner from "@/components/site/CTABanner";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import type {
  ServiceTier,
  Project,
  NewsPost,
  TeamMember,
  LegislationItem,
  ContactInfo,
} from "@/lib/types";

// Revalida a página a cada 60s, então mudanças feitas no /admin aparecem
// no site público em até um minuto (ou instantaneamente após um novo deploy/build).
export const revalidate = 60;

const FALLBACK_CONTACT: ContactInfo = {
  id: 1,
  phone: "(69) 9.9207-4021",
  email: "douglas.depaula.sst@gmail.com",
  address: "Rua Limeira, 2655 — Bairro JK, Ji-Paraná/RO",
  hours: "Segunda a sexta, 08h às 18h",
};

export default async function HomePage() {
  const supabase = await createClient();

  const [servicesRes, projectsRes, newsRes, teamRes, legislationRes, contactRes] =
    await Promise.all([
      supabase.from("services").select("*").order("sort_order"),
      supabase.from("projects").select("*").order("sort_order"),
      supabase.from("news").select("*").order("sort_order"),
      supabase.from("team_members").select("*").order("sort_order"),
      supabase.from("legislation").select("*").order("sort_order"),
      supabase.from("contact_info").select("*").eq("id", 1).maybeSingle(),
    ]);

  const services = (servicesRes.data ?? []) as ServiceTier[];
  const projects = (projectsRes.data ?? []) as Project[];
  const news = (newsRes.data ?? []) as NewsPost[];
  const team = (teamRes.data ?? []) as TeamMember[];
  const legislation = (legislationRes.data ?? []) as LegislationItem[];
  const contact = (contactRes.data as ContactInfo) ?? FALLBACK_CONTACT;

  return (
    <>
      <Header contact={contact} />
      <Hero />
      <ImpactSection />
      <Manifesto />
      <About lead={team[0] ?? null} />
      <Diferencial />
      <AreasAtuacao />
      <Method />
      <Segmentos />
      <PorQueEscolher />
      <Services services={services} legislation={legislation} />
      <Portfolio projects={projects} />
      <News news={news} />
      <Legislation legislation={legislation} />
      <Team team={team} />
      <Roadmap />
      <FAQ />
      <CTABanner />
      <Contact contact={contact} />
      <Footer contact={contact} />
    </>
  );
}
