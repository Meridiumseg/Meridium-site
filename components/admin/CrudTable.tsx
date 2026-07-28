"use client";

import { useState, useTransition } from "react";
import { upsertRow, deleteRow } from "@/lib/actions";

type FieldType = "text" | "textarea" | "checkbox";

export type FieldConfig = {
  key: string;
  label: string;
  type?: FieldType;
};

type Props<T extends { id: string }> = {
  table: "services" | "projects" | "news" | "team_members" | "legislation";
  title: string;
  addLabel?: string;
  items: T[];
  fields: FieldConfig[];
  renderPreview: (item: T) => React.ReactNode;
  emptyRow: Record<string, any>;
};

export default function CrudTable<T extends { id: string }>({
  table,
  title,
  addLabel,
  items,
  fields,
  renderPreview,
  emptyRow,
}: Props<T>) {
  const [editing, setEditing] = useState<string | "new" | null>(null);
  const [draft, setDraft] = useState<Record<string, any>>({});
  const [isPending, startTransition] = useTransition();

  function startNew() {
    setDraft({ ...emptyRow });
    setEditing("new");
  }
  function startEdit(item: T) {
    setDraft({ ...item });
    setEditing(item.id);
  }
  function cancel() {
    setEditing(null);
  }
  function save() {
    startTransition(async () => {
      await upsertRow(table, editing === "new" ? draft : { ...draft, id: editing });
      setEditing(null);
    });
  }
  function remove(id: string) {
    if (!confirm("Remover este item?")) return;
    startTransition(async () => {
      await deleteRow(table, id);
    });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-display font-semibold text-[1.2rem]">{title}</h3>
        <button className="btn btn-solid" style={{ padding: ".45rem .9rem", fontSize: ".78rem" }} onClick={startNew}>
          {addLabel ?? "+ Novo"}
        </button>
      </div>

      {items.length === 0 && (
        <p className="text-[0.86rem]" style={{ color: "var(--fg-dim)" }}>
          Nenhum item cadastrado ainda.
        </p>
      )}

      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between gap-4 border p-4 mb-2"
          style={{ borderColor: "var(--card-line)" }}
        >
          <div className="text-[0.86rem]">{renderPreview(item)}</div>
          <div className="flex gap-2 flex-shrink-0">
            <button className="btn" style={{ padding: ".4rem .8rem", fontSize: ".74rem" }} onClick={() => startEdit(item)}>
              Editar
            </button>
            <button
              className="btn"
              style={{ padding: ".4rem .8rem", fontSize: ".74rem" }}
              onClick={() => remove(item.id)}
              disabled={isPending}
            >
              Remover
            </button>
          </div>
        </div>
      ))}

      {editing !== null && (
        <div className="card p-6 mt-4 flex flex-col gap-4">
          {fields.map((f) => (
            <div className="flex flex-col gap-1" key={f.key}>
              <label className="font-mono text-[0.66rem] uppercase" style={{ color: "var(--fg-dim)" }}>
                {f.label}
              </label>
              {f.type === "textarea" ? (
                <textarea
                  rows={3}
                  value={draft[f.key] ?? ""}
                  onChange={(e) => setDraft({ ...draft, [f.key]: e.target.value })}
                  className="border px-3 py-2 bg-transparent outline-none"
                  style={{ borderColor: "var(--card-line)" }}
                />
              ) : f.type === "checkbox" ? (
                <input
                  type="checkbox"
                  checked={!!draft[f.key]}
                  onChange={(e) => setDraft({ ...draft, [f.key]: e.target.checked })}
                  className="w-5 h-5"
                />
              ) : (
                <input
                  type="text"
                  value={draft[f.key] ?? ""}
                  onChange={(e) => setDraft({ ...draft, [f.key]: e.target.value })}
                  className="border px-3 py-2 bg-transparent outline-none"
                  style={{ borderColor: "var(--card-line)" }}
                />
              )}
            </div>
          ))}
          <div className="flex gap-2">
            <button className="btn btn-solid" onClick={save} disabled={isPending}>
              {isPending ? "Salvando..." : "Salvar"}
            </button>
            <button className="btn" onClick={cancel}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
