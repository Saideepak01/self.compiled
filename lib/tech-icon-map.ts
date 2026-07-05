import { AwsIcon } from "@/components/icons/aws";
import { ClaudeIcon } from "@/components/icons/claude";
import { ModuleFederationIcon } from "@/components/icons/module-federation";
import {
  SiDocker,
  SiFastapi,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNpm,
  SiOpenai,
  SiOpenjdk,
  SiPnpm,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";

type IconComponent = React.ComponentType<{ className?: string }>;

export const techIconMap: Record<string, { Icon: IconComponent; color: string }> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  "Spring Boot": { Icon: SiSpringboot, color: "#6DB33F" },
  Python: { Icon: SiPython, color: "#3776AB" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  Redis: { Icon: SiRedis, color: "#DC382D" },
  RabbitMQ: { Icon: SiRabbitmq, color: "#FF6600" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  FastAPI: { Icon: SiFastapi, color: "#009688" },
  "Module Federation": { Icon: ModuleFederationIcon, color: "#71BEDB" },
  npm: { Icon: SiNpm, color: "#CB3837" },
  pnpm: { Icon: SiPnpm, color: "#F69220" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  OpenAI: { Icon: SiOpenai, color: "currentColor" },
  Claude: { Icon: ClaudeIcon, color: "#D97757" },
  Java: { Icon: SiOpenjdk, color: "#F8981D" },
  AWS: { Icon: AwsIcon, color: "#FF9900" },
  GCP: { Icon: SiGooglecloud, color: "#4285F4" },
};
