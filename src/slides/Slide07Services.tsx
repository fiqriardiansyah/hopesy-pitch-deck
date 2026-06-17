import { cx } from "../lib/utils";
import { services } from "../data";
import { Tag, Title } from "../components/Typography";
import { Left } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { PageMotion } from "../components/PageMotion";
import { Reveal } from "../components/Reveal";

export function Slide07Services({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="Layanan — 07 / 12" />
      <Left>
        <PageMotion active={active}>
          <Reveal>
            <Tag>5 Kategori Layanan</Tag>
          </Reveal>
          <Reveal>
            <Title>
              Semua yang dibutuhkan untuk
              <br />
              <span className="text-[#8b0f63]">membangun kepercayaan.</span>
            </Title>
          </Reveal>
          <div className="mt-5 grid gap-2 md:grid-cols-2">
            {services.map(([icon, title, copy, klass]) => (
              <Reveal
                key={title}
                className={cx(
                  "flex items-center gap-3 rounded-xl border border-[#e2e2e8] bg-white px-4 py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]",
                  klass.includes("col-span") && "md:col-span-2",
                )}
              >
                <div
                  className={cx(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] text-base",
                    klass.replace("md:col-span-2", ""),
                  )}
                >
                  {icon}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#0f0f14]">
                    {title}
                  </div>
                  <div className="text-[11px] text-[#5a5a72]">{copy}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </PageMotion>
      </Left>
    </SlideShell>
  );
}
