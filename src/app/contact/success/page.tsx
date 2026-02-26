import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mensaje enviado",
  description: "Confirmación de envío del formulario de contacto.",
};

export default function ContactSuccessPage() {
  return (
    <section className="container-shell space-y-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Mensaje enviado</h1>
      <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
        Gracias por tu mensaje. Lo revisaré y te responderé por correo lo antes posible.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
