import SectionHeader from "../../components/SectionHeader";
import Tag from "../../components/Tag";
import { skillGroups, workApproach } from "../../contents";

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="What I work with"
          title="Skills in practice"
          description="Tools and patterns I use to build maintainable, user-focused web applications."
        />

        <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.category} className="pt-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accentsoft" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                  {group.category}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill} variant="skill">
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-10">
          <div className="flex items-center gap-2.5">
            <span className="h-px w-8 bg-accentsoft/60" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentsoft">
              How I work
            </p>
          </div>

          <div className="mt-6 grid gap-8 md:grid-cols-3 md:gap-10">
            {workApproach.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                <span className="pt-1 font-mono text-xs font-medium tracking-wider text-accentsoft/70">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
