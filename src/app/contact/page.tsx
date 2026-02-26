import type { Metadata } from "next";
import Link from "next/link";

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

      <form
        name="contact"
        action="/contact/success"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="space-y-4 rounded-xl border border-black/10 p-5 dark:border-white/10"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="subject" value="Nuevo contacto desde Portafolio Virtual" />
        <p className="hidden">
          <label htmlFor="bot-field">
            No llenar este campo si eres humano:
            <input id="bot-field" name="bot-field" />
          </label>
        </p>
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-black/15 px-3 py-2 text-sm dark:border-white/20"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-black/15 px-3 py-2 text-sm dark:border-white/20"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="message" className="text-sm font-medium">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-lg border border-black/15 px-3 py-2 text-sm dark:border-white/20"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900"
        >
          Enviar mensaje
        </button>
      </form>

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
