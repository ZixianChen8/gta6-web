export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon-pink to-neon-orange font-mono text-sm font-black text-black">
            VI
          </span>
          <span className="text-sm font-semibold tracking-widest text-white/70">
            GTA 6 HUB
          </span>
        </div>

        <p className="max-w-xl text-xs leading-relaxed text-white/40">
          Grand Theft Auto and Rockstar Games are trademarks of Take-Two
          Interactive. This is an unofficial fan project and is not affiliated
          with or endorsed by them. All trademarks belong to their respective
          owners.
        </p>
      </div>
    </footer>
  );
}
