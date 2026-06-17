import { Tag, Title } from "../components/Typography";
import { Left } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { PageMotion } from "../components/PageMotion";
import { Reveal } from "../components/Reveal";

export function Slide09RatingReview({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="Rating & Review Management — 09 / 14" />
      <Left compact>
        <PageMotion active={active}>
          <Reveal>
            <Tag>Rating & Review Management</Tag>
          </Reveal>
          <Reveal>
            <Title>
              Rating yang menjual,{" "}
              <span className="text-[#8b0f63]">review yang meyakinkan.</span>
            </Title>
          </Reveal>
          <Reveal>
            <p className="mb-4 text-[13px] leading-[1.65] text-[#5a5a72]">
              Rating dan ulasan dari real buyers — sinyal pertama yang dilihat
              calon pembeli sebelum memutuskan checkout.
            </p>
          </Reveal>

          <Reveal className="mb-3 grid grid-cols-3 gap-2.5">
            {[
              ["4.7+", "Rating Target"],
              ["3.2×", "Conversion Naik"],
              ["2 Mgg", "Waktu Recovery"],
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
                  "Rating bintang 4–5 oleh real buyers",
                  "Review tertulis variatif & organik",
                  "Distribusi bertahap sesuai algoritma",
                  "Q&A halaman produk dijawab aktif",
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
                Platform
              </div>
              <div className="h-px bg-[#e2e2e8] mb-2.5" />
              <ul className="space-y-1.5 text-[12px] text-[#0f0f14]">
                {[
                  "Shopee & Tokopedia",
                  "Google Play & App Store",
                  "Google Maps & Google Review",
                  "GoFood & GrabFood",
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
                  "Produk baru yang belum punya rating",
                  "Rating turun akibat krisis",
                  "Aplikasi baru yang butuh review awal",
                  "Bisnis lokal yang butuh reputasi Google",
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
                "Produk skincare dengan rating 3.1 akibat serangan negatif —
                dalam 14 hari kembali ke 4.7 dengan review real buyers. Algoritma
                Shopee kembali merekomendasikan di halaman pertama, conversion
                melonjak."
              </p>
            </div>
          </Reveal>
        </PageMotion>
      </Left>
    </SlideShell>
  );
}
