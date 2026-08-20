import { useEffect, useState } from "react";

/**
 * `whileInView` needs its IntersectionObserver to actually fire before
 * content becomes visible. If hydration is slow, interrupted, or something
 * else keeps that from happening, content can be stuck at its "hidden"
 * (opacity: 0) state indefinitely. This returns true after a short delay as
 * a hard safety net — pair it with `animate={forceVisible ? "visible" : undefined}`
 * alongside the normal `whileInView` so content is guaranteed to become
 * visible even if the scroll-triggered reveal never fires. In the normal
 * case this never matters: an already-in-view element resolves via
 * `whileInView` within a frame or two, well under this delay.
 */
export function useRevealFallback(delayMs = 1200): boolean {
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setForceVisible(true), delayMs);
    return () => clearTimeout(id);
  }, [delayMs]);

  return forceVisible;
}
