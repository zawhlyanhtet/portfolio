import StatItem from "./components/StatItem";
import ExperienceItem from "./components/ExperienceItem";
import { experience } from "../../contents";

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl text-primary">
            Profile
          </h2>
          <p className="mt-8 max-w-xl text-base leading-7 text-normal">
            I&apos;m a frontend engineer with 4+ years of experience building
            production web applications with React and TypeScript.
          </p>
          <p className="mt-2 max-w-xl text-base leading-7 text-normal">
            I turn complex requirements into maintainable interfaces, reusable
            components, and clear user experiences, with a focus on thoughtful
            architecture and practical usability.
          </p>

          <div className="mt-8 grid max-w-xl gap-y-4 py-3 sm:grid-cols-3 sm:gap-y-0">
            <StatItem value="4+" label="Years Experience" className="sm:pr-4" />
            <StatItem
              value="8+"
              label="Projects Delivered"
              className="border-t border-primary/10 pt-4 sm:border-l sm:border-t-0 sm:pt-0 sm:px-4"
            />
            <StatItem
              value="Frontend"
              label="Engineering Focus"
              className="border-t border-primary/10 pt-4 sm:border-l sm:border-t-0 sm:pt-0 sm:pl-4"
            />
          </div>
        </div>

        <div id="experience">
          <h2 className="text-3xl font-bold sm:text-4xl text-primary">
            Experience
          </h2>
          <div className="relative mt-8 pl-7 before:absolute before:bottom-2 before:left-1.25 before:top-2 before:w-px before:bg-accent/20">
            {experience.map((role) => (
              <ExperienceItem key={role.company} role={role} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
