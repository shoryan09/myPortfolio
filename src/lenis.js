import Lenis from 'lenis';

/* App-level Lenis singleton. Initialised once from App, consumed by the navbar
   anchors via scrollToSection(). Under prefers-reduced-motion we never create an
   instance and fall back to native scrolling. */

let lenis = null;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initLenis() {
  if (typeof window === 'undefined' || lenis || prefersReducedMotion()) {
    return null;
  }

  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

  let rafId;
  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  // Return a teardown so the caller (App effect) can clean up on unmount.
  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
    lenis = null;
  };
}

// Navbar anchors call this. Offsets for the fixed nav. Falls back to native
// scrolling when Lenis is disabled (reduced motion / SSR).
export function scrollToSection(target) {
  const el =
    typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;

  if (lenis) {
    lenis.scrollTo(el, { offset: -72 });
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function getLenis() {
  return lenis;
}
