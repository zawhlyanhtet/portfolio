import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import { outcomes } from "../contents";

export default function OutcomeSection() {
  return (
    <Section>
      <div className="max-w-4xl">
        <SectionHeader
          eyebrow="Outcome"
          title="A more consistent foundation for multi-tenant operations."
          description="The frontend established reusable patterns that allowed the platform to
        support changing business requirements while keeping core workflows
        consistent."
        />
      </div>

      <div className="mt-10 grid border-y border-white/10 md:grid-cols-3 md:divide-x md:divide-white/10">
        {outcomes.map((item, index) => (
          <div
            key={item.title}
            className={`py-6 ${index > 0 ? "border-t border-white/10 md:border-t-0 md:px-6" : "md:pr-6"} ${index === outcomes.length - 1 ? "md:pl-6" : ""}`}
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="supporting-text mt-3">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
