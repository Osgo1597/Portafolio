"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilters } from "@/components/ProjectFilters";
import type { ArchitectureType, Project } from "@/data/projects";

interface ProjectsExplorerProps {
  projects: Project[];
  allTags: string[];
}

export function ProjectsExplorer({ projects, allTags }: ProjectsExplorerProps) {
  const [query, setQuery] = useState("");
  const [selectedArchitecture, setSelectedArchitecture] = useState<ArchitectureType | "all">("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesArchitecture =
        selectedArchitecture === "all" ? true : project.architectureType === selectedArchitecture;
      const matchesTags =
        selectedTags.length === 0 ? true : selectedTags.every((tag) => project.tags.includes(tag));
      const matchesQuery =
        normalizedQuery.length === 0
          ? true
          : `${project.title} ${project.oneLiner}`.toLowerCase().includes(normalizedQuery);

      return matchesArchitecture && matchesTags && matchesQuery;
    });
  }, [projects, query, selectedArchitecture, selectedTags]);

  function toggleTag(tag: string) {
    setSelectedTags((current) => (current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag]));
  }

  return (
    <>
      <ProjectFilters
        query={query}
        selectedArchitecture={selectedArchitecture}
        selectedTags={selectedTags}
        allTags={allTags}
        onQueryChange={setQuery}
        onArchitectureChange={setSelectedArchitecture}
        onTagToggle={toggleTag}
        onClear={() => {
          setQuery("");
          setSelectedArchitecture("all");
          setSelectedTags([]);
        }}
      />

      {filteredProjects.length > 0 ? (
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      ) : (
        <p className="rounded-lg border border-dashed border-black/20 p-6 text-sm dark:border-white/20">
          No hay resultados con los filtros actuales.
        </p>
      )}
    </>
  );
}
