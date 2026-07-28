"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError("E-mail ou senha inválidos.");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-[340px] text-center">
        <Image src="/logo.png" alt="MERIDIUM" width={44} height={44} className="mx-auto mb-4" />
        <h1 className="font-display font-semibold text-[1.4rem] mb-2">Painel administrativo</h1>
        <p className="text-[0.86rem] mb-6" style={{ color: "var(--fg-dim)" }}>
          Acesse com a conta criada em Supabase &gt; Authentication &gt; Users.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[0.66rem] uppercase" style={{ color: "var(--fg-dim)" }}>
              E-mail
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-3 py-2 bg-transparent outline-none"
              style={{ borderColor: "var(--card-line)" }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[0.66rem] uppercase" style={{ color: "var(--fg-dim)" }}>
              Senha
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border px-3 py-2 bg-transparent outline-none"
              style={{ borderColor: "var(--card-line)" }}
            />
          </div>
          {error && <p className="text-[0.84rem]" style={{ color: "#c1584a" }}>{error}</p>}
          <button type="submit" disabled={loading} className="btn btn-solid justify-center">
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
