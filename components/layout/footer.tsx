"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/icons/social";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { href: "https://github.com/Saideepak01", icon: GitHubIcon, label: "GitHub" },
  { href: "https://www.linkedin.com/in/saideepak01/", icon: LinkedInIcon, label: "LinkedIn" },
  { href: "https://x.com/saideepak2001", icon: TwitterIcon, label: "X / Twitter" },
  { href: "mailto:pvsai609@gmail.com", icon: Mail, label: "Email" },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50 py-12">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="space-y-2">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-80"
            >
              Saideepak
            </Link>
            <p className="text-sm text-muted-foreground">Full-stack engineer.</p>
          </div>

          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© {year} Saideepak.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  aria-label={link.label}
                >
                  <Icon className="size-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
