import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import { engineeringWork } from "../contents";

export default function EngineeringSection() {
  return (
    <Section>
      <div className="max-w-2xl">
        <SectionHeader
          eyebrow="Key engineering work"
          title="The core value was making complex operations feel structured and
          scalable."
          description="This section focuses on implementation decisions behind the product
          workflows shown above."
        />
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {engineeringWork.map((item) => (
          <article
            key={item.title}
            className="border border-white/10 bg-white/2 p-6"
          >
            <p className="eyebrow-small font-semibold text-accentsoft">
              Engineering focus
            </p>
            <h3 className="mt-5 text-xl font-semibold text-white sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-muted">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
