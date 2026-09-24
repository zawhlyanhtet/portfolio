import { twMerge } from "tailwind-merge";

export default function MobileAside({ navItems, open, onClose }) {
  return (
    <>
      <div
        className={twMerge(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden="true"
        onClick={onClose}
      />
      <aside
        id="mobile-navigation"
        className={twMerge(
          "fixed inset-y-0 right-0 top-0 z-40 flex w-full flex-col overflow-y-auto bg-primary px-8 pb-8 pt-24 text-white transition-transform duration-400 sm:w-[60%] md:w-[45%] lg:hidden",
          open ? "translate-x-0" : "pointer-events-none translate-x-full",
        )}
        aria-hidden={!open}
      >
        <div className="pb-8">
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white">
            Explore the work.
          </h2>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
            Frontend systems, product thinking, and selected work.
          </p>
        </div>

        <nav className="flex flex-col" onClick={onClose}>
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="flex items-center justify-between border-b border-white/10 py-5 text-sm font-semibold text-white/70 transition last:border-b-0 hover:text-white"
            >
              <span>{item}</span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-accent/80">
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-10">
          <p className="eyebrow-small text-white/60">More about my work</p>
          <a
            href="/resume.pdf"
            download="Zaw_Hlyan_Htet_Frontend_Engineer_Resume.pdf"
            className="mt-4 inline-flex w-full items-center justify-between bg-white px-4 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
          >
            <span>Download resume</span>
            <span
              className="text-base leading-none text-accent"
              aria-hidden="true"
            >
              ↓
            </span>
          </a>
        </div>
      </aside>
    </>
  );
}
