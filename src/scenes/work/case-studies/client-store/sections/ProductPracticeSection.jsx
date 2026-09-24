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
          <figure
            key={item.title}
            className="overflow-hidden rounded-xl border border-primary/10 bg-white/80"
          >
            <div className="px-5 pb-3 pt-5">
              <span className="eyebrow-small font-medium text-accent">
                {item.title}
              </span>
            </div>

            <div className="bg-white">
              <img
                src={item.screenshot}
                alt={item.alt}
                className="h-auto w-full block"
              />
            </div>
            <figcaption className="px-5 pb-5 pt-4 text-sm leading-6 text-normal">
              {item.description}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-6 max-w-3xl border-l border-primary/10 pl-4 supporting-text text-muted">
        Screenshots are sanitized portfolio representations using fictional
        content and generic terminology. They illustrate the underlying
        workflows without exposing real company or user data.
      </p>
    </Section>
  );
}
