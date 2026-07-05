import { Hexagon } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 36 }: LogoProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 text-white ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Hexagon className="size-[60%]" strokeWidth={2.5} />
    </div>
  );
}
