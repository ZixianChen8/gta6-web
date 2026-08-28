const FAQS = [
  {
    q: "Is this an official Rockstar website?",
    a: "No. This is an independent, community-run fan site. It is not affiliated with, endorsed by, or sponsored by Rockstar Games or Take-Two Interactive.",
  },
  {
    q: "When is GTA 6 coming out?",
    a: "We don't publish a release date unless Rockstar officially announces one. Any date you see elsewhere that isn't from Rockstar is speculation.",
  },
  {
    q: "Where does your information come from?",
    a: "Confirmed details come from official Rockstar announcements and the reveal trailer. Everything else is labelled clearly as community speculation.",
  },
  {
    q: "Can I contribute?",
    a: "Yes — this is a fan project. The codebase is open for contributions from the community as the site grows.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="border-t border-white/10 bg-white/[0.02] py-24"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-10 space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:border-white/25"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
                {faq.q}
                <span className="text-neon-pink transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-white/60">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
