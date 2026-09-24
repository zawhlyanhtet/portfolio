export default function Tag({ children, variant = "pill" }) {
  const className =
    variant === "skill"
      ? "rounded-lg border border-primary/10 bg-primary/3 px-3 py-2 text-sm text-muted transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10 hover:text-primary"
      : "rounded-full border border-primary/10 px-3 py-1.5 text-xs text-muted";

  return <span className={className}>{children}</span>;
}
