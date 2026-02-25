export type ArchitectureType = "fullstack" | "static-webgis";
export type Status = "MVP" | "En producción" | "Beta";

interface Project {
  title: string;
  slug: string;
  oneLiner: string;
  year: string;
  status: Status;
  architectureType: ArchitectureType;
  tags: string[];
  hosting: { frontend: "Netlify"; backend?: "Render" };
  dataLayer: { type: "Supabase" | "GeoJSON" | "Postgres" | "Otro"; notes?: string };
  links: { demo?: string; repo?: string; video?: string };
  media: { cover: string; gallery: string[] };
  sections: {
    problem: string;
    solution: string;
    features: string[];
    architectureNotes: string[];
    challenges: string[];
    results: string[];
    nextSteps: string[];
  };
}

export type { Project };

export const projects: Project[] = [
  {
    title: "Portal de Proveedores (MVP)",
    slug: "portal-proveedores-mvp",
    oneLiner:
      "Plataforma para centralizar alta, validación y seguimiento de proveedores con flujo inicial de aprobación.",
    year: "2025",
    status: "MVP",
    architectureType: "fullstack",
    tags: ["B2B", "Compras", "Flujos", "MVP"],
    hosting: { frontend: "Netlify", backend: "Render" },
    dataLayer: { type: "Postgres", notes: "Esquema transaccional para proveedores y evaluaciones." },
    links: {
      demo: "https://example.com/portal-proveedores-mvp",
      repo: "https://example.com/portal-proveedores-repo",
    },
    media: {
      cover: "/images/portal-proveedores-cover.svg",
      gallery: ["/images/project-shot-1.svg", "/images/project-shot-2.svg"],
    },
    sections: {
      problem: `## Contexto
El área de compras gestionaba proveedores por hojas de cálculo y correos sueltos.

## Impacto
- Retrabajo en validaciones documentales
- Tiempos largos para alta de proveedor
- Baja trazabilidad para auditoría`,
      solution: `Se implementó un **MVP fullstack** con módulos de registro, validación y tablero de estatus.

El frontend se despliega en Netlify y consume una API en Render con persistencia en Postgres.`,
      features: [
        "Alta de proveedores con checklist documental.",
        "Bandeja de revisión para compras y compliance.",
        "Semáforo de estatus por proveedor y etapa.",
      ],
      architectureNotes: [
        "Frontend SSG/ISR-friendly con enfoque en rendimiento.",
        "Backend REST en Render para reglas de negocio.",
        "Data model orientado a eventos de validación.",
      ],
      challenges: [
        "Normalizar documentos con formatos heterogéneos.",
        "Reducir fricción en el onboarding inicial.",
      ],
      results: [
        "Reducción del tiempo de alta en etapas piloto.",
        "Mayor visibilidad del pipeline de aprobación.",
      ],
      nextSteps: [
        "Agregar firma electrónica y bitácora avanzada.",
        "Integrar notificaciones por SLA y vencimientos.",
      ],
    },
  },
  {
    title: "App del Gimnasio",
    slug: "app-gimnasio",
    oneLiner:
      "Aplicación para gestión de rutinas, progreso y control de membresías con panel administrativo.",
    year: "2026",
    status: "Beta",
    architectureType: "fullstack",
    tags: ["Fitness", "Dashboard", "Supabase", "Membresías"],
    hosting: { frontend: "Netlify", backend: "Render" },
    dataLayer: { type: "Supabase", notes: "Auth + Postgres gestionado y políticas RLS." },
    links: {
      demo: "https://example.com/app-gimnasio-demo",
      repo: "https://example.com/app-gimnasio-repo",
    },
    media: {
      cover: "/images/app-gimnasio-cover.svg",
      gallery: ["/images/project-shot-1.svg", "/images/project-shot-2.svg"],
    },
    sections: {
      problem: `Los entrenadores y usuarios trabajaban con múltiples apps desconectadas.

No existía un flujo único para:
- Prescripción de rutinas
- Seguimiento de progreso
- Estado de pagos`,
      solution: `Se desarrolló una app con dos perfiles principales: **usuario** y **coach**.

Incluye autenticación, gestión de planes y analítica simple de progreso semanal.`,
      features: [
        "Rutinas por bloques con historial de cargas.",
        "Panel de coach para seguimiento por alumno.",
        "Control de membresías con alertas de expiración.",
      ],
      architectureNotes: [
        "Netlify para frontend y entrega estática rápida.",
        "API en Render para procesos de negocio.",
        "Supabase como data layer y autenticación.",
      ],
      challenges: [
        "Diseñar UX útil tanto para móvil como desktop.",
        "Alinear reglas de negocio de membresías.",
      ],
      results: [
        "Mejor adherencia al plan semanal de entrenamiento.",
        "Menor carga operativa en seguimiento manual.",
      ],
      nextSteps: [
        "Agregar recomendaciones por historial de rendimiento.",
        "Incorporar pagos y facturación en línea.",
      ],
    },
  },
  {
    title: "Geoportal Xochimilco",
    slug: "geoportal-xochimilco",
    oneLiner:
      "Visualizador web GIS estático para explorar capas territoriales en GeoJSON con enfoque ciudadano.",
    year: "2026",
    status: "En producción",
    architectureType: "static-webgis",
    tags: ["GIS", "GeoJSON", "Cartografía", "Open Data"],
    hosting: { frontend: "Netlify" },
    dataLayer: { type: "GeoJSON", notes: "Capas versionadas en repositorio y servidas estáticamente." },
    links: {
      demo: "https://example.com/geoportal-xochimilco-demo",
      repo: "https://example.com/geoportal-xochimilco-repo",
    },
    media: {
      cover: "/images/geoportal-xochimilco-cover.svg",
      gallery: ["/images/project-shot-1.svg", "/images/project-shot-2.svg"],
    },
    sections: {
      problem: `La información geoespacial estaba dispersa y con acceso limitado para usuarios no técnicos.

Se necesitaba una interfaz simple para consultar capas de interés público.`,
      solution: `Se construyó un **static-webgis** desplegado en Netlify, consumiendo archivos GeoJSON estáticos.

El enfoque prioriza simplicidad de mantenimiento y costos bajos de operación.`,
      features: [
        "Catálogo de capas con control de visibilidad.",
        "Visualización responsiva y navegación básica.",
        "Carga ligera apta para conexiones inestables.",
      ],
      architectureNotes: [
        "Sin backend: menor superficie de mantenimiento.",
        "Datos versionados por Git para trazabilidad.",
        "Entrega de activos estáticos vía CDN.",
      ],
      challenges: [
        "Estandarizar proyecciones y atributos de capas.",
        "Optimizar tamaño de GeoJSON para carga inicial.",
      ],
      results: [
        "Acceso público más rápido a información territorial.",
        "Menor costo operativo frente a arquitectura con servidor.",
      ],
      nextSteps: [
        "Agregar más capas temáticas y búsquedas geográficas.",
        "Evaluar vector tiles para datasets mayores.",
      ],
    },
  },
];
