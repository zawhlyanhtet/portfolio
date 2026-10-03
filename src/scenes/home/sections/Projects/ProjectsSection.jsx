import ProjectRow from "./components/ProjectRow";
import { selectedWork } from "../../contents";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="mt-3 section-heading tracking-tight">Selected work</h2>

          <p className="max-w-sm text-sm leading-6 text-normal">
            Selected professional work where I led frontend development.
          </p>
        </div>

        <div className="divide-y divide-primary/10">
          {selectedWork.map((project) => (
            <ProjectRow key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
