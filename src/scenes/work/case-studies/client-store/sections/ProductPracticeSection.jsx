import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import { productPractice } from "../contents";

export default function ProductPracticeSection() {
  return (
    <Section>
      <div className="max-w-3xl">
        <SectionHeader
          eyebrow="Product in practice"
          title="Four views into the platform's core capabilities and workflows."
          description="The product connected client organizations, store operations,
          configurable data structures, and role-based access control in one
          consistent frontend experience."
        />
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {productPractice.map((item) => (
          <div
            key={item.title}
            className="overflow-hidden border border-white/10 bg-white/2.5"
          >
            <div className="border-b border-white/10 px-5 py-4">
              <span className="eyebrow-small font-semibold text-accentsoft">
                {item.title}
              </span>
            </div>

            <div className="bg-black/20">
              <img
                src={item.screenshot}
                alt={item.alt}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <p className="supporting-text max-w-3xl mt-6">
        Screenshots are sanitized portfolio representations using fictional
        content and generic terminology. They illustrate the underlying
        workflows without exposing real company or user data.
      </p>
    </Section>
  );
}
