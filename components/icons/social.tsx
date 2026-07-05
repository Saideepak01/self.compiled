import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function GitHubIcon({ className }: { className?: string }) {
  return <FaGithub className={className} aria-label="GitHub" role="img" />;
}

export function LinkedInIcon({ className }: { className?: string }) {
  return <FaLinkedin className={className} aria-label="LinkedIn" role="img" />;
}

export function TwitterIcon({ className }: { className?: string }) {
  return <FaXTwitter className={className} aria-label="X / Twitter" role="img" />;
}
