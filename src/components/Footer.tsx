export function Footer() {
  return (
    <footer className="border-t border-black/10 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-zinc-600 dark:text-zinc-300">
        <p>© {new Date().getFullYear()} Portafolio Virtual.</p>
        <p>Construido con Next.js, TypeScript y TailwindCSS. Deploy objetivo: Netlify.</p>
      </div>
    </footer>
  );
}
