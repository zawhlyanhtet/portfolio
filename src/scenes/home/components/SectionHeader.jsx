export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="flex flex-col gap-5 border-b border-primary/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="flex items-center gap-2.5">
          <span className="h-px w-8 bg-accent/60" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        </div>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {title}
        </h2>
      </div>

      <p className="max-w-sm text-sm leading-6 text-normal">{description}</p>
    </div>
  );
}
