import { metadata, summaryCards } from "../contents";

export default function CaseStudyHero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-18 sm:px-10 sm:pt-22 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-16">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-bold uppercase tracking-[0.28em] text-accent">
              Case study / 01
            </p>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.04] text-primary sm:text-6xl lg:text-7xl">
              Client &amp; Store
              <span className="block text-accent">Management Platform</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-normal sm:text-xl">
              Built for multi-tenant business operations, this platform helped
              client organizations manage stores, users, permissions, and
              configurable business data within a single system.
            </p>
          </div>

          <div className="grid gap-4 border-t border-primary/10 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            {metadata.map((item) => (
              <div key={item.label}>
                <dt className="eyebrow-small text-muted">{item.label}</dt>
                <dd className="supporting-heading mt-2">{item.value}</dd>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {summaryCards.map((card, index) => (
            <div
              key={card.label}
              className={`border-t border-primary/10 pt-6 text-normal ${summaryCards.length - 1 === index ? "md:border-t md:border-accent/20 md:bg-accent/4 md:pt-5 md:pl-5" : "md:pt-5"}`}
            >
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                {String(index + 1).padStart(2, "0")} / {card.label}
              </span>
              <p className="mt-5 text-sm leading-6 text-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
