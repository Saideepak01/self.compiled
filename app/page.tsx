import { BentoIntro } from "@/components/sections/bento-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";

export default function Home() {
  return (
    <>
      <Hero />
      <BentoIntro />
      <TechStack />
      <CtaBand />
    </>
  );
}
