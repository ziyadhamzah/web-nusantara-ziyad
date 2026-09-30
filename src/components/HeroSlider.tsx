"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { heroSlides } from "@/data/hero";
import Photo from "./Photo";

const DURATION = 7000;
const SWIPE_THRESHOLD = 60;

export default function HeroSlider() {
  const total = heroSlides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const barRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef(0);
  const pausedRef = useRef(false);
  const lastTsRef = useRef(0);
  const touchXRef = useRef<number | null>(null);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  const goTo = useCallback(
    (next: number) => {
      progressRef.current = 0;
      setIndex(((next % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Hormati preferensi pengguna: tanpa autoplay & tanpa gerak otomatis.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Satu jam untuk autoplay + progress bar, supaya keduanya selalu sinkron
  // dan bisa dijeda tanpa keduanya melenceng.
  useEffect(() => {
    if (reduceMotion) return;
    let raf = 0;
    const loop = (ts: number) => {
      const dt = lastTsRef.current ? ts - lastTsRef.current : 0;
      lastTsRef.current = ts;
      if (!pausedRef.current) {
        progressRef.current += dt / DURATION;
        if (progressRef.current >= 1) {
          progressRef.current = 0;
          setIndex((i) => (i + 1) % total);
        }
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${Math.min(progressRef.current, 1)})`;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lastTsRef.current = 0;
    };
  }, [reduceMotion, total]);

  // Hentikan autoplay saat tab disembunyikan atau hero keluar layar.
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const slide = heroSlides[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Destinasi unggulan Nusantara Travel"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => {
        touchXRef.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchXRef.current;
        const end = e.changedTouches[0]?.clientX;
        touchXRef.current = null;
        if (start == null || end == null) return;
        const dx = end - start;
        if (Math.abs(dx) < SWIPE_THRESHOLD) return;
        if (dx < 0) next();
        else prev();
      }}
    >
      {/* Lapisan foto: hanya slide aktif dan tetangganya yang dimuat agar hemat bandwidth */}
      {heroSlides.map((s, i) => {
        const distance = Math.min(
          Math.abs(i - index),
          total - Math.abs(i - index)
        );
        if (distance > 1) return null;
        const active = i === index;
        return (
          <div
            key={s.photo}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} dari ${total}: ${s.label}`}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              active ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <div className={`absolute inset-0 ${active ? "kenburns" : ""}`}>
              <Photo
                name={s.photo}
                fallback={s.fallback}
                alt=""
                priority={i === 0}
                sizes="100vw"
              />
            </div>
          </div>
        );
      })}

      {/* Overlay gelap agar teks selalu terbaca */}
      <div
        aria-hidden
        className="absolute inset-0 z-20 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/75"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-20 hidden bg-gradient-to-r from-ink-950/90 via-ink-950/40 to-transparent lg:block"
      />
      <div aria-hidden className="grain absolute inset-0 z-20" />

      {/* Konten */}
      <div className="shell relative z-30 flex flex-1 flex-col justify-end pb-8 pt-28 sm:pb-12 lg:pb-16">
          <div className="max-w-4xl">
          <p
            key={`eyebrow-${index}`}
            style={{ "--d": "80ms" } as React.CSSProperties}
            className="hero-in t-label flex items-center gap-3 text-sand-300"
          >
            <span aria-hidden className="h-px w-8 bg-sand-500" />
            {slide.eyebrow}
          </p>

          <h1
            key={`title-${index}`}
            style={{ "--d": "160ms" } as React.CSSProperties}
            className="hero-in t-display mt-6 !text-[clamp(2.6rem,7.4vw,6.4rem)] text-white"
          >
            {slide.lines.map((line, i) => (
              <span key={line} className="block">
                {line}
                {i < slide.lines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p
            key={`sub-${index}`}
            style={{ "--d": "320ms" } as React.CSSProperties}
            className="hero-in t-lead mt-7 !max-w-lg !text-white/70"
          >
            {slide.subtitle}
          </p>

          <div
            key={`cta-${index}`}
            style={{ "--d": "440ms" } as React.CSSProperties}
            className="hero-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="/paket" className="btn btn-solid">
              Lihat Paket Wisata
            </Link>
            <Link href="/#destinasi" className="btn btn-outline-light">
              Jelajahi Destinasi
            </Link>
          </div>
        </div>

        {/* Kontrol slider */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/15 pt-7 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
          {/* Thumbnail */}
          <ul className="rail order-2 -mx-5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-5 sm:order-1 sm:mx-0 sm:overflow-visible sm:px-0">
            {heroSlides.map((s, i) => {
              const active = i === index;
              return (
                <li key={s.photo} className="shrink-0 snap-start">
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Tampilkan ${s.label}`}
                    aria-current={active ? "true" : undefined}
                    className="group block w-[74px] text-left sm:w-[96px]"
                  >
                    <span
                      className={`relative block h-[52px] overflow-hidden border transition-all duration-500 sm:h-[64px] ${
                        active
                          ? "border-sand-500 opacity-100"
                          : "border-white/20 opacity-45 hover:opacity-80"
                      }`}
                    >
                      <Photo
                        name={s.photo}
                        fallback={s.fallback}
                        alt=""
                        sizes="96px"
                        className={active ? "" : "grayscale-[0.4]"}
                      />
                      {active && (
                        <span
                          ref={barRef}
                          aria-hidden
                          className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-sand-300"
                        />
                      )}
                    </span>
                    <span
                      className={`mt-2 block t-label transition-colors duration-500 ${
                        active ? "text-sand-300" : "text-white/45 group-hover:text-white/75"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Panah + nomor */}
          <div className="order-1 flex items-center justify-between gap-4 sm:order-2 sm:justify-end">
            <p aria-live="polite" className="text-[13px] tracking-[0.1em] text-white/50">
              <span className="text-white">{String(index + 1).padStart(2, "0")}</span>
              <span className="mx-1.5 text-white/25">/</span>
              {String(total).padStart(2, "0")}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Destinasi sebelumnya"
                className="flex h-12 w-12 items-center justify-center border border-white/25 text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Destinasi berikutnya"
                className="flex h-12 w-12 items-center justify-center border border-white/25 text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/10"
              >
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
