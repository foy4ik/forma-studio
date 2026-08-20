import { useEffect, useState } from "react";

/**
 * True once the component has mounted on the client. Used to gate mount-time
 * Framer Motion opacity transitions: the very first paint (SSR output, and
 * the client's pre-hydration render) must match exactly and must never rely
 * on JS having already run — otherwise a slow or interrupted hydration can
 * leave content stuck at its "hidden" (opacity: 0) SSR-rendered state
 * indefinitely. Content renders fully visible until this flips to true, then
 * animated transitions (which are safe from that point on, since JS is
 * confirmed running) take over.
 */
export function useHasMounted(): boolean {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Intentional: this is the standard SSR/client hydration-detection
    // pattern — there is no non-effect way to know the component has
    // mounted on the client, since the server can never run this code.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasMounted(true);
  }, []);

  return hasMounted;
}
