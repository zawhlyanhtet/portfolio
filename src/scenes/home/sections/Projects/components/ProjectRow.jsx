import { Link } from "react-router";
import Tag from "../../../components/Tag";

export default function ProjectRow({ project }) {
  return (
    <article className="grid gap-6 py-8 first:pt-10 last:pb-0 md:grid-cols-[5rem_1fr_auto] md:items-start md:gap-10">
      <span className="font-mono text-xs font-medium tracking-wider text-accentsoft/70">
        {project.number}
      </span>

      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accentsoft">
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-muted">
          {project.description}
        </p>
        {project.slug ? (
          <Link
            to={`/work/${project.slug}`}
            className="mt-5 inline-flex items-center text-sm font-semibold text-accentsoft transition hover:text-white"
          >
            View Case Study
            <span className="ml-2" aria-hidden="true">
              ↗
            </span>
          </Link>
        ) : (
          <span className="mt-5 inline-flex text-sm font-semibold text-muted">
            Case study coming soon
          </span>
        )}
      </div>

      <div className="flex max-w-xs flex-wrap gap-2 md:justify-end">
        {project.technologies.map((technology) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </div>
    </article>
  );
}
