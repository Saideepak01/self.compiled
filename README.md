# Saideepak Portfolio

My personal portfolio. Built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion. Focused on clean design, solid performance, and accessible markup.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Primitives:** Radix UI + custom shadcn-compatible components
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)
- **Themes:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production (static export)
pnpm build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/                  # Next.js App Router pages
components/
  content/            # Data-driven cards and content blocks
  icons/              # Custom SVG icons (social brands)
  layout/             # Navbar, footer, theme toggle
  motion/             # Reusable animation primitives
  providers/          # Theme and smooth-scroll providers
  sections/           # Page section compositions
  ui/                 # Base UI primitives
content/              # MDX blog posts (future)
lib/                  # Data, utilities, animation variants
public/               # Static assets
types/                # TypeScript types
```

## Features

- Dark / light / system theme switching
- Smooth scroll with reduced-motion fallback
- Animated hero, bento grids, project cards, and skill bars
- Fully responsive layout (320px → ultra-wide)
- WCAG 2.2 AA accessible (100 Lighthouse accessibility score)
- SEO metadata, Open Graph, Twitter cards, sitemap, robots.txt
- Static export ready for any host

## Content Editing

All portfolio content lives in `lib/data.ts` — bio, experience, skills, and other copy.

## Deployment

The project is configured for static export (`output: "export"`). Run `pnpm build` and deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

## License

Private — for personal use only.
