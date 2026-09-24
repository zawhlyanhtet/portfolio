export default function StatItem({ value, label, className }) {
  return (
    <div className={className}>
      <p className="bg-linear-to-br from-primary via-accent to-accent bg-clip-text text-3xl font-bold leading-none tracking-tight text-transparent drop-shadow-[0_0_18px_rgba(0,117,222,0.18)] sm:text-[2rem]">
        {value}
      </p>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] leading-5 text-muted sm:mt-5">
        {label}
      </p>
    </div>
  );
}
