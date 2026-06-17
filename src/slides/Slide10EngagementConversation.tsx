import { Tag, Title } from "../components/Typography";
import { Left } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { PageMotion } from "../components/PageMotion";
import { Reveal } from "../components/Reveal";

export function Slide10EngagementConversation({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="Engagement, Conversation & Amplification — 10 / 15" />
      <Left compact>
        <PageMotion active={active}>
          <Reveal>
            <Tag>Engagement, Conversation & Amplification</Tag>
          </Reveal>
          <Reveal>
            <Title>
              Bikin brand terlihat{" "}
              <span className="text-[#8b0f63]">ramai, dibicarakan, & viral.</span>
            </Title>
          </Reveal>
          <Reveal>
            <p className="mb-4 text-[13px] leading-[1.65] text-[#5a5a72]">
              Dari komentar yang menghidupkan iklan, sampai trending nasional dan
              broadcast ke ribuan grup — semua menciptakan sinyal &ldquo;ramai = aman&rdquo;.
            </p>
          </Reveal>

          <Reveal className="mb-3 grid grid-cols-3 gap-2.5">
            {[
              ["1K+", "Komentar per Campaign"],
              ["100%", "Twitter Trending Rate"],
              ["10K+", "Grup WA/TG Dijangkau"],
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
                  "Komentar positif di iklan Meta & TikTok",
                  "Q&A & percakapan X/Threads",
                  "Twitter/X Trending Nasional",
                  "WA & Telegram Broadcast 10K+ grup",
                  "Seeding WA Community & dark social",
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
                  "500–2.000 komentar organik",
                  "Trending Nasional + screenshot bukti",
                  "Jangkauan 10K+ grup WA & Telegram",
                  "Sentiment & reach report mingguan",
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
                  "Iklan yang sepi komentar",
                  "Product launch yang butuh momen viral",
                  "Campaign promo & flash sale",
                  "Respons krisis — balik narasi cepat",
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
                &ldquo;Brand F&amp;B launching produk baru — iklan yang tadinya sepi kini
                ramai diskusi, dibarengi trending Twitter di hari launch &amp; WA
                Broadcast ke komunitas relevan. Engagement naik 4&times; dan brand
                langsung terasa &lsquo;lagi dibicarakan&rsquo;.&rdquo;
              </p>
            </div>
          </Reveal>
        </PageMotion>
      </Left>
    </SlideShell>
  );
}
