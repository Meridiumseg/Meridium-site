"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Tabelas que o painel administrativo pode editar via o CrudTable genérico.
type EditableTable =
  | "services"
  | "projects"
  | "news"
  | "team_members"
  | "legislation";

export async function upsertRow(table: EditableTable, row: Record<string, any>) {
  const supabase = await createClient();

  if (row.id) {
    const { id, ...rest } = row;
    const { error } = await supabase.from(table).update(rest).eq("id", id);
    if (error) throw new Error(error.message);
  } else {
    const { id, ...rest } = row;
    const { error } = await supabase.from(table).insert(rest);
    if (error) throw new Error(error.message);
  }

  revalidatePath("/");
  revalidatePath("/admin");
}

export async function deleteRow(table: EditableTable, id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function updateContact(fields: {
  phone: string;
  email: string;
  address: string;
  hours: string;
}) {
  const supabase = await createClient();
  const { error } = await supabase.from("contact_info").update(fields).eq("id", 1);
  if (error) throw new Error(error.message);
  revalidatePath("/");
  revalidatePath("/admin/contato");
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
