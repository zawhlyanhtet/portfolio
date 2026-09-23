import { heroProof } from "../../contents";
import LinesSvg from "./components/LinesSvg";
import ParallexBgDots from "./components/ParallexBgDots";

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <ParallexBgDots />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_45%)]" />

      <div className="mx-auto w-full max-w-6xl px-2 py-16 sm:px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-accentsoft/90">
            Frontend Software Engineer
          </p>

          <h1 className="text-balance text-4xl font-extrabold text-white sm:text-6xl">
            I Build Scalable{" "}
            <span className="relative inline-block text-accentsoft">
              Web Applications
              <LinesSvg />
            </span>
          </h1>

          <p className="mx-auto max-w-2xl mt-6 text-lg text-mist">
            Frontend engineering for complex products, from data-heavy
            interfaces to reliable business workflows.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="min-w-40 flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accentsoft"
            >
              View My Work
              <span className="ml-2">→</span>
            </a>
            <a
              href="#contact"
              className="min-w-40 flex items-center justify-center rounded-xl border border-white/10 bg-white/3 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/7"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-mist">
            {heroProof.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accentsoft/80" />
                <span className="text-base font-bold text-white">
                  {item.value}
                </span>
                <span className="text-mist/90">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
