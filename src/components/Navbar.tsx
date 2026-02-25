import Link from "next/link";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/about", label: "Sobre mí" },
  { href: "/contact", label: "Contacto" },
  { href: "/report", label: "Reporte" },
  { href: "/manual", label: "Manual" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-zinc-950/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4" aria-label="Principal">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Portafolio Virtual
        </Link>
        <ul className="flex flex-wrap items-center gap-3 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="rounded px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
