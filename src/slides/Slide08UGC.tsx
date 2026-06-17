import { Tag, Title } from "../components/Typography";
import { Left } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { PageMotion } from "../components/PageMotion";
import { Reveal } from "../components/Reveal";

export function Slide08UGC({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="Content, UGC & Influencer — 08 / 13" />
      <Left compact>
        <PageMotion active={active}>
          <Reveal>
            <Tag>Content, UGC & Influencer</Tag>
          </Reveal>
          <Reveal>
            <Title>
              Konten yang terasa nyata,{" "}
              <span className="text-[#8b0f63]">bukan iklan.</span>
            </Title>
          </Reveal>
          <Reveal>
            <p className="mb-4 text-[13px] leading-[1.65] text-[#5a5a72]">
              Memproduksi UGC dalam skala besar agar konsumen yang mencari brand
              Anda menemukan bukti — bukan halaman kosong.
            </p>
          </Reveal>

          <Reveal className="mb-3 grid grid-cols-3 gap-2.5">
            {[
              ["400+", "UGC per Campaign"],
              ["10×", "Organic Reach"],
              ["#1", "TikTok Search Result"],
            ].map(([stat, label]) => (
              <div
                key={label}
                className="rounded-xl border border-[#e2e2e8] bg-white py-4 text-center shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]"
              >
                <div className="font-['Clash_Display'] text-[1.6rem] font-bold leading-none text-[#8b0f63]">
                  {stat}
                </div>
                <div className="mt-1 text-[11px] text-[#5a5a72]">{label}</div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mb-3 grid gap-2.5 md:grid-cols-3">
            <div className="rounded-xl border border-[#e2e2e8] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]">
              <div className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.5px] text-[#8b0f63]">
                Aktivitas
              </div>
              <div className="h-px bg-[#e2e2e8] mb-2.5" />
              <ul className="space-y-1.5 text-[12px] text-[#0f0f14]">
                {[
                  "Video Clippers 15–60 detik",
                  "UGC Review real users terverifikasi",
                  "TikTok SEO Seeding keyword brand",
                  "Aktivasi Nano & Mikro KOC",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <span className="mt-0.5 text-[#8b0f63]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#e2e2e8] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]">
              <div className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.5px] text-[#8b0f63]">
                Deliverables
              </div>
              <div className="h-px bg-[#e2e2e8] mb-2.5" />
              <ul className="space-y-1.5 text-[12px] text-[#0f0f14]">
                {[
                  "50–500 video UGC per campaign",
                  "TikTok search penuh keyword brand",
                  "Konten organik yang terasa nyata",
                  "Weekly performance report",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <span className="mt-0.5 text-[#8b0f63]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#e2e2e8] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]">
              <div className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.5px] text-[#8b0f63]">
                Cocok Untuk
              </div>
              <div className="h-px bg-[#e2e2e8] mb-2.5" />
              <ul className="space-y-1.5 text-[12px] text-[#0f0f14]">
                {[
                  "Brand baru yang butuh konten awal",
                  "Produk butuh bukti visual nyata",
                  "Brand ingin dominasi TikTok search",
                  "Product launch & campaign musiman",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <span className="mt-0.5 text-[#8b0f63]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="flex items-start gap-3 rounded-xl border border-[#8b0f6326] bg-[#f8e6f2] px-4 py-3.5">
            <span className="mt-0.5 text-base">🎯</span>
            <div>
              <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.5px] text-[#8b0f63]">
                Dampak Nyata
              </div>
              <p className="text-[12px] italic leading-[1.65] text-[#0f0f14]">
                "Skincare baru launching — dalam 3 minggu, TikTok search dari 0
                jadi 400+ video organik. Konsumen yang search langsung menemukan
                bukti, bukan halaman kosong. Trust naik, conversion ikut naik."
              </p>
            </div>
          </Reveal>
        </PageMotion>
      </Left>
    </SlideShell>
  );
}
