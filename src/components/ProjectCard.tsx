"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ProjectPreviewModal } from "@/components/ProjectPreviewModal";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const demoUrl = project.demoUrl ?? project.links.demo;
  const canOpenPreview = Boolean(demoUrl);

  return (
    <>
      <article className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-zinc-900">
        <Image
          src={project.media.cover}
          alt={`Portada de ${project.title}`}
          width={1200}
          height={630}
          className="h-48 w-full object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
        <div className="space-y-3 p-5">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">{project.oneLiner}</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-800">{project.status}</span>
            <span className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-800">{project.year}</span>
            <span className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
              {project.architectureType}
            </span>
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Ver case study
            </Link>
            {canOpenPreview ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(true)}
                  className="inline-flex rounded-lg border border-black/20 px-4 py-2 text-sm hover:bg-zinc-100 dark:border-white/20 dark:hover:bg-zinc-800"
                >
                  Ver demo
                </button>
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex rounded-lg border border-black/20 px-4 py-2 text-sm hover:bg-zinc-100 dark:border-white/20 dark:hover:bg-zinc-800"
                >
                  Open project
                </a>
              </>
            ) : (
              <span className="inline-flex rounded-lg border border-dashed border-black/20 px-4 py-2 text-sm text-zinc-500 dark:border-white/20 dark:text-zinc-400">
                Próximamente
              </span>
            )}
          </div>
        </div>
      </article>
      <ProjectPreviewModal
        project={project}
        demoUrl={demoUrl}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
}
