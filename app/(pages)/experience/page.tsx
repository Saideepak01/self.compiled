import { SectionTitle } from "@/components/content/section-title";
import { TechIcons } from "@/components/content/tech-icons";
import { FadeIn } from "@/components/motion/fade-in";
import { experience } from "@/lib/data";

export const metadata = {
  title: "Experience",
  description:
    "Saideepak's career — full-stack engineer with 4+ years shipping enterprise SaaS at Growfin, Kissflow, and Animaker.",
};

const fmtDate = (d: string) =>
  new Date(d + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

function HighlightedText({ text }: { text: string }) {
  const parts = text.split(/(~?\d+[%+K]*|\d{1,3},\d{3}\+?)/g);
  return (
    <>
      {parts.map((part, i) =>
        /~?\d+[%+K]*|\d{1,3},\d{3}\+?/.test(part) ? (
          <span key={i} className="font-medium text-foreground">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

export default function ExperiencePage() {
  return (
    <div className="section">
      <div className="container-tight">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've worked"
          description="Places I have worked and what I actually took away from them."
        />

        <div className="mt-20">
          {experience.map((job, index) => (
            <FadeIn key={job.id} delay={index * 0.1}>
              <div
                className={`group py-14 md:py-16 ${index !== 0 ? "border-t border-border/20" : ""}`}
              >
                {/* Chapter number */}
                <p className="mb-3 font-mono text-xs tracking-widest text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>

                {/* Giant company name — typographic hero */}
                <h2
                  className="mb-5 select-none font-display text-7xl font-bold leading-none tracking-tighter text-foreground/[0.06] transition-colors duration-500 group-hover:text-foreground/[0.13] md:text-[7.5rem]"
                  aria-hidden="true"
                >
                  {job.company.toUpperCase()}
                </h2>

                {/* Role + date row */}
                <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-base font-semibold md:text-lg">{job.role}</h3>
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                        Now
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {fmtDate(job.startDate)} —{" "}
                    {job.current ? "Present" : fmtDate(job.endDate!)}
                  </span>
                </div>

                {/* Location */}
                <p className="mb-7 text-xs text-muted-foreground/50">{job.location}</p>

                {/* Achievement prose */}
                <div className="max-w-2xl space-y-3">
                  {job.achievements.map((achievement, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                      <HighlightedText text={achievement} />
                    </p>
                  ))}
                </div>

                {/* Tech icons */}
                <TechIcons tech={job.tech} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
