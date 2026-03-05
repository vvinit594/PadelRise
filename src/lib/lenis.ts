import Lenis from "@studio-freight/lenis";

export function initLenis() {
  const lenis = new Lenis({
    // Use lerp instead of duration for snappier, lighter feel (higher = more responsive)
    lerp: 0.12,
    // Faster wheel response
    wheelMultiplier: 1.2,
    touchMultiplier: 1.5,
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
  });

  let rafId: number;

  function raf(time: number) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);

  return { lenis, stop: () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
  } };
}
