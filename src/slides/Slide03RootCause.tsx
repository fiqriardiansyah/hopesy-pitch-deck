import { cx } from "../lib/utils";
import { Tag } from "../components/Typography";
import { Center } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { PageMotion } from "../components/PageMotion";
import { Reveal } from "../components/Reveal";

export function Slide03RootCause({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="Root Cause — 03 / 12" />
      <Center>
        <PageMotion active={active}>
          <Reveal>
            <Tag>Root Cause</Tag>
          </Reveal>
          <Reveal>
            <p className="mx-auto max-w-[640px] text-center font-['Clash_Display'] text-[clamp(1.4rem,2.6vw,2rem)] font-bold leading-[1.5] text-[#0f0f14]">
              Konsumen tidak butuh lebih banyak iklan.
              <br />
              Mereka butuh{" "}
              <span className="text-[#8b0f63]">
                bukti bahwa orang lain sudah percaya.
              </span>
            </p>
          </Reveal>
          <Reveal className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
            {[
              ["Yang ada", "Traffic tinggi", false],
              ["+", "", false],
              ["Yang hilang", "Trust rendah", true],
              ["=", "", false],
              ["Hasilnya", "Conversion buruk", false],
            ].map(([label, value, hi], index) =>
              value ? (
                <div
                  key={String(label)}
                  className={cx(
                    "rounded-xl border-2 px-6 py-4 text-center shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]",
                    hi
                      ? "border-[#8b0f634d] bg-[#f8e6f2]"
                      : "border-[#e2e2e8] bg-white",
                  )}
                >
                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.5px] text-[#5a5a72]">
                    {label}
                  </div>
                  <div
                    className={cx(
                      "font-['Clash_Display'] text-xl font-bold",
                      hi ? "text-[#8b0f63]" : "text-[#0f0f14]",
                    )}
                  >
                    {value}
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="text-2xl font-light text-[#c8c8d2]"
                >
                  {label}
                </div>
              ),
            )}
          </Reveal>
          <Reveal>
            <p className="mt-6 text-xs italic text-[#5a5a72]">
              Ini yang diselesaikan HOPESY.
            </p>
          </Reveal>
        </PageMotion>
      </Center>
    </SlideShell>
  );
}
