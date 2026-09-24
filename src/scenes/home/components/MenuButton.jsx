import { twMerge } from "tailwind-merge";

function MenuLine({ className }) {
  return (
    <span
      aria-hidden="true"
      className={twMerge(
        "absolute h-px w-5 bg-current transition-all duration-300",
        className,
      )}
    />
  );
}

export default function MenuButton({ open, scrolled, onClick }) {
  return (
    <button
      type="button"
      aria-controls="mobile-navigation"
      aria-expanded={open}
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      onClick={onClick}
      className={`relative z-50 ml-auto flex h-9.5 w-9.5 items-center justify-center transition hover:text-accent lg:hidden ${open ? "text-white" : !scrolled ? "text-primary" : "text-white"}`}
    >
      <MenuLine className={open ? "rotate-45" : "-translate-y-1.5"} />

      <MenuLine className={open ? "opacity-0" : "opacity-100"} />

      <MenuLine className={open ? "-rotate-45" : "translate-y-1.5"} />
    </button>
  );
}
