"use client";

import type { ArchitectureType } from "@/data/projects";

interface ProjectFiltersProps {
  query: string;
  selectedArchitecture: ArchitectureType | "all";
  selectedTags: string[];
  allTags: string[];
  onQueryChange: (value: string) => void;
  onArchitectureChange: (value: ArchitectureType | "all") => void;
  onTagToggle: (tag: string) => void;
  onClear: () => void;
}

export function ProjectFilters({
  query,
  selectedArchitecture,
  selectedTags,
  allTags,
  onQueryChange,
  onArchitectureChange,
  onTagToggle,
  onClear,
}: ProjectFiltersProps) {
  return (
    <section className="space-y-5 rounded-xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-zinc-900">
      <div className="space-y-2">
        <label htmlFor="project-search" className="block text-sm font-medium">
          Buscar por título o descripción
        </label>
        <input
          id="project-search"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Ej. dashboard, GIS, proveedores..."
          className="w-full rounded-lg border border-black/15 px-3 py-2 text-sm outline-none ring-zinc-500 focus:ring-2 dark:border-white/20 dark:bg-zinc-950"
        />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Arquitectura</p>
        <div className="flex flex-wrap gap-2">
          {(["all", "fullstack", "static-webgis"] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => onArchitectureChange(value)}
              className={`rounded-full px-3 py-1 text-xs ${
                selectedArchitecture === value
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-zinc-100 dark:bg-zinc-800"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Tags</p>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const active = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                onClick={() => onTagToggle(tag)}
                className={`rounded-full px-3 py-1 text-xs ${
                  active ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 dark:bg-zinc-800"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={onClear}
        className="rounded-lg border border-black/15 px-3 py-2 text-xs hover:bg-zinc-100 dark:border-white/20 dark:hover:bg-zinc-800"
      >
        Limpiar filtros
      </button>
    </section>
  );
}
