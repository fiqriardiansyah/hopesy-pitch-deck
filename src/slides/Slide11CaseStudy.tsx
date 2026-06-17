import { cx } from "../lib/utils";
import { Tag } from "../components/Typography";
import { Left } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { PageMotion } from "../components/PageMotion";
import { Reveal } from "../components/Reveal";
import { CountUp } from "../components/CountUp";
import { ScoreBlock } from "../components/ScoreBlock";

export function Slide11CaseStudy({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="Bukti Nyata — 12 / 15" />
      <Left compact>
        <PageMotion active={active}>
          <Reveal className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <Tag>Traction & Case Study</Tag>
            <div className="flex flex-wrap gap-2">
              {["500K+ Users", "100+ Brand", "100% Trending Rate"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e2e2e8] bg-white px-3.5 py-1 text-[11px] font-bold text-[#8b0f63]"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </Reveal>
          <Reveal className="mb-3 overflow-hidden rounded-[14px] border border-[#e2e2e8] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08),0_8px_28px_rgba(0,0,0,0.08)]">
            <div className="relative flex items-center justify-between overflow-hidden bg-[#0f0f14] px-5 py-3.5">
              <div className="absolute right-[-40px] top-[-40px] h-[140px] w-[140px] rounded-full bg-[#8b0f6340]" />
              <div className="relative">
                <span className="mb-1.5 inline-block rounded-full bg-[#8b0f6333] px-2.5 py-0.5 text-[10px] font-bold text-[#f48fb1]">
                  Crisis Recovery · 5 Minggu
                </span>
                <div className="font-['Clash_Display'] text-sm font-bold text-white">
                  Brand Skincare Lokal — Dari Krisis Viral ke Pemimpin Kategori
                </div>
                <div className="mt-0.5 text-[11px] text-white/40">
                  TikTok · Shopee · Twitter
                </div>
              </div>
              <div className="relative z-10 hidden shrink-0 gap-5 sm:flex">
                <div className="text-center">
                  <div className="font-['Clash_Display'] text-[1.4rem] font-bold text-[#4ade80]">
                    +<CountUp active={active} end={312} suffix="%" />
                  </div>
                  <div className="text-[10px] text-white/40">Sales Recovery</div>
                </div>
                <div className="text-center">
                  <div className="font-['Clash_Display'] text-[1.4rem] font-bold text-[#f48fb1]">
                    <CountUp active={active} end={5} suffix=" Mgg" />
                  </div>
                  <div className="text-[10px] text-white/40">Durasi</div>
                </div>
              </div>
            </div>
            <div className="grid items-center gap-0 px-5 py-4 md:grid-cols-[1fr_60px_1fr]">
              <ScoreBlock
                active={active}
                tone="red"
                title="Sebelum"
                score="18"
                values={[22, 15, 18, 12]}
              />
              <div className="my-3 text-center md:my-0">
                <div className="text-xl text-[#8b0f63]">→</div>
                <div className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.4px] text-[#8b0f63]">
                  5 Mgg
                </div>
              </div>
              <ScoreBlock
                active={active}
                tone="green"
                title="Setelah"
                score="79"
                values={[85, 78, 72, 80]}
              />
            </div>
          </Reveal>
          <div className="grid gap-2.5 md:grid-cols-3">
            {[
              [
                "+2.8x Conversion Rate",
                "Rating kami naik 3.8 → 4.7 dalam 3 minggu. Conversion rate naik 2.8x tanpa tambah budget.",
                "RP",
                "R. Pratama",
                "Brand Manager · Skincare",
                "bg-[#8b0f63]",
              ],
              [
                "TikTok 0 → 400+ Video",
                "TikTok search dari kosong jadi ratusan video organik dalam sebulan. Orang search nama kami, langsung percaya.",
                "DK",
                "D. Kusuma",
                "Digital Marketing · Fashion",
                "bg-[#3730a3]",
              ],
              [
                "Launch Day #1 Trending",
                "Hari pertama terasa seperti brand yang sudah 3 tahun ada. Trending hari yang sama, rating 4.6, komentar ratusan.",
                "BS",
                "B. Santoso",
                "CEO · F&B",
                "bg-[#16a34a]",
              ],
            ].map(([result, quote, initials, name, role, color], index) => (
              <Reveal
                key={name}
                className={cx(
                  "rounded-[14px] border bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]",
                  index === 0
                    ? "border-[#8b0f63] ring-2 ring-[#8b0f6314]"
                    : "border-[#e2e2e8]",
                )}
              >
                <div className="mb-2 inline-block rounded-full border border-[#16a34a33] bg-[#16a34a1a] px-2.5 py-0.5 text-[10px] font-bold text-[#15803d]">
                  {result}
                </div>
                <div className="mb-2.5 text-xs leading-[1.65] text-[#0f0f14]">
                  {quote}
                </div>
                <div className="mb-2.5 h-px bg-[#e2e2e8]" />
                <div className="flex items-center gap-2">
                  <div
                    className={cx(
                      'flex h-8 w-8 items-center justify-center rounded-full font-["Clash_Display"] text-[11px] font-bold text-white',
                      color,
                    )}
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0f0f14]">
                      {name}
                    </div>
                    <div className="text-[10px] text-[#5a5a72]">{role}</div>
                    <div className="text-[10px] text-[#fbbf24]">★★★★★</div>
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
