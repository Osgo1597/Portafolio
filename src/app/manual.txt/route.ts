import { projects } from "@/data/projects";
import { generateUserManualMarkdown } from "@/lib/docs";

export const runtime = "nodejs";

export async function GET() {
  const content = generateUserManualMarkdown(projects);

  return new Response(content, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
