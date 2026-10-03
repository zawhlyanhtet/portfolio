import { skillGroups } from "../../contents";

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            What I work with
          </p>
          <h2 className="mt-3 section-heading tracking-tight">
            Skills in practice
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-normal">
            Tools and patterns I use to build maintainable, user-focused web
            applications.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="grid gap-2 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {group.category}
              </h3>

              <p className="flex flex-wrap gap-x-2 text-sm leading-6 text-normal">
                {group.skills.map((skill, index) => (
                  <span key={skill}>
                    {skill}
                    {index < group.skills.length - 1 && (
                      <span className="ml-2" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="mt-10 border-t border-primary/10 pt-10">
          <div className="flex items-center gap-2.5">
            <span className="h-px w-8 bg-accent/60" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              How I work
            </p>
          </div>

          <div className="mt-6 grid gap-8 md:grid-cols-3 md:gap-10">
            {workApproach.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                <span className="pt-1 font-mono text-xs font-medium tracking-wider text-accent">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-base font-semibold text-primary">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */
}
