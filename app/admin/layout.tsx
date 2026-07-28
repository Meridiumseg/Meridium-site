import Image from "next/image";
import Link from "next/link";
import AdminNav from "@/components/admin/AdminNav";
import { signOutAction } from "@/lib/actions";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-2)" }}>
      <div
        className="flex items-center justify-between px-[5vw] py-4 border-b sticky top-0 z-20"
        style={{ borderColor: "var(--line)", background: "var(--bg)" }}
      >
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={26} height={26} />
          <span className="font-display font-semibold text-[1rem]">MERIDIUM · Admin</span>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/" className="btn">← Ver site</Link>
          <form action={signOutAction}>
            <button type="submit" className="btn">Sair</button>
          </form>
        </div>
      </div>
      <AdminNav />
      <div className="px-[5vw] py-8 max-w-[900px] mx-auto">{children}</div>
    </div>
  );
}
