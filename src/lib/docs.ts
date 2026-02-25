import type { Project } from "@/data/projects";

function toMarkdownTable(projects: Project[]): string {
  const header =
    "| title | architectureType | status | year | hosting.frontend | hosting.backend | dataLayer.type | links.demo | links.repo |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |";

  const rows = projects.map((project) => {
    const demo = project.links.demo ?? "N/A";
    const repo = project.links.repo ?? "N/A";
    const backend = project.hosting.backend ?? "N/A";
    return `| ${project.title} | ${project.architectureType} | ${project.status} | ${project.year} | ${project.hosting.frontend} | ${backend} | ${project.dataLayer.type} | ${demo} | ${repo} |`;
  });

  return [header, ...rows].join("\n");
}

function getUniqueTags(projects: Project[]): string[] {
  return Array.from(new Set(projects.flatMap((project) => project.tags))).sort((a, b) =>
    a.localeCompare(b),
  );
}

export function generateTechnicalReportMarkdown(projects: Project[]): string {
  const generatedAtIso = new Date().toISOString();
  const tags = getUniqueTags(projects);

  return `# Reporte Técnico

Fecha de generación (ISO): \`${generatedAtIso}\`

## Resumen por proyecto
${toMarkdownTable(projects)}

## Tags detectados (unique, ordenados)
${tags.map((tag) => `- ${tag}`).join("\n")}

## Checklist de validación
- [ ] Home muestra 3 tarjetas y CTA
- [ ] /projects filtra por architectureType, tags y buscador
- [ ] /projects/[slug] maneja backend opcional sin errores
- [ ] Formulario de contacto compatible con Netlify Forms
- [ ] SEO con metadata, sitemap, robots y OpenGraph
- [ ] Build de Next.js sin errores de TypeScript
- [ ] Rutas /report, /manual, /report.txt y /manual.txt activas
`;
}

export function generateUserManualMarkdown(projects: Project[]): string {
  const slugs = projects.map((project) => `- ${project.slug}`).join("\n");

  return `# Manual de Uso

## Correr en local
1. \`npm i\`
2. \`npm run dev\`

## Dónde editar proyectos
- Edita \`src/data/projects.ts\`

## Slugs actuales
${slugs}

## Cómo agregar un proyecto nuevo
1. Agrega un objeto al array \`projects\` en \`src/data/projects.ts\`.
2. Define \`title\`, \`slug\`, \`oneLiner\`, \`year\`, \`status\`, \`architectureType\`, \`tags\`, \`media\` y \`sections\`.
3. Configura \`hosting.frontend\` como \`Netlify\`.
4. Si el proyecto tiene API, agrega \`hosting.backend: "Render"\`; si no tiene backend, omítelo.
5. Define \`dataLayer.type\` según corresponda (por ejemplo \`Supabase\`, \`GeoJSON\`, \`Postgres\`).

## Dónde poner imágenes
- Guarda covers y galería en \`public/images\`.

## Deploy en Netlify
- Build command: \`npm run build\`
- Publicación con plugin oficial de Netlify para Next.js.
- Variables de entorno: define en panel de Netlify según integración (por ejemplo claves de APIs).

## Netlify Forms
- El formulario de contacto usa \`data-netlify="true"\` y honeypot.
- Asegura que el sitio esté desplegado para que Netlify capture los envíos.
`;
}
