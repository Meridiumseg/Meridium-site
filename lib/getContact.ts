import { createClient } from "@/lib/supabase/server";
import type { ContactInfo } from "@/lib/types";

const FALLBACK_CONTACT: ContactInfo = {
  id: 1,
  phone: "(69) 9.9207-4021",
  email: "douglas.depaula.sst@gmail.com",
  address: "Rua Limeira, 2655 — Bairro JK, Ji-Paraná/RO",
  hours: "Segunda a sexta, 08h às 18h",
};

export async function getContact(): Promise<ContactInfo> {
  const supabase = await createClient();
  const { data } = await supabase.from("contact_info").select("*").eq("id", 1).maybeSingle();
  return (data as ContactInfo) ?? FALLBACK_CONTACT;
}
