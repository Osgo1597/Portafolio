# Portafolio Virtual (Next.js + TypeScript + TailwindCSS)

Sitio profesional tipo case study para mostrar proyectos con arquitectura, resultados y próximos pasos.

## Stack
- Next.js (App Router) + TypeScript
- TailwindCSS
- React-Markdown
- Deploy objetivo: Netlify

## Setup local
1. `npm i`
2. `npm run dev`
3. Abrir `http://localhost:3000`

## Build de verificación
```bash
npm run build
```

## Estructura principal
```txt
src/
  app/
  components/
  data/
  lib/
  styles/
public/
  images/
  og/
```

## Cómo agregar un nuevo proyecto
Edita `src/data/projects.ts`:
1. Agrega un nuevo objeto al array `projects`.
2. Usa un `slug` único.
3. Completa `sections.problem` y `sections.solution` con markdown.
4. Si no hay backend, omite `hosting.backend` y usa `dataLayer.type: "GeoJSON"` cuando aplique.
5. Agrega portada y galería en `public/images`.

## Reportes automáticos incluidos
- Página técnica: `/report`
- Manual de uso: `/manual`
- Texto plano técnico: `/report.txt`
- Texto plano manual: `/manual.txt`

## Deploy en Netlify
Se incluye `netlify.toml` con plugin oficial para Next.js:
- Build command: `npm run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs`

### Variables de entorno
Configura en el panel de Netlify las variables necesarias para integraciones externas (si aplica).

## Netlify Forms
La ruta `/contact` incluye formulario estático con:
- `data-netlify="true"`
- `netlify-honeypot="bot-field"`
- `<input type="hidden" name="form-name" value="contact" />`

Al desplegar, Netlify detectará el formulario automáticamente.
