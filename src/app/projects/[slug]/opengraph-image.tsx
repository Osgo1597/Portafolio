import { ImageResponse } from "next/og";

import { getProjectBySlug } from "@/lib/projects";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

interface ProjectOgImageProps {
  params: Promise<{ slug: string }>;
}

export default async function OpengraphImage({ params }: ProjectOgImageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#09090b",
            color: "#fafafa",
            fontSize: 44,
            fontWeight: 700,
          }}
        >
          Proyecto no encontrado
        </div>
      ),
      size,
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #111827, #1f2937)",
          color: "#f9fafb",
          padding: "48px",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ fontSize: 24, opacity: 0.85 }}>Case Study • {project.year}</div>
        <div style={{ fontSize: 58, lineHeight: 1.08, fontWeight: 800, maxWidth: "95%" }}>{project.title}</div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: "999px",
                fontSize: 22,
                padding: "8px 14px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
