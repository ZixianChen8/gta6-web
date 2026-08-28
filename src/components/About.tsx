const FACTS = [
  {
    label: "Status",
    value: "Officially announced",
    note: "Confirmed by Rockstar Games.",
  },
  {
    label: "Setting",
    value: "Vice City & Leonida",
    note: "As shown in the official reveal trailer.",
  },
  {
    label: "Release date",
    value: "To be confirmed",
    note: "No date is claimed here to avoid misinformation.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          What we actually know
        </h2>
        <p className="mt-4 text-white/60">
          We separate confirmed information from community speculation. Anything
          not officially announced by Rockstar is clearly labelled as a fan
          guess.
        </p>
      </div>

      <dl className="mt-12 grid gap-5 sm:grid-cols-3">
        {FACTS.map((fact) => (
          <div
            key={fact.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">
              {fact.label}
            </dt>
            <dd className="mt-2 text-xl font-bold text-white">{fact.value}</dd>
            <p className="mt-2 text-sm text-white/50">{fact.note}</p>
          </div>
        ))}
      </dl>
    </section>
  );
}
