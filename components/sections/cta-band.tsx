"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        <FadeIn>
          <div className="glass relative overflow-hidden rounded-3xl px-6 py-16 text-center md:px-12 md:py-24">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-[80px]" />

            <div className="relative z-10">
              <p className="mb-4 text-sm font-medium text-accent">Open for opportunities</p>
              <h2 className="font-display mx-auto mb-6 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
                Let’s talk.
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
                I am open to full-stack roles, especially ones where I can own features end to end.
                If you are building something hard, I would like to hear about it.
              </p>

              <Button
                asChild
                size="lg"
                className="gap-2 transition-transform duration-200 hover:scale-105"
              >
                <Link href="/contact">
                  Start a conversation
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
