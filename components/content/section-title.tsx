"use client";

import { FadeIn } from "@/components/motion/fade-in";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps) {
  return (
    <FadeIn className={align === "center" ? "text-center" : ""}>
      {eyebrow && <p className="mb-2 text-sm font-medium text-accent">{eyebrow}</p>}
      <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
      {description && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{description}</p>}
    </FadeIn>
  );
}
