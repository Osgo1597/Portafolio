import type { Metadata } from "next";

import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { projects } from "@/data/projects";
import { getAllTags } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Listado de proyectos con buscador y filtros por arquitectura y tags.",
};

const allTags = getAllTags();

export default function ProjectsPage() {
  return (
    <div className="container-shell space-y-8 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Proyectos</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Explora los proyectos por arquitectura, tags y búsqueda textual.
        </p>
      </header>

      <ProjectsExplorer projects={projects} allTags={allTags} />
    </div>
  );
}
