import SectionHeader from "../../components/SectionHeader";
import ProjectRow from "./components/ProjectRow";
import { selectedWork } from "../../contents";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Professional work"
          title="Selected work"
          description="Selected professional work where I led frontend development."
        />

        <div className="divide-y divide-white/10">
          {selectedWork.map((project) => (
            <ProjectRow key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
