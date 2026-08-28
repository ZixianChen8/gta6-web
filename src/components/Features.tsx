const FEATURES = [
  {
    title: "News tracker",
    body: "A running feed of official announcements and reputable reporting, with sources attached so you can verify every claim.",
    accent: "from-neon-pink to-neon-purple",
  },
  {
    title: "Media gallery",
    body: "Screenshots, trailer breakdowns, and community artwork — organized so you can relive every frame of the reveal.",
    accent: "from-neon-orange to-neon-pink",
  },
  {
    title: "Speculation board",
    body: "Community theories about map, characters, and mechanics. Clearly tagged as speculation so nobody mistakes hype for fact.",
    accent: "from-neon-cyan to-neon-purple",
  },
  {
    title: "Countdown & reminders",
    body: "Once an official date lands, we surface a countdown and let you set a reminder. Until then, the clock stays honest.",
    accent: "from-neon-purple to-neon-cyan",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-y border-white/10 bg-white/[0.02] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for the fans
          </h2>
          <p className="mt-4 text-white/60">
            Everything a GTA VI follower needs, in one fast, no-nonsense place.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-white/25"
            >
              <div
                className={`mb-5 h-1.5 w-12 rounded-full bg-gradient-to-r ${feature.accent}`}
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-white/60">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
