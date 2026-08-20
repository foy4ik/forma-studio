"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { pageVariants } from "@/lib/motion";
import { useHasMounted } from "@/lib/useHasMounted";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hasMounted = useHasMounted();

  // First paint (server-rendered HTML and the client's pre-hydration render)
  // must show content immediately, with no JS-gated opacity — see useHasMounted.
  if (!hasMounted) {
    return <div>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
