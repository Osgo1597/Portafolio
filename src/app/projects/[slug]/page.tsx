import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { CaseStudySection } from "@/components/CaseStudySection";
import { Gallery } from "@/components/Gallery";
import { TechStackBadges } from "@/components/TechStackBadges";
import { projects } from "@/data/projects";
import { getProjectBySlug } from "@/lib/projects";

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

function BulletList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
      description: "El proyecto solicitado no existe.",
    };
  }

  return {
    title: project.title,
    description: project.oneLiner,
    openGraph: {
      title: `${project.title} (${project.year})`,
      description: project.oneLiner,
      images: [
        {
          url: `/projects/${project.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `OpenGraph de ${project.title}`,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const links = [
    { label: "Demo", href: project.links.demo },
    { label: "Repositorio", href: project.links.repo },
    { label: "Video", href: project.links.video },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <article className="container-shell space-y-8 py-10">
      <header className="space-y-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">Case Study</p>
        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="max-w-3xl text-zinc-600 dark:text-zinc-300">{project.oneLiner}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-800">{project.status}</span>
          <span className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-800">{project.year}</span>
          <span className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-800">{project.architectureType}</span>
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-lg border border-black/20 px-3 py-2 text-sm hover:bg-zinc-100 dark:border-white/20 dark:hover:bg-zinc-800"
              target="_blank"
              rel="noreferrer noopener"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </header>

      <Image
        src={project.media.cover}
        alt={`Portada de ${project.title}`}
        width={1600}
        height={900}
        className="h-auto w-full rounded-2xl border border-black/10 dark:border-white/10"
        priority
        sizes="100vw"
      />

      <TechStackBadges project={project} />
      <ArchitectureDiagram architectureType={project.architectureType} dataLayerType={project.dataLayer.type} />

      <section className="rounded-xl border border-black/10 bg-zinc-50 p-5 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-2xl font-semibold tracking-tight">Stack y arquitectura</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
          <li>Frontend: {project.hosting.frontend}</li>
          {project.hosting.backend ? <li>Backend/API: {project.hosting.backend}</li> : null}
          <li>
            Datos: {project.hosting.backend ? project.dataLayer.type : "GeoJSON"}{" "}
            {project.dataLayer.notes ? `- ${project.dataLayer.notes}` : ""}
          </li>
        </ul>
      </section>

      <CaseStudySection title="Problema" markdown={project.sections.problem} />
      <CaseStudySection title="Solución" markdown={project.sections.solution} />
      <BulletList title="Features" items={project.sections.features} />
      <BulletList title="Notas de arquitectura" items={project.sections.architectureNotes} />
      <BulletList title="Desafíos" items={project.sections.challenges} />
      <BulletList title="Resultados" items={project.sections.results} />
      <BulletList title="Próximos pasos" items={project.sections.nextSteps} />
      <Gallery images={project.media.gallery} title={project.title} />
    </article>
  );
}
