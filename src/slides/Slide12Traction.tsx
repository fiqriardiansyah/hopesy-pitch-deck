import { Tag, Title } from "../components/Typography";
import { Left } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { PageMotion } from "../components/PageMotion";
import { Reveal } from "../components/Reveal";
import { CountUp } from "../components/CountUp";

export function Slide12Traction({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="Traction — 13 / 15" />
      <Left>
        <PageMotion active={active}>
          <Reveal>
            <Tag tone="neutral">Numbers</Tag>
          </Reveal>
          <Reveal>
            <Title>
              <CountUp active={active} end={7} suffix=" tahun." />
              <br />
              <span className="text-[#8b0f63]">Hasilnya bicara sendiri.</span>
            </Title>
          </Reveal>
          <Reveal className="mb-5 grid gap-3 md:grid-cols-4">
            {[
              [500, "K+", "Real Users Aktif"],
              [7, "", "Tahun Operasional"],
              [100, "+", "Brand Dilayani"],
              [100, "%", "Twitter Trending Rate"],
            ].map(([end, suffix, label]) => (
              <div
                key={label}
                className="rounded-[14px] border border-[#e2e2e8] bg-white p-4 text-center shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]"
              >
                <div className="font-['Clash_Display'] text-[2.2rem] font-bold leading-none text-[#8b0f63]">
                  <CountUp
                    active={active}
                    end={Number(end)}
                    suffix={String(suffix)}
                  />
                </div>
                <div className="mt-1 text-xs text-[#5a5a72]">{label}</div>
              </div>
            ))}
          </Reveal>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              [
                "Disney+ · Allianz · DBS",
                "Brand-brand tier 1 & multinasional yang sudah mempercayakan aktivasi kepercayaannya ke HOPESY.",
              ],
              [
                "Tokopedia · XL · BCA",
                "Platform & fintech besar Indonesia yang butuh trust building untuk akuisisi pengguna baru.",
              ],
              [
                "Honda · Grab · Free Fire",
                "Dari otomotif sampai gaming, semua butuh kepercayaan yang dibangun secara nyata di komunitas.",
              ],
            ].map(([title, copy]) => (
              <Reveal
                key={title}
                className="rounded-[14px] border border-[#8b0f6326] bg-[#f8e6f2] p-5"
              >
                <div className="mb-1.5 font-['Clash_Display'] text-[1.35rem] font-bold text-[#8b0f63]">
                  {title}
                </div>
                <div className="text-xs leading-[1.6] text-[#5a5a72]">{copy}</div>
              </Reveal>
            ))}
          </div>
        </PageMotion>
      </Left>
    </SlideShell>
  );
}
