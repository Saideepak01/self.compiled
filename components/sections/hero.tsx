"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedText } from "@/components/motion/animated-text";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="container-wide relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-display font-bold tracking-tight gradient-text mb-6">
            {personalInfo.name}
          </h1>

          <AnimatedText
            text={personalInfo.role}
            as="p"
            className="font-display mb-6 text-xl font-medium text-muted-foreground md:text-2xl"
            delay={0.1}
          />

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gap-2 transition-transform duration-300 hover:scale-105"
            >
              <Link href="/experience">
                View my experience
                <ArrowRight className="size-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 transition-transform duration-300 hover:scale-105"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <Link
          href="#intro"
          className="flex flex-col items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Scroll to introduction"
        >
          <span className="sr-only">Scroll down</span>
          <ArrowDown className="size-5" />
        </Link>
      </div>
    </section>
  );
}
