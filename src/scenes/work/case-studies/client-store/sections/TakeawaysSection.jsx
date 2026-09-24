import { Link } from "react-router";
import Section from "../components/Section";

export default function TakeawaysSection() {
  return (
    <Section className="border-t border-primary/10">
      <div className="flex flex-col sm:items-start gap-8 lg:flex-row lg:items-center sm:justify-between">
        <div>
          <p className="eyebrow text-accent">Takeaways</p>
          <p className="mt-4 lg:max-w-2xl text-lg leading-8 text-normal">
            This project strengthened my approach to building frontend systems
            around complex business rules, with a focus on reusable patterns,
            permission-aware interfaces, and flexible data structures.
          </p>
        </div>
        <Link
          to="/#projects"
          className="supporting-heading inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-white transition hover:bg-accent/90"
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
