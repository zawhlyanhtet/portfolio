import { Link } from "react-router";

export default function PageNavbar() {
  return (
    <header className="px-6 py-6 sm:px-10 lg:px-8">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <a
          href="/"
          className="text-sm font-bold uppercase tracking-[0.2em] text-primary transition hover:text-accent"
        >
          Zaw Hlyan Htet
        </a>

        <Link
          to="/#projects"
          className="text-sm font-semibold text-normal transition hover:text-primary"
        >
          Back to work
          <span className="ml-2 text-accent" aria-hidden="true">
            ←
          </span>
        </Link>
      </nav>
    </header>
  );
}
