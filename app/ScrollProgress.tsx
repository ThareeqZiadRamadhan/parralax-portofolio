"use client";
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-[#3e2723]/50 dark:bg-[#1a1614]/50 z-50">
      <motion.div
        className="h-full bg-linear-to-rrom-[#8b6f47] via-[#c9a961] to-[#8b6f47] dark:from-[#a0826d] dark:via-[#c9a961] dark:to-[#a0826d] origin-left shadow-lg shadow-[#8b6f47]/50"
        style={{ scaleX }}
      />
    </div>
  );
}
