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
        />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div>
          <p className="section-lead">
            The frontend had to support reusable patterns, workflow-aware
            permissions, and data structures that could evolve without breaking
            the experience.
          </p>
        </div>

        <div className="space-y-8">
          {engineeringWork.map((item) => (
            <div key={item.title} className="border-l border-primary/10 pl-4">
              <p className="eyebrow-small font-medium text-accent">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
