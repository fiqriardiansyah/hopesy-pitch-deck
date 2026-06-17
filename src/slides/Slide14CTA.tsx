import { Accent, Tag, Title, Body } from "../components/Typography";
import { Center } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { PageMotion } from "../components/PageMotion";
import { Reveal } from "../components/Reveal";

export function Slide14CTA({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="15 / 15" />
      <Center>
        <PageMotion active={active}>
          <Reveal>
            <Accent />
          </Reveal>
          <Reveal>
            <Tag>Mulai Sekarang</Tag>
          </Reveal>
          <Reveal>
            <Title hero>
              Mari <span className="text-[#8b0f63]">ngobrol</span> dulu.
            </Title>
          </Reveal>
          <Reveal>
            <Body className="mx-auto max-w-[460px]">
              Tidak perlu langsung komitmen. Ceritakan situasi brand Anda,
              proposal detail dengan target Trust Score dikirim dalam 24 jam.
            </Body>
          </Reveal>
          <Reveal className="mt-6 flex flex-wrap justify-center gap-2.5">
            {[
              ["📞", "+62 858-9275-8224"],
              ["📩", "arman@hopesy.co.id"],
              ["⏱", "Respons 2-4 jam kerja"],
            ].map(([icon, item]) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-[#e2e2e8] bg-white px-5 py-2.5 text-xs font-semibold text-[#0f0f14] shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]"
              >
                <span className="text-sm">{icon}</span>
                <span>{item}</span>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <a
              href="https://wa.me/6285892758224?text=Halo%20HOPESY%2C%20saya%20ingin%20konsultasi"
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8b0f63] px-8 py-3 text-[13px] font-bold text-white no-underline shadow-[0_4px_16px_rgba(139,15,99,0.25)]"
            >
              <span>💬</span>
              Chat WhatsApp Sekarang
            </a>
          </Reveal>
          <Reveal>
            <p className="mt-5 text-[11px] italic text-[#5a5a72]">
              "People don't trust ads. People trust people." — HOPESY
            </p>
          </Reveal>
          <Reveal>
            <p className="mt-1 text-[11px] text-[#5a5a72]">
              PT HOPESY SUKSES MAKMUR · Sovereign Plaza, Jakarta Selatan 12430
            </p>
          </Reveal>
        </PageMotion>
      </Center>
    </SlideShell>
  );
}
