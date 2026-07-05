import { SectionTitle } from "@/components/content/section-title";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { personalInfo } from "@/lib/data";

export const metadata = {
  title: "About",
  description: "About Saideepak — full-stack engineer, currently at Growfin, previously at Kissflow and Animaker.",
};

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container-tight">
        <SectionTitle
          eyebrow="About"
          title={`Hi, I’m ${personalInfo.name}`}
          description="I build software and try to stay curious about everything else."
        />

        <FadeIn className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I started out thinking engineering was mostly about writing clean code. A few production
            incidents, cross-team debates, and features that looked great but no one used cured me of
            that. These days I think the job is making decisions that still make sense six months
            later. Clean code helps, but clear thinking helps more.
          </p>
          <p>
            Kissflow taught me that architecture is less a diagram and more a long-running
            negotiation. Five teams shipping to one platform means every choice has to be explained,
            not just implemented. Animaker gave me three months inside a frontend-only render pipeline
            — no backend to hide behind — and it changed how I think about API design. The shape of
            what you send over the wire determines what the browser can actually render. At Growfin I
            have had to hold the full stack at once, from schema to button, and I am still learning
            how to see the whole system before touching one part of it.
          </p>
          <p>
            I like the messy middle where engineering and product overlap. The best work I have done
            came from understanding the problem first, then picking the boring tool that fit it. I am
            not the person who wants to rewrite everything in the newest framework. I am the one who
            wants to know why the current thing is slow before deciding what replaces it.
          </p>
          <p>
            I also like being wrong in small ways early, because it usually means I stopped being
            wrong about something big later.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
