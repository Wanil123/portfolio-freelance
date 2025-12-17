// src/components/ui/Reveal.jsx
import { motion } from "framer-motion";
import { useMemo } from "react";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Check if user prefers reduced motion
const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
};

export const Reveal = ({ children, delay = 0, className = "" }) => {
  // Memoize the reduced motion check
  const shouldReduceMotion = useMemo(() => prefersReducedMotion(), []);

  // If user prefers reduced motion, render without animation
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
        margin: "-50px" // Start animation slightly before element enters viewport
      }}
      transition={{
        duration: 0.35, // Faster animation (was 0.45)
        ease: "easeOut",
        delay: Math.min(delay, 0.3) // Cap delay at 0.3s max
      }}
    >
      {children}
    </motion.div>
  );
};
