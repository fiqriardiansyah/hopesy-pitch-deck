import { cx } from "../lib/utils";
import { brand, dark } from "../data";
import { CountUp } from "./CountUp";

export function ScoreBlock({
  active,
  tone,
  title,
  score,
  values,
}: {
  active: boolean;
  tone: "red" | "green";
  title: string;
  score: string;
  values: number[];
}) {
  const palette =
    tone === "red"
      ? ["#dc2626", "#ef4444", "#f87171", "#fca5a5"]
      : ["#16a34a", "#22c55e", "#4ade80", "#86efac"];

  return (
    <div>
      <div className="mb-2 flex items-center gap-1.5">
        <div
          className={cx(
            "h-[7px] w-[7px] rounded-full",
            tone === "red" ? "bg-[#dc2626]" : "bg-[#16a34a]",
          )}
        />
        <div
          className={cx(
            "text-[10px] font-bold uppercase tracking-[0.5px]",
            tone === "red" ? "text-[#dc2626]" : "text-[#16a34a]",
          )}
        >
          {title}
        </div>
      </div>
      <div
        className={cx(
          "mb-2.5 font-['Clash_Display'] text-[2.4rem] font-bold leading-none",
          tone === "red" ? "text-[#dc2626]" : "text-[#16a34a]",
        )}
      >
        <CountUp active={active} end={Number(score)} />
        <span className="text-sm font-normal text-[#5a5a72]">/100</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {["Volume", "Kualitas", "Sebaran", "Sentimen"].map((label, index) => (
          <div key={label}>
            <div className="mb-1 flex justify-between text-[10px] text-[#5a5a72]">
              <span>{label}</span>
              <span className="font-bold text-[#0f0f14]">
                <CountUp active={active} end={values[index]} />
              </span>
            </div>
            <div className="h-[3px] overflow-hidden rounded bg-[#e2e2e8]">
              <div
                className={cx(
                  "h-full rounded",
                  [
                    "w-[22%]",
                    "w-[15%]",
                    "w-[18%]",
                    "w-[12%]",
                    "w-[85%]",
                    "w-[78%]",
                    "w-[72%]",
                    "w-[80%]",
                  ][tone === "red" ? index : index + 4],
                  palette[index] === brand && "bg-[#8b0f63]",
                  palette[index] === dark && "bg-[#0f0f14]",
                  tone === "red" && index === 0 && "bg-[#dc2626]",
                  tone === "red" && index === 1 && "bg-[#ef4444]",
                  tone === "red" && index === 2 && "bg-[#f87171]",
                  tone === "red" && index === 3 && "bg-[#fca5a5]",
                  tone === "green" && index === 0 && "bg-[#16a34a]",
                  tone === "green" && index === 1 && "bg-[#22c55e]",
                  tone === "green" && index === 2 && "bg-[#4ade80]",
                  tone === "green" && index === 3 && "bg-[#86efac]",
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
