import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <main className="bg-haze relative isolate flex min-h-screen items-center overflow-hidden px-6 py-10 text-primary sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[clamp(7rem,24vw,15rem)] font-extrabold leading-[0.78] tracking-[-0.08em] text-primary">
            404
          </p>

          <div className="mt-10 max-w-xl border-l border-accent/60 pl-5 sm:pl-7">
            <h1 className="text-2xl font-bold text-primary sm:text-3xl">
              This page moved off the map.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-normal sm:text-lg">
              The route you requested does not exist, or it is no longer part of
              the portfolio. Let&apos;s get you back to the work.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/"
              className="inline-flex min-w-40 items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
            >
              Back to homepage
              <span className="ml-2 text-base">↗</span>
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-2 py-3 text-sm font-semibold text-normal transition hover:text-primary"
            >
              Get in touch
              <span className="ml-2 text-base text-accent">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-primary/10 pt-5 text-xs uppercase tracking-[0.2em] text-muted sm:mt-24">
          <span>Portfolio / 404</span>
          <span className="hidden sm:inline">Frontend Software Engineer</span>
        </div>
      </div>
    </main>
  );
}
