import type { Metadata } from "next";
import Link from "next/link";

import { CTAContact } from "@/components/CTAContact";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Portafolio profesional con 3 proyectos destacados y enfoque case study.",
};

export default function HomePage() {
  return (
    <div className="container-shell space-y-16 py-12">
      <section className="space-y-4">
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Senior Full-Stack Portfolio</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Construyo productos web rápidos, mantenibles y orientados a resultados.
        </h1>
        <p className="max-w-2xl text-zinc-600 dark:text-zinc-300">
          Este sitio presenta proyectos con enfoque de case study: problema, solución, arquitectura, desafíos y
          resultados.
        </p>
        <div className="flex gap-3">
          <Link
            href="/projects"
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900"
          >
            Ver proyectos
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-black/20 px-4 py-2 text-sm hover:bg-zinc-100 dark:border-white/20 dark:hover:bg-zinc-800"
          >
            Contacto
          </Link>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight">Proyectos destacados</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <CTAContact />
    </div>
  );
}
