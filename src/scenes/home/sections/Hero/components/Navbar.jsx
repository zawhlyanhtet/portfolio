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
    <>
      <header
        className={twMerge(
          `fixed left-0 top-0 w-full px-4 py-2 transition-all duration-300 md:px-6 lg:px-8 ${menuOpen ? "z-50" : "z-30"}`,
          scrolled && !menuOpen
            ? "bg-[rgba(29,29,31,0.8)] backdrop-blur-[20px] backdrop-saturate-180"
            : "",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <nav
            className={`hidden lg:flex flex-wrap items-center gap-5 text-sm ${scrolled ? "text-white/80" : "text-primary/80"}`}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition ${scrolled ? "hover:text-white" : "hover:text-primary"}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="/resume.pdf"
            download="Zaw_Hlyan_Htet_Frontend_Engineer_Resume.pdf"
            className={`hidden items-center justify-center rounded-xl border px-6 py-2 text-sm font-medium transition lg:flex ${
              scrolled
                ? "border-white bg-white text-primary hover:bg-white/90"
                : "border-primary/10 bg-white text-primary hover:border-primary/20 hover:bg-primary/7"
            }`}
          >
            Resume
          </a>

          <MenuButton
            open={menuOpen}
            scrolled={scrolled}
            onClick={() => setMenuOpen((open) => !open)}
          />
        </div>
      </header>
      <MobileAside
        navItems={navItems}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
