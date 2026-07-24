import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
  priority?: boolean;
};

export function Logo({
  size = 40,
  className = "",
  showWordmark = false,
  wordmarkClassName = "",
  priority = false,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className="relative shrink-0 overflow-hidden rounded-[22%]"
        style={{ width: size, height: size }}
      >
        <span className="absolute inset-0 rounded-[22%] bg-gradient-to-br from-teal-400/25 to-sky-400/25 blur-md" />
        <Image
          src="/brand/microlink-logo.png"
          alt="Microlink Solutions"
          width={size * 2}
          height={size * 2}
          priority={priority}
          className="relative h-full w-full object-contain drop-shadow-[0_8px_20px_rgba(2,132,199,0.28)]"
        />
      </span>
      {showWordmark ? (
        <span
          className={`font-[family-name:var(--font-display)] font-bold tracking-[-0.045em] text-[var(--ink)] ${wordmarkClassName}`}
        >
          Microlink
          <span className="font-semibold text-slate-500"> Solutions</span>
        </span>
      ) : null}
    </span>
  );
}
