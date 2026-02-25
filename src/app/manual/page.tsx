import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";

import { projects } from "@/data/projects";
import { generateUserManualMarkdown } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Manual de Uso",
  description: "Manual autogenerado para mantenimiento y actualización del portafolio.",
};

export default function ManualPage() {
  const markdown = generateUserManualMarkdown(projects);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose prose-zinc dark:prose-invert">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </main>
  );
}
