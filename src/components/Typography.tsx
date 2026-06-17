import { cx } from "../lib/utils";

export function Tag({
  children,
  tone = "primary",
}: {
  children: React.ReactNode;
  tone?: "primary" | "neutral" | "white";
}) {
  const tones = {
    primary: "border-[#8b0f6333] bg-[#f8e6f2] text-[#8b0f63]",
    neutral: "border-[#e2e2e8] bg-[#f5f5f7] text-[#5a5a72]",
    white: "border-white/25 bg-white/15 text-white/80",
  };

  return (
    <div
      className={cx(
        "mb-4 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.5px]",
        tones[tone],
      )}
    >
      {children}
    </div>
  );
}

export function Title({
  children,
  hero = false,
  white = false,
}: {
  children: React.ReactNode;
  hero?: boolean;
  white?: boolean;
}) {
  return (
    <h1
      className={cx(
        "font-['Clash_Display','Cabinet_Grotesk',system-ui,sans-serif] font-bold leading-[1.08] tracking-[-0.3px]",
        hero
          ? "mb-4 text-[clamp(2.2rem,4.2vw,3.8rem)]"
          : "mb-3 text-[clamp(1.7rem,2.8vw,2.4rem)]",
        white ? "text-white" : "text-[#0f0f14]",
      )}
    >
      {children}
    </h1>
  );
}

export function Body({
  children,
  className,
  white = false,
}: {
  children: React.ReactNode;
  className?: string;
  white?: boolean;
}) {
  return (
    <p
      className={cx(
        "text-[13px] font-medium leading-[1.75]",
        white ? "text-white/75" : "text-[#5a5a72]",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Accent() {
  return (
    <span className="mx-auto mb-5 block h-[3px] w-9 rounded bg-[#8b0f63]" />
  );
}
