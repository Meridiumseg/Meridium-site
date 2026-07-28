import type { ContactInfo } from "@/lib/types";

export default function Contact({ contact }: { contact: ContactInfo }) {
  const wppLink = "https://wa.me/55" + (contact.phone || "").replace(/\D/g, "");

  return (
    <section id="contato" className="py-20 border-b" style={{ borderColor: "var(--line)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw]">
        <div className="max-w-[620px] mb-10">
          <div className="eyebrow">Contato</div>
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
            Vamos falar sobre a segurança da sua operação.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <div className="eyebrow">WhatsApp / Telefone</div>
              <a href={wppLink} target="_blank" rel="noreferrer">
                {contact.phone}
              </a>
            </div>
            <div className="mb-6">
              <div className="eyebrow">E-mail</div>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <div className="eyebrow">Endereço</div>
              <p>{contact.address}</p>
            </div>
            <div className="mb-6">
              <div className="eyebrow">Horário de atendimento</div>
              <p>{contact.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
