export function Watch() {
  return (
    <section id="watch" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Watch the reveal
        </h2>
        <p className="mt-4 text-white/60">
          The official announcement trailer is hosted on Rockstar&apos;s own
          channels. We link out rather than rehost so you always get the source.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl">
        <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10">
          <div className="aurora absolute inset-0" aria-hidden="true" />
          <div className="absolute inset-0 grid place-items-center">
            <a
              href="https://www.rockstargames.com/VI"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4"
            >
              <span className="grid h-20 w-20 place-items-center rounded-full bg-white/90 text-black shadow-2xl transition-transform group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-1 h-8 w-8"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="text-sm font-semibold tracking-wide text-white">
                Visit the official GTA VI page
              </span>
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-white/40">
          Link opens rockstargames.com in a new tab.
        </p>
      </div>
    </section>
  );
}
