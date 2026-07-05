import type { Experience, TechItem } from "@/types";

export const personalInfo = {
  name: "Saideepak",
  role: "Full-Stack Engineer",
  tagline:
    "My stack chose me: Spring Boot on the backend, React on the UI, and Python whenever an LLM needs supervision. I care more about the spell that works than the one that looks impressive.",
  location: "Chennai, Tamil Nadu",
  email: "pvsai609@gmail.com",
  siteUrl: "https://saideepak.dev",
  availability: "Open to full-stack and product engineering roles",
};

export const stats = [
  { label: "Years of experience", value: "4+" },
  { label: "Products shipped", value: "3" },
  { label: "Monthly active users", value: "50K+" },
  { label: "Reduction in data ops", value: "~60%" },
];

export const philosophy = [
  {
    title: "End-to-end ownership",
    description:
      "I like owning a feature from the schema to the button. It means I cannot blame the backend when the UI is slow, and I cannot blame the frontend when the API shape is awkward.",
  },
  {
    title: "Ship with reliability",
    description:
      "AI features are useless if people double-check every result. I spend time on validation and fallbacks so users can actually trust the output.",
  },
  {
    title: "Build for scale",
    description:
      "Bad architecture shows up six months later as a three-hour deploy. I try to keep boundaries clear enough that one team's change does not need a company-wide sync.",
  },
];

export const techStack: TechItem[] = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "RabbitMQ", category: "Messaging" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "OpenAI", category: "AI" },
  { name: "Claude", category: "AI" },
  { name: "FastAPI", category: "Backend" },
];

export const experience: Experience[] = [
  {
    id: "1",
    role: "Senior Software Engineer",
    company: "Growfin.ai",
    location: "Chennai, TN",
    startDate: "2024-01-01",
    endDate: null,
    current: true,
    description: "",
    achievements: [
      "At Growfin I own features end to end: Spring Boot APIs, Node services, React interfaces. A schema decision on Monday often becomes a UI refactor by Thursday, so I have learned to look at the whole system before changing one part.",
    ],
    tech: ["React", "TypeScript", "Spring Boot", "Node.js", "Python", "Java", "MySQL", "Module Federation", "npm", "pnpm", "OpenAI", "Claude", "AWS"],
  },
  {
    id: "2",
    role: "React.js Developer",
    company: "Animaker",
    location: "Chennai, TN",
    startDate: "2023-09-01",
    endDate: "2023-12-31",
    current: false,
    description: "",
    achievements: [
      "Three months inside V-Maker’s render pipeline, the most frontend-only work I have done. No backend to hide behind. It changed how I think about API design — the shape of what you send over the wire determines what the browser can actually render.",
    ],
    tech: ["React", "JavaScript", "Node.js", "npm"],
  },
  {
    id: "3",
    role: "Associate Software Engineer",
    company: "Kissflow",
    location: "Chennai, TN",
    startDate: "2022-03-01",
    endDate: "2023-09-30",
    current: false,
    description: "",
    achievements: [
      "Kissflow is where I stopped thinking in layers and started thinking in systems. React frontends, Node services, five teams shipping to the same platform — architecture stops being a diagram and starts being a daily negotiation.",
    ],
    tech: ["React", "JavaScript", "Node.js", "Python", "Module Federation", "Docker", "MongoDB", "GCP"],
  },
];
