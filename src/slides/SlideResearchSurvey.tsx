import { Tag, Title } from "../components/Typography";
import { Left } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { PageMotion } from "../components/PageMotion";
import { Reveal } from "../components/Reveal";

export function SlideResearchSurvey({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="Research, Survey & Offline" />
      <Left compact>
        <PageMotion active={active}>
          <Reveal>
            <Tag>Research, Survey & Offline</Tag>
          </Reveal>
          <Reveal>
            <Title>
              Data konsumen nyata{" "}
              <span className="text-[#8b0f63]">untuk keputusan bisnis.</span>
            </Title>
          </Reveal>
          <Reveal>
            <p className="mb-4 text-[13px] leading-[1.65] text-[#5a5a72]">
              Pendapat masyarakat yang jujur adalah bahan baku produk berkualitas
              — kami ubah suara konsumen nyata jadi data yang bisa
              ditindaklanjuti.
            </p>
          </Reveal>

          <Reveal className="mb-3 grid grid-cols-3 gap-2.5">
            {[
              ["500", "Trial Users Offline"],
              ["48 Jam", "Rapid Survey Result"],
              ["Real", "First-Hand Data"],
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
                  "Riset Pasar & Business Intelligence",
                  "Rapid Survey — 48 jam, 500+ responden",
                  "Trial produk offline lokasi strategis",
                  "Event activation — real users hadir fisik",
                  "Report & takedown akun palsu/negatif",
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
                  "Riset pasar + insight siap pakai",
                  "Survey report untuk strategi produk",
                  "100–500 tester = testimonial nyata",
                  "Data first-hand untuk keputusan marketing",
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
                  "Butuh data konsumen untuk keputusan",
                  "FMCG yang butuh trial sebelum retail",
                  "Produk F&B yang butuh first taster",
                  "Brand yang diserang akun palsu/negatif",
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
                "Brand minuman baru butuh validasi sebelum masuk Alfamart —
                riset pasar + trial offline di 5 titik Jakarta, 300 tester,
                sekaligus collect review & foto UGC. Jadi bahan keputusan
                produk sekaligus presentasi ke buyer retail dalam 1 minggu."
              </p>
            </div>
          </Reveal>
        </PageMotion>
      </Left>
    </SlideShell>
  );
}
