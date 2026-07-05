"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("system");
    else setTheme("dark");
  };

  const icon = mounted ? (
    theme === "system" ? (
      <Laptop className="size-4" />
    ) : resolvedTheme === "dark" ? (
      <Moon className="size-4" />
    ) : (
      <Sun className="size-4" />
    )
  ) : (
    <Sun className="size-4" />
  );

  const label = mounted
    ? theme === "system"
      ? "System theme"
      : resolvedTheme === "dark"
        ? "Dark theme"
        : "Light theme"
    : "Theme";

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={cycleTheme}
            aria-label={`Current theme: ${label}. Click to cycle themes.`}
            suppressHydrationWarning
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{label} (click to cycle)</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
