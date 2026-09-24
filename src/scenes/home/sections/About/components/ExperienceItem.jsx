export default function ExperienceItem({ role }) {
  return (
    <article className="relative pb-10 last:pb-0">
      <span className="absolute -left-7 top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent" />
      <div className="flex items-center gap-3">
        <h3 className="text-lg font-semibold text-primary">{role.company}</h3>
        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[11px] font-light text-accent">
          Full-time
        </span>
      </div>
      <p className="mt-1 text-sm text-muted/80">{role.period}</p>
      <ul className="mt-4 space-y-3 text-[15px] leading-6 text-normal">
        {role.highlights.map((highlight) => (
          <li
            key={highlight}
            className="relative pl-4 before:absolute before:left-0 before:content-['•']"
          >
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}
