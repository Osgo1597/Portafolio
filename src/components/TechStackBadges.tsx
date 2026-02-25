import type { Project } from "@/data/projects";

interface TechStackBadgesProps {
  project: Project;
}

export function TechStackBadges({ project }: TechStackBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2 text-xs">
      <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
        Front: {project.hosting.frontend}
      </span>
      {project.hosting.backend ? (
        <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
          Back: {project.hosting.backend}
        </span>
      ) : (
        <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">Sin backend</span>
      )}
      <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
        Datos: {project.dataLayer.type}
      </span>
    </div>
  );
}
