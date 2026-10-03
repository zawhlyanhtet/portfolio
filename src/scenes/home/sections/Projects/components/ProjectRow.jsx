import { Link } from "react-router";
import ExternalLinkIcon from "../../../components/ExternalLinkIcon";

export default function ProjectRow({ project }) {
  return (
    <article className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 gap-y-4 py-8 first:pt-10 last:pb-0 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-x-6 md:gap-x-10">
      <span className="pt-1 font-mono text-xs font-medium tracking-wider text-accent">
        {project.number}
      </span>

      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-medium text-primary sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-normal">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-2 text-xs leading-6 text-muted">
          <span className="font-semibold text-primary">Built with</span>
          {project.technologies.map((technology, index) => (
            <span key={technology} className="whitespace-nowrap">
              {technology}
              {index < project.technologies.length - 1 && (
                <span className="ml-2" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
        {project.slug ? (
          <Link
            to={`/work/${project.slug}`}
            className="mt-4 inline-flex items-center text-sm font-semibold text-accent transition hover:text-primary"
          >
            View Case Study
            <span className="ml-2" aria-hidden="true">
              <ExternalLinkIcon />
            </span>
          </Link>
        ) : (
          <span className="mt-5 inline-flex text-sm font-semibold text-muted">
            Case study coming soon
          </span>
        )}
      </div>
    </article>
  );
}
