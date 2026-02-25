import ReactMarkdown from "react-markdown";

interface CaseStudySectionProps {
  title: string;
  markdown: string;
}

export function CaseStudySection({ title, markdown }: CaseStudySectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </section>
  );
}
