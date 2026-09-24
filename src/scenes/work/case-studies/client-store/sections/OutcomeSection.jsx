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

      <div className="mt-10">
        <div className="grid gap-8 py-8 md:grid-cols-3 md:gap-0">
          {outcomes.map((item, index) => (
            <div
              key={item.title}
              className={`md:px-6 ${index > 0 ? "border-t border-primary/10 pt-8 md:border-t-0 md:border-l md:pt-0" : ""}`}
            >
              <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
              <p className="supporting-text mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
