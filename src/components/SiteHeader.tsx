const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#watch", label: "Watch" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 transform-gpu border-b border-white/10 bg-background/70 backdrop-blur-md [will-change:transform]">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-neon-pink to-neon-orange font-mono text-lg font-black text-black">
            VI
          </span>
          <span className="text-sm font-semibold tracking-widest text-white/80 group-hover:text-white">
            GTA 6 HUB
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#watch"
          className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition-colors hover:bg-white/20"
        >
          Watch trailer
        </a>
      </nav>
    </header>
  );
}
