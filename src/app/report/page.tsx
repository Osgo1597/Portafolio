import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";

import { projects } from "@/data/projects";
import { generateTechnicalReportMarkdown } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Reporte Técnico",
  description: "Reporte técnico autogenerado a partir del catálogo de proyectos.",
};

export default function ReportPage() {
  const markdown = generateTechnicalReportMarkdown(projects);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose prose-zinc dark:prose-invert">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </main>
  );
}
