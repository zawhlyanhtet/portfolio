import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import { productChallenges } from "../contents";

export default function ChallengeSection() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeader
            eyebrow="The challenge"
            title="Making a flexible platform feel predictable."
            titleClassName="mb-0"
          />
        </div>

        <div>
          <p className="section-lead">
            The difficulty was not simply displaying business data. The frontend
            had to adapt to configurable roles and permissions, dynamic store
            fields, and large operational datasets while keeping everyday
            workflows clear and consistent.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {productChallenges.map((item, index) => (
              <article
                key={item.title}
                className={`border-t border-primary/10 pt-5 ${
                  index === productChallenges.length - 1
                    ? "md:col-span-2 md:mx-auto"
                    : ""
                }`}
              >
                <h3 className="text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="supporting-text mt-3">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
