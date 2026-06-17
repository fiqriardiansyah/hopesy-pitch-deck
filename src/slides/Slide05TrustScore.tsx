import { cx } from "../lib/utils";
import { researchStats, trustZones } from "../data";
import { Tag, Title } from "../components/Typography";
import { Left } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { PageMotion } from "../components/PageMotion";
import { Reveal } from "../components/Reveal";
import { CountUp } from "../components/CountUp";

export function Slide05TrustScore({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="Trust Score — 05 / 12" />
      <Left>
        <PageMotion active={active}>
          <Reveal>
            <Tag>Trust Score System</Tag>
          </Reveal>
          <Reveal>
            <Title>
              Kepercayaan yang{" "}
              <span className="text-[#8b0f63]">terukur,</span>
              <br />
              bukan sekadar terasa.
            </Title>
          </Reveal>
          <Reveal className="mb-7 grid gap-3 md:grid-cols-3">
            {researchStats.map(([num, title, copy, colors]) => (
              <div
                key={title}
                className={cx("rounded-2xl border p-5", colors)}
              >
                <div className="font-['Clash_Display'] text-[2.35rem] font-bold leading-none">
                  {num === "270%" && (
                    <CountUp active={active} end={270} suffix="%" />
                  )}
                  {num === "30-50%" && (
                    <>
                      <CountUp active={active} end={30} suffix="" />-
                      <CountUp active={active} end={50} suffix="%" />
                    </>
                  )}
                  {num === "70%" && (
                    <CountUp active={active} end={70} suffix="%" />
                  )}
                </div>
                <div className="mt-2 text-[13px] font-bold text-[#0f0f14]">
                  {title}
                </div>
                <div className="mt-1 text-[11px] leading-[1.6] text-[#5a5a72]">
                  {copy}
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[14px] bg-[#0f0f14] p-5">
              <div className="mb-2.5 text-[10px] uppercase tracking-[0.8px] text-white/35">
                Formula
              </div>
              <div className="font-mono text-[13px] leading-8 text-white/85">
                <span className="font-bold text-[#f48fb1]">TrustScore</span> =
                <br />
                <span className="text-[#81c784]">Volume</span> x{" "}
                <span className="text-[#ffb74d]">30%</span>
                <br />+ <span className="text-[#81c784]">Kualitas</span> x{" "}
                <span className="text-[#ffb74d]">30%</span>
                <br />+ <span className="text-[#81c784]">Sebaran</span> x{" "}
                <span className="text-[#ffb74d]">20%</span>
                <br />+ <span className="text-[#81c784]">Sentimen</span> x{" "}
                <span className="text-[#ffb74d]">20%</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              {trustZones.map(([range, name, desc, color, bar]) => (
                <div
                  key={range}
                  className="flex items-center gap-2.5 rounded-lg border border-[#e2e2e8] bg-white px-3 py-2"
                >
                  <span
                    className={cx(
                      "min-w-11 font-mono text-[10px] font-bold",
                      color,
                    )}
                  >
                    {range}
                  </span>
                  <div className={cx("h-[3px] shrink-0 rounded", bar)} />
                  <span className="flex-1 text-xs font-bold text-[#0f0f14]">
                    {name}
                  </span>
                  <span className="text-[11px] text-[#5a5a72]">{desc}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </PageMotion>
      </Left>
    </SlideShell>
  );
}
