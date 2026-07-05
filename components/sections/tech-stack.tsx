"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { techIconMap } from "@/lib/tech-icon-map";
import { techStack } from "@/lib/data";
import type { TechItem } from "@/types";

function TechCard({ tech }: { tech: TechItem }) {
  const [hovered, setHovered] = useState(false);
  const entry = techIconMap[tech.name];

  return (
    <div
      className="glass group flex h-full flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center transition-[border-color,box-shadow] duration-300 hover:border-accent/30 hover:shadow-glow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          color: hovered && entry ? entry.color : undefined,
          transition: "color 0.25s ease, filter 0.25s ease",
        }}
        className={hovered ? undefined : "text-muted-foreground grayscale"}
      >
        {entry ? (
          <span aria-label={`${tech.name} icon`} role="img">
            <entry.Icon className="size-9" />
          </span>
        ) : (
          <span className="flex size-9 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
            {tech.name.charAt(0)}
          </span>
        )}
      </div>
      <div className="space-y-0.5">
        <p className="text-sm font-semibold">{tech.name}</p>
        <p className="text-xs text-muted-foreground">{tech.category}</p>
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-wide">
        <FadeIn className="mb-6 text-center" y={16}>
          <p className="mb-2 text-sm font-medium text-accent">Stack</p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Tools I work with
          </h2>
          <p className="mt-3 text-muted-foreground">
            The tools I reach for most often. I am not tied to any of them — I just know them well enough to ship.
          </p>
        </FadeIn>

        <StaggerContainer
          stagger={0.05}
          className="grid gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {techStack.map((tech) => (
            <StaggerItem key={tech.name}>
              <TechCard tech={tech} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
