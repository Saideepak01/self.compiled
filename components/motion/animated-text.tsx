"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "word" | "line";
  delay?: number;
}

export function AnimatedText({
  text,
  className,
  as: Component = "h1",
  splitBy = "word",
  delay = 0,
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const items = splitBy === "word" ? text.split(" ") : text.split("\n");

  if (prefersReducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        aria-label={text}
      >
        {items.map((item, index) => (
          <motion.span
            // biome-ignore lint/suspicious/noArrayIndexKey: static text split into words; order never changes
            key={`${item}-${index}`}
            variants={child}
            className="inline-block"
            style={{ marginRight: splitBy === "word" ? "0.25em" : undefined }}
          >
            {item}
            {splitBy === "line" && index < items.length - 1 && <br />}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
