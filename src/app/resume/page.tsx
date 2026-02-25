import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resumen profesional y acceso a CV en PDF.",
};

export default function ResumePage() {
  return (
    <section className="container-shell space-y-5 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Resume / CV</h1>
      <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
        Puedes reemplazar este enlace por tu PDF final en `public/` o apuntarlo a una URL externa.
      </p>
      <Link
        href="https://example.com/cv-placeholder.pdf"
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex rounded-lg border border-black/20 px-4 py-2 text-sm hover:bg-zinc-100 dark:border-white/20 dark:hover:bg-zinc-800"
      >
        Abrir CV (placeholder)
      </Link>
    </section>
  );
}
