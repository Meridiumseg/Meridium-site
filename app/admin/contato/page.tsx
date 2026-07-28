import { createClient } from "@/lib/supabase/server";
import ContactForm from "@/components/admin/ContactForm";
import type { ContactInfo } from "@/lib/types";

export const dynamic = "force-dynamic";

const FALLBACK: ContactInfo = {
  id: 1,
  phone: "",
  email: "",
  address: "",
  hours: "",
};

export default async function AdminContactPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("contact_info").select("*").eq("id", 1).maybeSingle();
  const contact = (data as ContactInfo) ?? FALLBACK;

  return <ContactForm contact={contact} />;
}
