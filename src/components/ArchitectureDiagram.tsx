import type { ArchitectureType } from "@/data/projects";

interface ArchitectureDiagramProps {
  architectureType: ArchitectureType;
  dataLayerType: string;
}

function Node({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width="145" height="54" rx="12" className="fill-zinc-100 dark:fill-zinc-800" />
      <text x={x + 72} y={y + 33} textAnchor="middle" className="fill-zinc-900 text-[11px] dark:fill-zinc-100">
        {label}
      </text>
    </g>
  );
}

export function ArchitectureDiagram({ architectureType, dataLayerType }: ArchitectureDiagramProps) {
  const isFullstack = architectureType === "fullstack";

  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold tracking-tight">Diagrama de arquitectura</h2>
      <div className="overflow-x-auto rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
        <svg viewBox="0 0 820 230" role="img" aria-label={`Diagrama ${architectureType}`} className="min-w-[700px]">
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" className="fill-zinc-500 dark:fill-zinc-400" />
            </marker>
          </defs>

          <Node x={24} y={70} label="Usuario" />
          <Node x={214} y={70} label="Netlify (Frontend)" />
          {isFullstack ? <Node x={404} y={70} label="Render (Backend)" /> : null}
          <Node x={isFullstack ? 594 : 404} y={70} label={isFullstack ? dataLayerType : "GeoJSON"} />
          <Node x={324} y={160} label="GitHub (CI/CD)" />

          <line
            x1="169"
            y1="97"
            x2="214"
            y2="97"
            className="stroke-zinc-500 dark:stroke-zinc-400"
            markerEnd="url(#arrow)"
          />
          {isFullstack ? (
            <line
              x1="359"
              y1="97"
              x2="404"
              y2="97"
              className="stroke-zinc-500 dark:stroke-zinc-400"
              markerEnd="url(#arrow)"
            />
          ) : null}
          <line
            x1={isFullstack ? "549" : "359"}
            y1="97"
            x2={isFullstack ? "594" : "404"}
            y2="97"
            className="stroke-zinc-500 dark:stroke-zinc-400"
            markerEnd="url(#arrow)"
          />
          <line
            x1="396"
            y1="160"
            x2="286"
            y2="124"
            className="stroke-zinc-500 dark:stroke-zinc-400"
            markerEnd="url(#arrow)"
          />
          <line
            x1="468"
            y1="160"
            x2="476"
            y2="124"
            className="stroke-zinc-500 dark:stroke-zinc-400"
            markerEnd="url(#arrow)"
          />
        </svg>
      </div>
    </section>
  );
}
