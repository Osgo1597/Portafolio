import Link from "next/link";

export function CTAContact() {
  return (
    <section className="rounded-2xl border border-black/10 bg-zinc-50 p-8 dark:border-white/10 dark:bg-zinc-900">
      <h2 className="text-2xl font-semibold tracking-tight">¿Te interesa colaborar?</h2>
      <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
        Estoy disponible para proyectos web, dashboards y productos de datos geoespaciales.
      </p>
      <Link
        href="/contact"
        className="mt-4 inline-flex rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        Ir a contacto
      </Link>
    </section>
  );
}
