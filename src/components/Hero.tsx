export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-6 pt-20 pb-28 sm:pt-28"
    >
      <div className="aurora absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="grid-overlay absolute inset-0 -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80">
          <span className="h-2 w-2 rounded-full bg-neon-cyan" />
          Unofficial fan site · community-run
        </span>

        <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
          The countdown to{" "}
          <span className="text-gradient">Grand Theft Auto VI</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg text-white/70 sm:text-xl">
          Your community hub for tracking everything about Rockstar&apos;s next
          open world — from confirmed reveals to fan speculation. Sunsoaked
          neon, big dreams, and a whole lot of hype.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#watch"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-neon-pink to-neon-orange px-7 font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            Watch the reveal
          </a>
          <a
            href="#about"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 font-semibold text-white transition-colors hover:bg-white/10"
          >
            What we know
          </a>
        </div>

        <p className="mt-6 text-xs text-white/40">
          Not affiliated with, endorsed by, or sponsored by Rockstar Games or
          Take-Two Interactive.
        </p>
      </div>
    </section>
  );
}
