"use client";

import { techIconMap } from "@/lib/tech-icon-map";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TechIcons({ tech }: { tech: string[] }) {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="mt-7 flex items-center gap-3">
        {tech.map((name) => {
          const entry = techIconMap[name];
          return (
            <Tooltip key={name}>
              <TooltipTrigger asChild>
                <span
                  style={entry ? { color: entry.color } : undefined}
                  className="cursor-default opacity-90 transition-opacity duration-200 hover:opacity-100"
                >
                  {entry ? (
                    <entry.Icon className="size-5" />
                  ) : (
                    <span className="font-mono text-[10px] text-muted-foreground">{name}</span>
                  )}
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p className="text-xs">{name}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
