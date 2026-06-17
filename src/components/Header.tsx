import { cx } from "../lib/utils";

export function Header({ label }: { label: string }) {
  return (
    <header className="z-10 flex shrink-0 items-center justify-between border-b border-[#e2e2e8] bg-white px-5 py-3 sm:px-8 lg:px-[52px]">
      <span className="text-sm font-extrabold tracking-[-0.2px] text-[#8b0f63]">
        Hopesy
      </span>
      <span
        className={cx(
          "text-[11px] font-semibold tracking-[0.4px] text-[#5a5a72]",
          label.includes("Pitch") &&
            "rounded-full border border-[#8b0f6333] bg-[#f8e6f2] px-3.5 py-1 font-bold uppercase tracking-[0.6px] text-[#8b0f63]",
        )}
      >
        {label}
      </span>
    </header>
  );
}
