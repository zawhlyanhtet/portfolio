const metadata = [
  { label: "Role", value: "Frontend Engineer" },
  { label: "Timeline", value: "Sep 2023 – Dec 2025" },
  { label: "Contribution", value: "~90% frontend ownership" },
  {
    label: "Focus",
    value: "Multi-tenant · RBAC · Configurable UI",
  },
];

const summaryCards = [
  {
    label: "Product",
    description:
      "Shared platform for managing multiple client organizations with separate operational boundaries and clear business scope.",
  },
  {
    label: "Challenge",
    description:
      "Role-based access, configurable store data, and large operational datasets created a complex frontend environment that needed clear structure and stable patterns.",
  },
  {
    label: "Direction",
    description:
      "Owned the frontend development and translated business rules into reusable workflows, permission-aware interfaces, and scalable administrative patterns.",
  },
];

export default function CaseStudyHero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-18 sm:px-10 sm:pt-22 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-16">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-bold uppercase tracking-[0.28em] text-accentsoft">
              Case study / 01
            </p>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Client &amp; Store
              <span className="block text-accentsoft">Management Platform</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-mist sm:text-xl">
              Built for multi-tenant business operations, this platform helped
              client organizations manage stores, users, permissions, and
              configurable business data within a single system.
            </p>
          </div>

          <div className="grid gap-4 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            {metadata.map((item) => (
              <div key={item.label}>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {item.label}
                </dt>
                <dd className="supporting-heading mt-2">{item.value}</dd>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {summaryCards.map((card, index) => (
            <div
              key={card.label}
              className={`border p-6 ${summaryCards.length - 1 === index ? "border-accent/40 bg-accent/8 text-white" : "border-white/10 bg-white/2.5 text-mist"}`}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accentsoft">
                {String(index + 1).padStart(2, "0")} / {card.label}
              </span>
              <p className="mt-8 text-sm leading-6">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
