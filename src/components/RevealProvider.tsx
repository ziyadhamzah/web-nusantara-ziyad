"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** Reveal saat scroll, parallax ringan (desktop), dan garis progres scroll. Tanpa library. */
export default function RevealProvider() {
  const pathname = usePathname();
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const canParallax =
      window.matchMedia("(min-width: 1024px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      if (canParallax) {
        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          if (y < 1400) el.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
        });
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-[3px] pointer-events-none">
      <div ref={bar} className="h-full origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-400" />
    </div>
  );
}
