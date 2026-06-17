import { SlideShell } from "../components/SlideShell";
import { PageMotion } from "../components/PageMotion";
import { Reveal } from "../components/Reveal";
import { Tag, Title, Body } from "../components/Typography";
import { CountUp } from "../components/CountUp";

export function Slide04Solution({ active }: { active: boolean }) {
  return (
    <SlideShell active={active} split>
      <main className="grid h-full flex-1 lg:grid-cols-2">
        <section className="relative flex flex-col justify-center overflow-hidden bg-[#8b0f63] px-5 py-8 sm:px-10 lg:px-[52px]">
          <div className="absolute right-[-80px] top-[-80px] h-60 w-60 rounded-full bg-white/10" />
          <PageMotion active={active} className="relative z-10">
            <Reveal>
              <Tag tone="white">Solusi</Tag>
            </Reveal>
            <Reveal>
              <Title white>
                HOPESY adalah infrastruktur kepercayaan brand.
              </Title>
            </Reveal>
            <Reveal>
              <Body white>
                Bukan agency konten. Bukan platform influencer. HOPESY
                membangun kepercayaan secara sistematis menggunakan jaringan
                real users terbesar di Indonesia.
              </Body>
            </Reveal>
            <Reveal className="mt-6 flex flex-wrap gap-5">
              {[
                [500, "K+", "Real Users"],
                [7, " Thn", "Operasional"],
                [100, "%", "Trending Rate"],
              ].map(([end, suffix, label]) => (
                <div key={String(label)}>
                  <div className="font-['Clash_Display'] text-[1.8rem] font-bold text-white">
                    <CountUp
                      active={active}
                      end={Number(end)}
                      suffix={String(suffix)}
                    />
                  </div>
                  <div className="text-[11px] text-white/50">{label}</div>
                </div>
              ))}
            </Reveal>
          </PageMotion>
        </section>
        <section className="flex flex-col justify-center border-l border-[#e2e2e8] bg-white px-5 py-8 sm:px-10 lg:px-[52px]">
          <PageMotion active={active}>
            <Reveal>
              <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.7px] text-[#5a5a72]">
                Tiga Keunggulan Utama
              </div>
            </Reveal>
            <div className="flex flex-col gap-3.5">
              {[
                [
                  "👥",
                  "Real, Bukan Artifisial",
                  "500.000+ manusia nyata dengan riwayat transaksi asli. Platform tidak bisa mendeteksi karena memang tidak ada yang perlu dideteksi.",
                ],
                [
                  "📊",
                  "Sistematis & Terkoordinasi",
                  "UGC, rating, komentar, dan trending berjalan dalam framework yang mengikuti urutan psikologis konsumen.",
                ],
                [
                  "🎯",
                  "Terukur dengan Trust Score",
                  "Satu-satunya di Indonesia yang mengukur kepercayaan sebagai indikator prediktif untuk conversion rate.",
                ],
              ].map(([icon, title, copy]) => (
                <Reveal key={title} className="flex items-start gap-3">
                  <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[#f8e6f2] text-[17px]">
                    {icon}
                  </div>
                  <div>
                    <div className="mb-1 text-[13px] font-bold text-[#0f0f14]">
                      {title}
                    </div>
                    <Body className="text-xs">{copy}</Body>
                  </div>
                </Reveal>
              ))}
            </div>
          </PageMotion>
        </section>
      </main>
    </SlideShell>
  );
}
