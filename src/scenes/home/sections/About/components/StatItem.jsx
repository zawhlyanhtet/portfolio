export default function StatItem({ value, label, className }) {
  return (
    <div className={className}>
      <p className="bg-linear-to-br from-white via-accentsoft to-accent bg-clip-text text-3xl font-bold leading-none tracking-tight text-transparent drop-shadow-[0_0_18px_rgba(127,139,255,0.2)]">
        {value}
      </p>
      <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.12em] leading-5 text-muted">
        {label}
      </p>
    </div>
  );
}
