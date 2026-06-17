import { logos } from "../data";
import { Tag, Title } from "../components/Typography";
import { Center } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { PageMotion } from "../components/PageMotion";
import { Reveal } from "../components/Reveal";

export function Slide13Clients({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="Klien — 14 / 15" />
      <Center>
        <PageMotion active={active}>
          <Reveal>
            <Tag tone="neutral">Brand yang Sudah Bergabung</Tag>
          </Reveal>
          <Reveal>
            <Title>
              Dipercaya oleh{" "}
              <span className="text-[#8b0f63]">brand-brand terbaik</span>{" "}
              Indonesia.
            </Title>
          </Reveal>
          <div className="mx-auto mt-5 grid w-full max-w-[960px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo) => (
              <Reveal
                key={logo.name}
                className="flex h-[60px] items-center justify-center rounded-xl border border-[#e2e2e8] bg-white px-4 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-9 grayscale-100 hover:grayscale-0 max-w-full object-contain"
                  loading="lazy"
                />
              </Reveal>
            ))}
          </div>
        </PageMotion>
      </Center>
    </SlideShell>
  );
}
