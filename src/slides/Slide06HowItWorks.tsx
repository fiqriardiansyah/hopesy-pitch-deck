import { Tag, Title } from "../components/Typography";
import { Left } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { PageMotion } from "../components/PageMotion";
import { Reveal } from "../components/Reveal";

export function Slide06HowItWorks({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="Cara Kerja — 06 / 12" />
      <Left>
        <PageMotion active={active}>
          <Reveal>
            <Tag tone="neutral">Process</Tag>
          </Reveal>
          <Reveal>
            <Title>
              Dari konsultasi ke hasil,
              <br />
              <span className="text-[#8b0f63]">4 langkah saja.</span>
            </Title>
          </Reveal>
          <Reveal className="relative mt-7 grid gap-4 md:grid-cols-4">
            <div className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-[#e2e2e8] md:block" />
            {[
              [
                "01",
                "Konsultasi & Audit",
                "Audit Trust Score saat ini. Identifikasi gap dan platform paling kritikal untuk brand Anda.",
                "Gratis · 1-2 Hari",
              ],
              [
                "02",
                "Strategi & Proposal",
                "Framework dipilih sesuai situasi. Proposal dengan target Trust Score konkret dikirim 24 jam.",
                "24 Jam",
              ],
              [
                "03",
                "Network Activation",
                "500K+ real users digerakkan terkoordinasi. UGC, rating, komentar, trending, sesuai jadwal.",
                "Mulai Hari ke-3",
              ],
              [
                "04",
                "Report & Optimasi",
                "Weekly report dengan Trust Score terkini. Strategi disesuaikan kalau perlu optimasi lebih lanjut.",
                "Weekly Report",
              ],
            ].map(([num, title, copy, badge]) => (
              <div key={num} className="relative z-10 text-center">
                <div className="mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#e2e2e8] bg-white font-['Clash_Display'] text-base font-bold text-[#8b0f63] shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]">
                  {num}
                </div>
                <div className="mb-1 font-['Clash_Display'] text-[13px] font-bold text-[#0f0f14]">
                  {title}
                </div>
                <div className="text-[11px] leading-[1.6] text-[#5a5a72]">
                  {copy}
                </div>
                <span className="mt-2 inline-block rounded-full border border-[#8b0f6333] bg-[#f8e6f2] px-2.5 py-0.5 text-[10px] font-bold text-[#8b0f63]">
                  {badge}
                </span>
              </div>
            ))}
          </Reveal>
        </PageMotion>
      </Left>
    </SlideShell>
  );
}
