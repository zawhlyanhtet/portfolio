import { experience } from "../../contents";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-medium tracking-tight text-primary sm:text-4xl">
          Experience
        </h2>
        <div className="mt-10 flex flex-col gap-y-8 sm:gap-y-10">
          {experience.map((role) => (
            <article
              key={role.company}
              className="grid gap-y-3 md:grid-cols-[minmax(9.5rem,0.55fr)_minmax(0,1.3fr)_minmax(0,0.64fr)] md:gap-x-0 md:gap-y-6 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,1.2fr)_minmax(0,0.4fr)]"
            >
              <p className="text-[13px] tabular-nums text-muted md:self-center">
                {role.period}
              </p>

              <h3 className="text-lg font-medium text-primary md:self-center">
                {role.title}
              </h3>

              <p className="text-base font-medium text-muted md:self-center">
                {role.company}
              </p>

              <div className="md:col-start-2 md:col-span-2">
                <p className="text-sm leading-6 text-normal md:max-w-2xl lg:max-w-3xl">
                  {role.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-xs leading-5 text-muted">
                  <span className="font-medium uppercase tracking-[0.12em] text-accent">
                    Focus
                  </span>
                  <span className="hidden sm:inline" aria-hidden="true">
                    /
                  </span>
                  {role.focus.map((item, index) => (
                    <span key={item}>
                      {item}
                      {index < role.focus.length - 1 && (
                        <span className="ml-2 text-accent" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
