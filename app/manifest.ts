import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saideepak — Full-Stack Engineer",
    short_name: "Saideepak",
    description:
      "Portfolio of Saideepak, a full-stack engineer working across React, TypeScript, Spring Boot, and Python.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#5558e3",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
