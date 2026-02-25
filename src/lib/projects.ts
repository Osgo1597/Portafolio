import { projects } from "@/data/projects";

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAllTags() {
  return Array.from(new Set(projects.flatMap((project) => project.tags))).sort((a, b) =>
    a.localeCompare(b),
  );
}
