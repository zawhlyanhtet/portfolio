export default function Tag({ children, variant = "pill" }) {
  const className =
    variant === "skill"
      ? "rounded-lg border border-white/10 bg-white/3 px-3 py-2 text-sm text-muted transition hover:-translate-y-0.5 hover:border-accentsoft/40 hover:bg-accent/10 hover:text-white"
      : "rounded-full border border-white/10 px-3 py-1.5 text-xs text-mist";

  return <span className={className}>{children}</span>;
}
