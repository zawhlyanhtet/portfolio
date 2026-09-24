import { useEffect, useState } from "react";

export default function ParallexBgDots() {
  const [heroParallax, setHeroParallax] = useState(0);

  useEffect(() => {
    const updateParallax = () => {
      const scrollY = window.scrollY;
      setHeroParallax(Math.min(scrollY * 0.12, 36));
    };

    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });

    return () => window.removeEventListener("scroll", updateParallax);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 transition-transform duration-200 ease-out"
      style={{ transform: `translate3d(0, ${heroParallax}px, 0)` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(29,29,31,0.5)_0.9px,transparent_1px)] bg-size-[42px_42px] mask-[radial-gradient(circle_at_center,black_18%,transparent_72%)]" />
    </div>
  );
}
