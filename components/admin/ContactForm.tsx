"use client";

import { useState, useTransition } from "react";
import { updateContact } from "@/lib/actions";
import type { ContactInfo } from "@/lib/types";

export default function ContactForm({ contact }: { contact: ContactInfo }) {
  const [draft, setDraft] = useState(contact);
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);

  function save() {
    startTransition(async () => {
      await updateContact({
        phone: draft.phone,
        email: draft.email,
        address: draft.address,
        hours: draft.hours,
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    });
  }

  const fields: { key: keyof ContactInfo; label: string }[] = [
    { key: "phone", label: "Telefone / WhatsApp" },
    { key: "email", label: "E-mail" },
    { key: "address", label: "Endereço" },
    { key: "hours", label: "Horário de atendimento" },
  ];

  return (
    <div>
      <h3 className="font-display font-semibold text-[1.2rem] mb-5">Informações de contato</h3>
      <div className="card p-6 flex flex-col gap-4">
        {fields.map((f) => (
          <div className="flex flex-col gap-1" key={f.key}>
            <label className="font-mono text-[0.66rem] uppercase" style={{ color: "var(--fg-dim)" }}>
              {f.label}
            </label>
            <input
              type="text"
              value={draft[f.key] as string}
              onChange={(e) => setDraft({ ...draft, [f.key]: e.target.value })}
              className="border px-3 py-2 bg-transparent outline-none"
              style={{ borderColor: "var(--card-line)" }}
            />
          </div>
        ))}
        <div className="flex items-center gap-3">
          <button className="btn btn-solid" onClick={save} disabled={isPending}>
            {isPending ? "Salvando..." : "Salvar"}
          </button>
          {saved && <span className="text-[0.82rem]" style={{ color: "var(--accent)" }}>Salvo ✓</span>}
        </div>
      </div>
    </div>
  );
}
