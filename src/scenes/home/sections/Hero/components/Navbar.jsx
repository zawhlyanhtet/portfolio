import { useEffect, useState } from "react";
import { navItems } from "../../../contents";
import { twMerge } from "tailwind-merge";
import MenuButton from "../../../components/MenuButton";
import MobileAside from "./MobileAside";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = menuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header
      className={twMerge(
        "fixed left-0 top-0 z-50 w-full px-4 py-5 transition-all duration-300 md:px-6 lg:px-8",
        scrolled
          ? "border-b border-white/10 backdrop-blur"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <nav className="hidden lg:flex flex-wrap items-center gap-5 text-sm font-medium text-mist">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="/resume.pdf"
          download="Zaw_Hlyan_Htet_Frontend_Engineer_Resume.pdf"
          className="hidden lg:flex items-center justify-center rounded-xl border border-white/10 bg-white/4 px-6 py-2 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/8"
        >
          Resume
        </a>

        <MenuButton
          open={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        />
      </div>

      <MobileAside
        navItems={navItems}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
