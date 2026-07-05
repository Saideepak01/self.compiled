import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { SpotlightProvider } from "@/components/providers/spotlight-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saideepak.dev"),
  title: {
    default: "Saideepak — Full-Stack Engineer",
    template: "%s | Saideepak",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  description:
    "Full-stack engineer working across React, TypeScript, Spring Boot, and Python for LLM-backed features. I care about code that is easy to change and interfaces that do not make users think.",
  keywords: [
    "Full-Stack Engineer",
    "Staff Engineer",
    "Product Engineer",
    "Design Systems",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Accessibility",
    "Web Performance",
  ],
  authors: [{ name: "Saideepak" }],
  creator: "Saideepak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saideepak.dev",
    siteName: "Saideepak",
    title: "Saideepak — Full-Stack Engineer",
    description:
      "Full-stack engineer working across React, TypeScript, Spring Boot, and Python for LLM-backed features. I care about code that is easy to change and interfaces that do not make users think.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Saideepak portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saideepak — Full-Stack Engineer",
    description:
      "Full-stack engineer working across React, TypeScript, Spring Boot, and Python for LLM-backed features. I care about code that is easy to change and interfaces that do not make users think.",
    images: ["/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://saideepak.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${bricolage.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScrollProvider>
            <SpotlightProvider>
              <div className="noise-overlay" aria-hidden="true" />
              <ScrollProgress />
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
              >
                Skip to main content
              </a>
              <Navbar />
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Footer />
              <Toaster position="bottom-right" />
            </SpotlightProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
