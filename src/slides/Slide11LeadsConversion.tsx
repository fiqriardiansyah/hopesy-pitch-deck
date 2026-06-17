import { Tag, Title } from "../components/Typography";
import { Left } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { PageMotion } from "../components/PageMotion";
import { Reveal } from "../components/Reveal";

export function Slide11LeadsConversion({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="Leads Data & Conversion — 11 / 16" />
      <Left compact>
        <PageMotion active={active}>
          <Reveal>
            <Tag>Leads Data & Conversion</Tag>
          </Reveal>
          <Reveal>
            <Title>
              Dari kepercayaan ke{" "}
              <span className="text-[#8b0f63]">
                leads, dari leads ke konversi.
              </span>
            </Title>
          </Reveal>
          <Reveal>
            <p className="mb-4 text-[13px] leading-[1.65] text-[#5a5a72]">
              Mengubah jaringan 500K+ real users jadi leads opt-in terverifikasi
              — prospek yang benar-benar tertarik, siap dikonversi.
            </p>
          </Reveal>

          <Reveal className="mb-3 grid grid-cols-3 gap-2.5">
            {[
              ["5K+", "Qualified Leads / Bulan"],
              ["35%", "Lead-to-Convert"],
              ["Real", "Opt-in First-Party Data"],
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
                  "Lead gen dari jaringan 500K+ users",
                  "Database tersegmentasi per vertikal",
                  "Survey intent — filter pembeli serius",
                  "Opt-in form & interest capture",
                  "Nurturing funnel sampai konversi",
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
                  "1.000–5.000+ qualified leads",
                  "Data: kontak, minat, segmen, intent",
                  "Lead scoring & prioritas follow-up",
                  "Conversion funnel report mingguan",
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
                  "Fintech & banking yang butuh akuisisi",
                  "Produk bagus tapi kurang prospek",
                  "Agency yang butuh leads untuk klien",
                  "Campaign fokus konversi, bukan awareness",
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
                "Brand fintech butuh pengguna aktif baru — lewat survey intent &
                opt-in campaign ke segmen relevan, terkumpul 4.200 leads opt-in
                terverifikasi dalam 3 minggu, dengan konversi ke registrasi
                aktif 38% oleh pengguna yang benar-benar tertarik."
              </p>
            </div>
          </Reveal>
        </PageMotion>
      </Left>
    </SlideShell>
  );
}
