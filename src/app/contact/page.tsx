import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Formulario de contacto y enlaces profesionales.",
};

export default function ContactPage() {
  return (
    <section className="container-shell space-y-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Contacto</h1>
      <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
        Si quieres colaborar, completa el formulario. Los envíos se gestionan con Netlify Forms.
      </p>

      <ContactForm />

      <div className="flex gap-4 text-sm">
        <Link href="https://example.com/github-placeholder" target="_blank" rel="noreferrer noopener">
          GitHub (placeholder)
        </Link>
        <Link href="https://example.com/linkedin-placeholder" target="_blank" rel="noreferrer noopener">
          LinkedIn (placeholder)
        </Link>
      </div>
    </section>
  );
}
