import { Link } from "react-router";
import Section from "../components/Section";

export default function TakeawaysSection() {
  return (
    <Section className="border-t border-white/10">
      <div className="flex flex-col sm:items-start gap-8 lg:flex-row lg:items-center sm:justify-between">
        <div>
          <p className="eyebrow text-accentsoft">Takeaways</p>
          <p className="mt-4 lg:max-w-2xl text-lg leading-8 text-muted">
            This project strengthened my approach to building frontend systems
            around complex business rules, with a focus on reusable patterns,
            permission-aware interfaces, and flexible data structures.
          </p>
        </div>
        <Link
          to="/#projects"
          className="supporting-heading inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 transition hover:bg-accentsoft"
        >
          Explore more work
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </Section>
  );
}
