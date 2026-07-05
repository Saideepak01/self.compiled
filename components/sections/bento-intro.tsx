"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { philosophy, stats } from "@/lib/data";

export function BentoIntro() {
  return (
    <section id="intro" className="py-16 md:py-24">
      <div className="container-wide">
        <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glass flex h-full flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:border-accent/30">
                <span className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-16 mb-6">
          <p className="mb-2 text-sm font-medium text-accent">Principles</p>
          <h2 className="font-display text-3xl font-bold tracking-tight">How I build</h2>
        </FadeIn>

        <StaggerContainer stagger={0.1} className="grid gap-4 md:grid-cols-3">
          {philosophy.map((item) => (
            <StaggerItem key={item.title}>
              <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:border-accent/30">
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
