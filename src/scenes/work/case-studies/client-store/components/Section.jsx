export default function Section({ children, className = "" }) {
  return (
    <section className={`px-6 py-20 sm:px-10 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
