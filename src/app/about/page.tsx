import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Perfil profesional, enfoque de trabajo y especialidades técnicas.",
};

export default function AboutPage() {
  return (
    <section className="container-shell space-y-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Sobre mí</h1>
      <p className="max-w-3xl text-zinc-700 dark:text-zinc-200">
        Soy geomático y desarrollador web orientado a datos. Construyo soluciones WebGIS y productos full-stack para
        consulta, análisis y visualización territorial: desde capas GeoJSON y mapas interactivos hasta APIs y bases
        de datos conectadas. Me interesa convertir información geoespacial en herramientas claras para operación y
        toma de decisiones.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <article className="rounded-xl border border-black/10 p-5 dark:border-white/10">
          <h2 className="text-lg font-semibold">Fortalezas</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
            <li>Desarrollo WebGIS / SIG aplicado (consulta, visualización y análisis territorial).</li>
            <li>Integración Front + API + BD (Netlify + Render + Supabase/Postgres).</li>
            <li>Estructuración de datos, documentación y despliegues reproducibles (MVP a producción).</li>
          </ul>
        </article>
        <article className="rounded-xl border border-black/10 p-5 dark:border-white/10">
          <h2 className="text-lg font-semibold">Tecnologías frecuentes</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
            <li>QGIS, GeoJSON, PostGIS/PostgreSQL (isócronas y análisis de accesibilidad cuando aplica).</li>
            <li>Next.js/React, TypeScript, TailwindCSS.</li>
            <li>Node.js APIs, Render/Netlify, Supabase.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
