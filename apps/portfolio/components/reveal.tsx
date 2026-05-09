"use client";

/**
 * Reveal — lightweight IntersectionObserver wrapper.
 *
 * Strategy: elements start fully visible (no class in SSR/initial render).
 * Once JS mounts, the class "reveal" is added (opacity 0, translateY 14px),
 * then "in" is added when the element intersects the viewport.
 * This means content is always visible if JS is slow/absent, and the
 * fade-in is purely a progressive enhancement.
 *
 * prefers-reduced-motion: the CSS @media rule makes .reveal instantly
 * visible too, so no JS check is strictly needed — but we skip the
 * observer entirely for cleanliness.
 */

import { useEffect, useRef, ReactNode, ElementType } from "react";

/* ─── helpers ─────────────────────────────────────────────────── */

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ─── Reveal ──────────────────────────────────────────────────── */

interface RevealProps {
  /** Element type for the wrapper element. Defaults to "div". */
  as?: ElementType;
  className?: string;
  /** Extra delay before the reveal triggers after intersection (ms). */
  delayMs?: number;
  children: ReactNode;
  style?: React.CSSProperties;
}

/**
 * Wraps children in a single element that fades up into view once
 * it crosses the viewport threshold.
 */
export function Reveal({
  as: Tag = "div",
  className = "",
  delayMs = 0,
  children,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced-motion users: skip entirely — CSS also handles this via
    // @media (prefers-reduced-motion: reduce) { .reveal { opacity:1 } }
    if (prefersReducedMotion()) return;

    // Now that JS is running, mark the element as hidden so the
    // reveal transition can play.
    el.classList.add("reveal");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            el.classList.add("in");
          }, delayMs);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  // Cast to any to allow dynamic polymorphic element + ref assignment
  const AnyTag = Tag as React.ElementType;
  return (
    <AnyTag ref={ref} className={className || undefined} style={style}>
      {children}
    </AnyTag>
  );
}

/* ─── RevealList ──────────────────────────────────────────────── */

interface RevealListProps {
  /** Stagger delay between each direct child (ms). Default 60. */
  staggerMs?: number;
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

/**
 * Container that reveals its direct children one-by-one with a
 * cascading stagger when the container enters the viewport.
 *
 * Children are rendered normally in SSR; JS adds .reveal then .in
 * progressively.
 */
export function RevealList({
  staggerMs = 60,
  className = "",
  children,
  style,
}: RevealListProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Reduced-motion: leave everything untouched
    if (prefersReducedMotion()) return;

    const items = Array.from(container.children) as HTMLElement[];

    // Mark children hidden now that JS is active
    items.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => el.classList.add("in"), i * staggerMs);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.06 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [staggerMs]);

  return (
    <div ref={ref} className={className || undefined} style={style}>
      {children}
    </div>
  );
}
