import { heroProof } from "../../contents";
import LinesSvg from "./components/LinesSvg";
import ParallexBgDots from "./components/ParallexBgDots";

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <ParallexBgDots />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-2 py-16 sm:px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-accent">
            Frontend Software Engineer
          </p>

          <h1 className="text-balance text-4xl font-extrabold text-primary sm:text-6xl">
            I Build Scalable{" "}
            <span className="relative inline-block text-accent">
              Web Applications
              <LinesSvg />
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-normal">
            Frontend engineering for complex products, from data-heavy
            interfaces to reliable business workflows.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="min-w-40 flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
            >
              View My Work
              <span className="ml-2">→</span>
            </a>
            <a
              href="#contact"
              className="min-w-40 flex items-center justify-center rounded-xl border border-primary/10 bg-primary/3 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary/20 hover:bg-primary/7"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            {heroProof.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
                <span className="text-base font-bold text-primary">
                  {item.value}
                </span>
                <span className="text-muted">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
