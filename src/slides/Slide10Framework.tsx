import { cx } from "../lib/utils";
import { frameworks } from "../data";
import { Tag } from "../components/Typography";
import { Left } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { PageMotion } from "../components/PageMotion";
import { Reveal } from "../components/Reveal";

export function Slide10Framework({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="Framework — 12 / 16" />
      <Left compact>
        <PageMotion active={active}>
          <Reveal className="mb-5 flex items-center justify-between gap-4">
            <Tag>4 Strategic Framework</Tag>
            <div className="text-[11px] text-[#5a5a72]">
              Pilih sesuai situasi brand Anda →
            </div>
          </Reveal>
          <div className="grid gap-2.5 lg:grid-cols-4">
            {frameworks.map((fw) => (
              <Reveal
                key={fw.title}
                className="flex flex-col overflow-hidden rounded-[14px] border border-[#e2e2e8] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]"
              >
                <div className={cx("px-4 py-3.5", fw.color.split(" ")[0])}>
                  <div className="mb-1 text-lg leading-none">{fw.icon}</div>
                  <div className="font-['Clash_Display'] text-[13px] font-bold leading-[1.3] text-white">
                    {fw.title}
                  </div>
                  <div className="mt-0.5 text-[10px] text-white/60">
                    {fw.time}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 p-3.5">
                  {fw.rows.map(([label, copy]) => (
                    <div
                      key={label}
                      className="rounded-lg bg-[#f5f5f7] px-3 py-2.5"
                    >
                      <div
                        className={cx(
                          "mb-1 text-[10px] font-bold uppercase tracking-[0.5px]",
                          fw.color.split(" ")[1],
                        )}
                      >
                        {label}
                      </div>
                      <div className="whitespace-pre-line text-[11px] leading-[1.6] text-[#5a5a72]">
                        {copy}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className={cx(
                    "flex items-center justify-between border-t border-[#8b0f631a] px-4 py-2.5",
                    fw.soft,
                  )}
                >
                  <div>
                    <div
                      className={cx(
                        "text-[9px] font-bold uppercase tracking-[0.5px]",
                        fw.color.split(" ")[1],
                      )}
                    >
                      {fw.metric[0]}
                    </div>
                    <div
                      className={cx(
                        "font-['Clash_Display'] text-[13px] font-bold",
                        fw.color.split(" ")[1],
                      )}
                    >
                      {fw.metric[1]}
                    </div>
                  </div>
                  <div
                    className={cx(
                      "text-[10px] font-semibold",
                      fw.color.split(" ")[1],
                    )}
                  >
                    {fw.metric[2]}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </PageMotion>
      </Left>
    </SlideShell>
  );
}
