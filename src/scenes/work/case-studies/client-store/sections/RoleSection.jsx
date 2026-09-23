import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import { roleHighlights } from "../contents";

export default function RoleSection() {
  return (
    <Section>
      <div className="max-w-4xl">
        <SectionHeader
          eyebrow="My role"
          title="I translated complex business rules into a consistent frontend
          experience."
          description="I owned ~90% of the frontend development across the platform,
          translating business requirements and API behavior into maintainable
          interfaces and reusable patterns. My work covered the core workflows
          while keeping interactions and behavior consistent across different
          parts of the application."
          descriptionClassName="max-w-3xl"
        />
      </div>

      <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
        {roleHighlights.map((item, index) => (
          <div
            key={item.title}
            className="grid gap-3 py-6 sm:grid-cols-[4rem_13rem_1fr] sm:gap-6"
          >
            <span className="pt-1 font-mono text-xs tracking-[0.2em] text-accentsoft">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="text-lg font-semibold text-white">{item.title}</h3>

            <p className="supporting-text">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
