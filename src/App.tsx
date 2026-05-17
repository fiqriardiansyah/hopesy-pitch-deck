import { useCallback, useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import abcLogo from "./assets/brands/abc.png";
import ajaibLogo from "./assets/brands/ajaib.png";
import allianzLogo from "./assets/brands/allianz.png";
import bcaLogo from "./assets/brands/bca.png";
import bluLogo from "./assets/brands/blu.png";
import btnLogo from "./assets/brands/btn.png";
import digibankLogo from "./assets/brands/digibank.png";
import disneyLogo from "./assets/brands/disney.png";
import evalubeLogo from "./assets/brands/evalube.png";
import freefireLogo from "./assets/brands/freefire.png";
import grabLogo from "./assets/brands/grab.png";
import hondaLogo from "./assets/brands/honda.png";
import kratingdaengLogo from "./assets/brands/kratindaeng.png";
import tokocryptoLogo from "./assets/brands/tokocrypto.png";
import tokopediaLogo from "./assets/brands/tokopedia.png";
import uobLogo from "./assets/brands/uob.png";
import wondrLogo from "./assets/brands/wondr.png";
import xlLogo from "./assets/brands/xl.png";

const brand = "#8b0f63";
const dark = "#0f0f14";

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const slides = Array.from({ length: 12 }, (_, index) => index + 1);

const progressWidths = [
  "w-1/12",
  "w-2/12",
  "w-3/12",
  "w-4/12",
  "w-5/12",
  "w-6/12",
  "w-7/12",
  "w-8/12",
  "w-9/12",
  "w-10/12",
  "w-11/12",
  "w-full",
];

const revealGroup: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const revealItem: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function CountUp({
  active,
  end,
  suffix = "",
  decimals = 0,
  duration = 900,
}: {
  active: boolean;
  end: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, decimals, duration, end]);

  return (
    <>
      {(active ? value : 0).toLocaleString("en-US", {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      })}
      {suffix}
    </>
  );
}

function PageMotion({
  active,
  children,
  className,
}: {
  active: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      key={String(active)}
      variants={revealGroup}
      initial="hidden"
      animate={active ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={revealItem} className={className}>
      {children}
    </motion.div>
  );
}

function Header({ label }: { label: string }) {
  return (
    <header className="z-10 flex shrink-0 items-center justify-between border-b border-[#e2e2e8] bg-white px-5 py-3 sm:px-8 lg:px-[52px]">
      <span className="text-sm font-extrabold tracking-[-0.2px] text-[#8b0f63]">
        Hopesy
      </span>
      <span
        className={cx(
          "text-[11px] font-semibold tracking-[0.4px] text-[#5a5a72]",
          label.includes("Pitch") &&
            "rounded-full border border-[#8b0f6333] bg-[#f8e6f2] px-3.5 py-1 font-bold uppercase tracking-[0.6px] text-[#8b0f63]",
        )}
      >
        {label}
      </span>
    </header>
  );
}

function SlideShell({
  active,
  children,
  split = false,
}: {
  active: boolean;
  children: React.ReactNode;
  split?: boolean;
}) {
  return (
    <section
      className={cx(
        "absolute inset-0 flex flex-col bg-[#f5f5f7] transition-opacity duration-300",
        active
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
        split && "bg-white",
      )}
    >
      {children}
    </section>
  );
}

function Center({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center overflow-hidden px-5 pb-14 pt-7 text-center sm:px-8 lg:px-[52px]">
      <div className="mx-auto w-full max-w-[960px]">{children}</div>
    </main>
  );
}

function Left({
  children,
  compact = false,
}: {
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <main
      className={cx(
        "flex flex-1 flex-col justify-center overflow-hidden px-5 sm:px-8 lg:px-[52px]",
        compact ? "pb-6 pt-5" : "pb-11 pt-7",
      )}
    >
      <div className="mx-auto w-full max-w-[960px]">{children}</div>
    </main>
  );
}

function Tag({
  children,
  tone = "primary",
}: {
  children: React.ReactNode;
  tone?: "primary" | "neutral" | "white";
}) {
  const tones = {
    primary: "border-[#8b0f6333] bg-[#f8e6f2] text-[#8b0f63]",
    neutral: "border-[#e2e2e8] bg-[#f5f5f7] text-[#5a5a72]",
    white: "border-white/25 bg-white/15 text-white/80",
  };

  return (
    <div
      className={cx(
        "mb-4 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.5px]",
        tones[tone],
      )}
    >
      {children}
    </div>
  );
}

function Title({
  children,
  hero = false,
  white = false,
}: {
  children: React.ReactNode;
  hero?: boolean;
  white?: boolean;
}) {
  return (
    <h1
      className={cx(
        "font-['Clash_Display','Cabinet_Grotesk',system-ui,sans-serif] font-bold leading-[1.08] tracking-[-0.3px]",
        hero
          ? "mb-4 text-[clamp(2.2rem,4.2vw,3.8rem)]"
          : "mb-3 text-[clamp(1.7rem,2.8vw,2.4rem)]",
        white ? "text-white" : "text-[#0f0f14]",
      )}
    >
      {children}
    </h1>
  );
}

function Body({
  children,
  className,
  white = false,
}: {
  children: React.ReactNode;
  className?: string;
  white?: boolean;
}) {
  return (
    <p
      className={cx(
        "text-[13px] font-medium leading-[1.75]",
        white ? "text-white/75" : "text-[#5a5a72]",
        className,
      )}
    >
      {children}
    </p>
  );
}

function Accent() {
  return (
    <span className="mx-auto mb-5 block h-[3px] w-9 rounded bg-[#8b0f63]" />
  );
}

const coverStats = [
  { end: 500, suffix: "K+", label: "Real Users" },
  { end: 7, suffix: " Tahun", label: "Operasional" },
  { end: 100, suffix: "+", label: "Brand Dilayani" },
  { end: 20, suffix: "+", label: "Agency Partners" },
];

const problemCards = [
  {
    end: 67,
    suffix: "%",
    title: "Terpengaruh komentar",
    copy: "Keputusan beli dipengaruhi komentar orang lain. Kolom sepi = sinyal merah yang mematikan conversion.",
    icon: "📉",
  },
  {
    end: 40,
    suffix: "%+",
    title: "Cari produk di TikTok",
    copy: "Pencarian produk Gen Z dimulai di TikTok. Brand yang tidak ada di sana praktis tidak terlihat.",
    icon: "🔍",
  },
  {
    end: 3.2,
    suffix: "×",
    decimals: 1,
    title: "Conversion gap rating",
    copy: "Produk rating 4.5+ punya conversion 3.2× lebih tinggi dari rating 3.5 dengan budget iklan sama.",
    icon: "⭐",
  },
];

const services = [
  [
    "📹",
    "Content, UGC & Influencer",
    "Video Clippers · UGC Review · TikTok SEO · Nano KOC",
    "bg-[#f8e6f2]",
  ],
  [
    "⭐",
    "Rating & Review Management",
    "Shopee · Tokopedia · Google Play · App Store · GoFood",
    "bg-[#fefce8]",
  ],
  [
    "💬",
    "Engagement & Conversation",
    "Comment & Q&A · X/Threads · WhatsApp Community",
    "bg-[#eff6ff]",
  ],
  [
    "🔥",
    "Trending & Broadcast",
    "Twitter Trending Nasional · WA/TG Broadcast 10K+ grup",
    "bg-[#fff7ed]",
  ],
  [
    "🏪",
    "Research, Survey & Offline",
    "Rapid Survey · Trial Offline 100-500 orang · Event Activation · Report Akun",
    "bg-[#f0fdf4] md:col-span-2",
  ],
];

const frameworks = [
  {
    icon: "📅",
    title: "4 Minggu Standar",
    time: "28 Hari",
    color: "bg-[#8b0f63] text-[#8b0f63]",
    soft: "bg-[#f8e6f2]",
    rows: [
      [
        "Aktivitas Utama",
        "UGC · Rating · Komentar · TikTok SEO · Afiliasi Push",
      ],
      [
        "Qty & Channel",
        "200-500 UGC\n500-1.000 Comment\nTikTok · Shopee · Meta · WA",
      ],
      [
        "Cocok Untuk",
        "Brand existing yang conversion-nya stagnan. Iklan sudah jalan tapi trust belum terbangun.",
      ],
    ],
    metric: ["Trust Score", "+30-40 Poin", "28 hari →"],
  },
  {
    icon: "🛡️",
    title: "72 Jam Crisis",
    time: "3 Hari",
    color: "bg-[#dc2626] text-[#dc2626]",
    soft: "bg-[#fff5f5]",
    rows: [
      [
        "Aktivitas Utama",
        "Audit Negatif · Counter Flood · UGC Testimonial · Monitoring 24 Jam",
      ],
      [
        "Qty & Channel",
        "2.000+ Comment\n500+ Report · 100+ UGC\nTwitter · TikTok · WA · Meta",
      ],
      [
        "Cocok Untuk",
        "Brand yang kena viral negatif, serangan review terkoordinasi, atau isu reputasi mendadak.",
      ],
    ],
    metric: ["Sentimen Target", "3:1 / 24 Jam", "Respons 6 jam →"],
  },
  {
    icon: "📈",
    title: "3 Bulan Brand Building",
    time: "90 Hari",
    color: "bg-[#2563eb] text-[#2563eb]",
    soft: "bg-[#eff6ff]",
    rows: [
      [
        "3 Fase",
        "Bulan 1: Presence (TS 45-55)\nBulan 2: Authority (TS 60-70)\nBulan 3: Conversion (TS 75-85)",
      ],
      [
        "Qty & Channel",
        "500-1.000 UGC total\n1 Trending · 10K+ WA Broadcast\nTikTok · Shopee · Twitter · WA",
      ],
      [
        "Cocok Untuk",
        "Brand baru launching, rebranding, atau produk baru di kategori yang kompetitif.",
      ],
    ],
    metric: ["Trust Score Akhir", "75-85+", "90 hari →"],
  },
  {
    icon: "🚀",
    title: "Launch Day D-Day",
    time: "1 Hari",
    color: "bg-[#d97706] text-[#d97706]",
    soft: "bg-[#fffbeb]",
    rows: [
      [
        "4 Gelombang",
        "Pagi: UGC wave · Siang: Trending + WA · Sore: Rating + Q&A · Malam: Afiliasi push",
      ],
      [
        "Qty & Channel",
        "250-500 UGC · 1 Trending\n1.000+ Comment · 5K+ WA\nTikTok · Twitter · Shopee · WA",
      ],
      [
        "Cocok Untuk",
        "Product launch baru, flash sale besar, campaign promo terbatas, dampak maksimal 1 hari.",
      ],
    ],
    metric: ["Trust Score / Hari", "+25-35 Poin", "Hasil hari sama →"],
  },
];

const researchStats = [
  [
    "270%",
    "Peningkatan Konversi",
    "Produk dengan Trust Score tinggi, banyak UGC & ulasan nyata, punya peluang konversi hampir 3x lebih tinggi.",
    "bg-[#f8e6f2] text-[#8b0f63] border-[#8b0f6326]",
  ],
  [
    "30-50%",
    "Penurunan CAC",
    "Cost Per Acquisition turun karena orang lebih cepat percaya. CTR iklan naik, CS tidak perlu meyakinkan panjang lebar.",
    "bg-[#eff6ff] text-[#2563eb] border-[#2563eb26]",
  ],
  [
    "70%",
    "Keputusan dari Orang Lain",
    "70% keputusan beli di TikTok & Shopee didasari apa kata orang lain, bukan apa kata iklan brand itu sendiri.",
    "bg-[#f0fdf4] text-[#16a34a] border-[#16a34a26]",
  ],
];

const trustZones = [
  ["0-30", "Kritis", "Jangan iklan dulu", "text-[#dc2626]", "w-5 bg-[#dc2626]"],
  ["31-50", "Lemah", "Bangun fondasi", "text-[#d97706]", "w-8 bg-[#d97706]"],
  [
    "51-70",
    "Sedang",
    "Iklan mulai efektif",
    "text-[#ca8a04]",
    "w-12 bg-[#ca8a04]",
  ],
  [
    "71-85",
    "Kuat",
    "Conversion optimal",
    "text-[#16a34a]",
    "w-[60px] bg-[#16a34a]",
  ],
  [
    "86-100",
    "Dominan",
    "Pemimpin kategori",
    "text-[#8b0f63]",
    "w-[76px] bg-[#8b0f63]",
  ],
];

const logos = [
  { name: "Disney+", src: disneyLogo },
  { name: "Allianz", src: allianzLogo },
  { name: "digibank DBS", src: digibankLogo },
  { name: "Tokopedia", src: tokopediaLogo },
  { name: "XL", src: xlLogo },
  { name: "UOB TMRW", src: uobLogo },
  { name: "Honda", src: hondaLogo },
  { name: "BTN", src: btnLogo },
  { name: "Tokocrypto", src: tokocryptoLogo },
  { name: "Blu BCA", src: bluLogo },
  { name: "Grab", src: grabLogo },
  { name: "Evalube", src: evalubeLogo },
  { name: "KratingDaeng", src: kratingdaengLogo },
  { name: "BCA", src: bcaLogo },
  { name: "Kopi ABC", src: abcLogo },
  { name: "Free Fire", src: freefireLogo },
  { name: "Ajaib", src: ajaibLogo },
  { name: "Wondr", src: wondrLogo },
];

function App() {
  const [current, setCurrent] = useState(0);
  const max = slides.length - 1;

  const go = useCallback(
    (delta: number) =>
      setCurrent((value) => Math.max(0, Math.min(max, value + delta))),
    [max],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") go(1);
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") go(-1);
    };

    let startX = 0;
    const onTouchStart = (event: TouchEvent) => {
      startX = event.touches[0].clientX;
    };
    const onTouchEnd = (event: TouchEvent) => {
      const dx = startX - event.changedTouches[0].clientX;
      if (Math.abs(dx) > 50) go(dx > 0 ? 1 : -1);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchend", onTouchEnd);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [go]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#f5f5f7] font-['Cabinet_Grotesk',system-ui,sans-serif] text-[#0f0f14] antialiased">
      <div className="fixed left-0 top-0 z-50 h-[3px] w-full bg-transparent">
        <div
          className={cx(
            "h-full bg-[#8b0f63] transition-[width] duration-500 ease-out",
            progressWidths[current],
          )}
        />
      </div>

      <SlideShell active={current === 0}>
        <Header label="Pitch Deck 2026" />
        <Center>
          <motion.div
            key={`cover-${current}`}
            variants={revealGroup}
            initial="hidden"
            animate={current === 0 ? "show" : "hidden"}
          >
            <motion.div variants={revealItem}>
              <Accent />
            </motion.div>
            <motion.div variants={revealItem}>
              <Tag>🇮🇩 Indonesia's Trust Activation Network</Tag>
            </motion.div>
            <motion.div variants={revealItem}>
              <Title hero>
                People don't trust ads.
                <br />
                <span className="text-[#8b0f63]">People trust people.</span>
              </Title>
            </motion.div>
            <motion.div variants={revealItem}>
              <Body className="mx-auto max-w-[500px]">
                HOPESY membangun kepercayaan konsumen secara sistematis melalui
                500.000 real users terverifikasi, framework yang terbukti, dan
                Trust Score yang terukur.
              </Body>
            </motion.div>
            <motion.div
              variants={revealItem}
              className="mt-7 grid overflow-hidden rounded-[14px] border border-[#e2e2e8] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)] sm:grid-cols-4"
            >
              {coverStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cx(
                    "border-[#e2e2e8] p-4 text-center sm:border-r",
                    index === coverStats.length - 1 && "sm:border-r-0",
                  )}
                >
                  <div className="font-['Clash_Display'] text-[1.7rem] font-bold leading-none text-[#8b0f63]">
                    <CountUp
                      active={current === 0}
                      end={stat.end}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="mt-1 text-[11px] font-medium text-[#5a5a72]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Center>
      </SlideShell>

      <SlideShell active={current === 1}>
        <Header label="Problem — 02 / 12" />
        <Left>
          <motion.div
            key={`problem-${current}`}
            variants={revealGroup}
            initial="hidden"
            animate={current === 1 ? "show" : "hidden"}
          >
            <motion.div variants={revealItem}>
              <Tag tone="neutral">Masalah yang Terjadi Hari Ini</Tag>
            </motion.div>
            <motion.div variants={revealItem}>
              <Title>
                Iklan sudah jalan.
                <br />
                <span className="text-[#8b0f63]">Conversion belum.</span>
              </Title>
            </motion.div>
            <motion.div variants={revealItem}>
              <Body className="max-w-[560px]">
                Brand menghabiskan miliaran untuk traffic, tapi konsumen tetap
                ragu karena kepercayaan belum terbangun.
              </Body>
            </motion.div>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {problemCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  variants={revealItem}
                  whileHover={{ y: -3 }}
                  transition={{ delay: 0.05 * index }}
                  className="rounded-[14px] border border-[#e2e2e8] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]"
                >
                  <div className="mb-2 text-2xl font-bold text-[#8b0f63]">
                    {card.icon}
                  </div>
                  <div className="font-['Clash_Display'] text-[2.2rem] font-bold leading-none text-[#8b0f63]">
                    <CountUp
                      active={current === 1}
                      end={card.end}
                      suffix={card.suffix}
                      decimals={card.decimals ?? 0}
                    />
                  </div>
                  <div className="mt-2 text-[13px] font-bold text-[#0f0f14]">
                    {card.title}
                  </div>
                  <p className="mt-1 text-xs leading-[1.6] text-[#5a5a72]">
                    {card.copy}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Left>
      </SlideShell>

      <SlideShell active={current === 2}>
        <Header label="Root Cause — 03 / 12" />
        <Center>
          <PageMotion active={current === 2}>
            <Reveal>
              <Tag>Root Cause</Tag>
            </Reveal>
            <Reveal>
              <p className="mx-auto max-w-[640px] text-center font-['Clash_Display'] text-[clamp(1.4rem,2.6vw,2rem)] font-bold leading-[1.5] text-[#0f0f14]">
                Konsumen tidak butuh lebih banyak iklan.
                <br />
                Mereka butuh{" "}
                <span className="text-[#8b0f63]">
                  bukti bahwa orang lain sudah percaya.
                </span>
              </p>
            </Reveal>
            <Reveal className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
              {[
                ["Yang ada", "Traffic tinggi", false],
                ["+", "", false],
                ["Yang hilang", "Trust rendah", true],
                ["=", "", false],
                ["Hasilnya", "Conversion buruk", false],
              ].map(([label, value, hi], index) =>
                value ? (
                  <div
                    key={String(label)}
                    className={cx(
                      "rounded-xl border-2 px-6 py-4 text-center shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]",
                      hi
                        ? "border-[#8b0f634d] bg-[#f8e6f2]"
                        : "border-[#e2e2e8] bg-white",
                    )}
                  >
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.5px] text-[#5a5a72]">
                      {label}
                    </div>
                    <div
                      className={cx(
                        "font-['Clash_Display'] text-xl font-bold",
                        hi ? "text-[#8b0f63]" : "text-[#0f0f14]",
                      )}
                    >
                      {value}
                    </div>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="text-2xl font-light text-[#c8c8d2]"
                  >
                    {label}
                  </div>
                ),
              )}
            </Reveal>
            <Reveal>
              <p className="mt-6 text-xs italic text-[#5a5a72]">
                Ini yang diselesaikan HOPESY.
              </p>
            </Reveal>
          </PageMotion>
        </Center>
      </SlideShell>

      <SlideShell active={current === 3} split>
        <main className="grid h-full flex-1 lg:grid-cols-2">
          <section className="relative flex flex-col justify-center overflow-hidden bg-[#8b0f63] px-5 py-8 sm:px-10 lg:px-[52px]">
            <div className="absolute right-[-80px] top-[-80px] h-60 w-60 rounded-full bg-white/10" />
            <PageMotion active={current === 3} className="relative z-10">
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
                        active={current === 3}
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
            <PageMotion active={current === 3}>
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

      <SlideShell active={current === 4}>
        <Header label="Trust Score — 05 / 12" />
        <Left>
          <PageMotion active={current === 4}>
            <Reveal>
              <Tag>Trust Score System</Tag>
            </Reveal>
            <Reveal>
              <Title>
                Kepercayaan yang{" "}
                <span className="text-[#8b0f63]">terukur,</span>
                <br />
                bukan sekadar terasa.
              </Title>
            </Reveal>
            <Reveal className="mb-7 grid gap-3 md:grid-cols-3">
              {researchStats.map(([num, title, copy, colors]) => (
                <div
                  key={title}
                  className={cx("rounded-2xl border p-5", colors)}
                >
                  <div className="font-['Clash_Display'] text-[2.35rem] font-bold leading-none">
                    {num === "270%" && (
                      <CountUp active={current === 4} end={270} suffix="%" />
                    )}
                    {num === "30-50%" && (
                      <>
                        <CountUp active={current === 4} end={30} suffix="" />-
                        <CountUp active={current === 4} end={50} suffix="%" />
                      </>
                    )}
                    {num === "70%" && (
                      <CountUp active={current === 4} end={70} suffix="%" />
                    )}
                  </div>
                  <div className="mt-2 text-[13px] font-bold text-[#0f0f14]">
                    {title}
                  </div>
                  <div className="mt-1 text-[11px] leading-[1.6] text-[#5a5a72]">
                    {copy}
                  </div>
                </div>
              ))}
            </Reveal>
            <Reveal className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[14px] bg-[#0f0f14] p-5">
                <div className="mb-2.5 text-[10px] uppercase tracking-[0.8px] text-white/35">
                  Formula
                </div>
                <div className="font-mono text-[13px] leading-8 text-white/85">
                  <span className="font-bold text-[#f48fb1]">TrustScore</span> =
                  <br />
                  <span className="text-[#81c784]">Volume</span> x{" "}
                  <span className="text-[#ffb74d]">30%</span>
                  <br />+ <span className="text-[#81c784]">
                    Kualitas
                  </span> x <span className="text-[#ffb74d]">30%</span>
                  <br />+ <span className="text-[#81c784]">Sebaran</span> x{" "}
                  <span className="text-[#ffb74d]">20%</span>
                  <br />+ <span className="text-[#81c784]">
                    Sentimen
                  </span> x <span className="text-[#ffb74d]">20%</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                {trustZones.map(([range, name, desc, color, bar]) => (
                  <div
                    key={range}
                    className="flex items-center gap-2.5 rounded-lg border border-[#e2e2e8] bg-white px-3 py-2"
                  >
                    <span
                      className={cx(
                        "min-w-11 font-mono text-[10px] font-bold",
                        color,
                      )}
                    >
                      {range}
                    </span>
                    <div className={cx("h-[3px] shrink-0 rounded", bar)} />
                    <span className="flex-1 text-xs font-bold text-[#0f0f14]">
                      {name}
                    </span>
                    <span className="text-[11px] text-[#5a5a72]">{desc}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </PageMotion>
        </Left>
      </SlideShell>

      <SlideShell active={current === 5}>
        <Header label="Cara Kerja — 06 / 12" />
        <Left>
          <PageMotion active={current === 5}>
            <Reveal>
              <Tag tone="neutral">Process</Tag>
            </Reveal>
            <Reveal>
              <Title>
                Dari konsultasi ke hasil,
                <br />
                <span className="text-[#8b0f63]">4 langkah saja.</span>
              </Title>
            </Reveal>
            <Reveal className="relative mt-7 grid gap-4 md:grid-cols-4">
              <div className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-[#e2e2e8] md:block" />
              {[
                [
                  "01",
                  "Konsultasi & Audit",
                  "Audit Trust Score saat ini. Identifikasi gap dan platform paling kritikal untuk brand Anda.",
                  "Gratis · 1-2 Hari",
                ],
                [
                  "02",
                  "Strategi & Proposal",
                  "Framework dipilih sesuai situasi. Proposal dengan target Trust Score konkret dikirim 24 jam.",
                  "24 Jam",
                ],
                [
                  "03",
                  "Network Activation",
                  "500K+ real users digerakkan terkoordinasi. UGC, rating, komentar, trending, sesuai jadwal.",
                  "Mulai Hari ke-3",
                ],
                [
                  "04",
                  "Report & Optimasi",
                  "Weekly report dengan Trust Score terkini. Strategi disesuaikan kalau perlu optimasi lebih lanjut.",
                  "Weekly Report",
                ],
              ].map(([num, title, copy, badge]) => (
                <div key={num} className="relative z-10 text-center">
                  <div className="mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#e2e2e8] bg-white font-['Clash_Display'] text-base font-bold text-[#8b0f63] shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]">
                    {num}
                  </div>
                  <div className="mb-1 font-['Clash_Display'] text-[13px] font-bold text-[#0f0f14]">
                    {title}
                  </div>
                  <div className="text-[11px] leading-[1.6] text-[#5a5a72]">
                    {copy}
                  </div>
                  <span className="mt-2 inline-block rounded-full border border-[#8b0f6333] bg-[#f8e6f2] px-2.5 py-0.5 text-[10px] font-bold text-[#8b0f63]">
                    {badge}
                  </span>
                </div>
              ))}
            </Reveal>
          </PageMotion>
        </Left>
      </SlideShell>

      <SlideShell active={current === 6}>
        <Header label="Layanan — 07 / 12" />
        <Left>
          <PageMotion active={current === 6}>
            <Reveal>
              <Tag>5 Kategori Layanan</Tag>
            </Reveal>
            <Reveal>
              <Title>
                Semua yang dibutuhkan untuk
                <br />
                <span className="text-[#8b0f63]">membangun kepercayaan.</span>
              </Title>
            </Reveal>
            <div className="mt-5 grid gap-2 md:grid-cols-2">
              {services.map(([icon, title, copy, klass]) => (
                <Reveal
                  key={title}
                  className={cx(
                    "flex items-center gap-3 rounded-xl border border-[#e2e2e8] bg-white px-4 py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]",
                    klass.includes("col-span") && "md:col-span-2",
                  )}
                >
                  <div
                    className={cx(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] text-base",
                      klass.replace("md:col-span-2", ""),
                    )}
                  >
                    {icon}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#0f0f14]">
                      {title}
                    </div>
                    <div className="text-[11px] text-[#5a5a72]">{copy}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </PageMotion>
        </Left>
      </SlideShell>

      <SlideShell active={current === 7}>
        <Header label="Framework — 08 / 12" />
        <Left compact>
          <PageMotion active={current === 7}>
            <Reveal className="mb-5 flex items-center justify-between gap-4">
              <Tag>4 Strategic Framework</Tag>
              <div className="text-[11px] text-[#5a5a72]">
                Pilih sesuai situasi brand Anda →
              </div>
            </Reveal>
            <div className="grid gap-2.5 lg:grid-cols-4">
              {frameworks.map((fw) => (
                <Reveal
                  key={fw.title}
                  className="flex flex-col overflow-hidden rounded-[14px] border border-[#e2e2e8] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]"
                >
                  <div className={cx("px-4 py-3.5", fw.color.split(" ")[0])}>
                    <div className="mb-1 text-lg leading-none">{fw.icon}</div>
                    <div className="font-['Clash_Display'] text-[13px] font-bold leading-[1.3] text-white">
                      {fw.title}
                    </div>
                    <div className="mt-0.5 text-[10px] text-white/60">
                      {fw.time}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 p-3.5">
                    {fw.rows.map(([label, copy]) => (
                      <div
                        key={label}
                        className="rounded-lg bg-[#f5f5f7] px-3 py-2.5"
                      >
                        <div
                          className={cx(
                            "mb-1 text-[10px] font-bold uppercase tracking-[0.5px]",
                            fw.color.split(" ")[1],
                          )}
                        >
                          {label}
                        </div>
                        <div className="whitespace-pre-line text-[11px] leading-[1.6] text-[#5a5a72]">
                          {copy}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className={cx(
                      "flex items-center justify-between border-t border-[#8b0f631a] px-4 py-2.5",
                      fw.soft,
                    )}
                  >
                    <div>
                      <div
                        className={cx(
                          "text-[9px] font-bold uppercase tracking-[0.5px]",
                          fw.color.split(" ")[1],
                        )}
                      >
                        {fw.metric[0]}
                      </div>
                      <div
                        className={cx(
                          "font-['Clash_Display'] text-[13px] font-bold",
                          fw.color.split(" ")[1],
                        )}
                      >
                        {fw.metric[1]}
                      </div>
                    </div>
                    <div
                      className={cx(
                        "text-[10px] font-semibold",
                        fw.color.split(" ")[1],
                      )}
                    >
                      {fw.metric[2]}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </PageMotion>
        </Left>
      </SlideShell>

      <SlideShell active={current === 8}>
        <Header label="Bukti Nyata — 09 / 12" />
        <Left compact>
          <PageMotion active={current === 8}>
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
                    Brand Skincare Lokal — Dari Krisis Viral ke Pemimpin
                    Kategori
                  </div>
                  <div className="mt-0.5 text-[11px] text-white/40">
                    TikTok · Shopee · Twitter
                  </div>
                </div>
                <div className="relative z-10 hidden shrink-0 gap-5 sm:flex">
                  <div className="text-center">
                    <div className="font-['Clash_Display'] text-[1.4rem] font-bold text-[#4ade80]">
                      +<CountUp active={current === 8} end={312} suffix="%" />
                    </div>
                    <div className="text-[10px] text-white/40">
                      Sales Recovery
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-['Clash_Display'] text-[1.4rem] font-bold text-[#f48fb1]">
                      <CountUp active={current === 8} end={5} suffix=" Mgg" />
                    </div>
                    <div className="text-[10px] text-white/40">Durasi</div>
                  </div>
                </div>
              </div>
              <div className="grid items-center gap-0 px-5 py-4 md:grid-cols-[1fr_60px_1fr]">
                <ScoreBlock
                  active={current === 8}
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
                  active={current === 8}
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

      <SlideShell active={current === 9}>
        <Header label="Traction — 10 / 12" />
        <Left>
          <PageMotion active={current === 9}>
            <Reveal>
              <Tag tone="neutral">Numbers</Tag>
            </Reveal>
            <Reveal>
              <Title>
                <CountUp active={current === 9} end={7} suffix=" tahun." />
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
                      active={current === 9}
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
                  <div className="text-xs leading-[1.6] text-[#5a5a72]">
                    {copy}
                  </div>
                </Reveal>
              ))}
            </div>
          </PageMotion>
        </Left>
      </SlideShell>

      <SlideShell active={current === 10}>
        <Header label="Klien — 11 / 12" />
        <Center>
          <PageMotion active={current === 10}>
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

      <SlideShell active={current === 11}>
        <Header label="12 / 12" />
        <Center>
          <PageMotion active={current === 11}>
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

      <nav className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={current === 0}
          className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#e2e2e8] bg-white text-[13px] text-[#5a5a72] shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)] transition hover:border-[#8b0f63] hover:bg-[#8b0f63] hover:text-white disabled:cursor-default disabled:opacity-25 disabled:hover:border-[#e2e2e8] disabled:hover:bg-white disabled:hover:text-[#5a5a72]"
        >
          ←
        </button>
        <div className="rounded-full border-2 border-[#e2e2e8] bg-white px-4 py-1.5 text-[11px] font-semibold tracking-[0.3px] text-[#5a5a72] shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)]">
          {current + 1} / {slides.length}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={current === max}
          className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#e2e2e8] bg-white text-[13px] text-[#5a5a72] shadow-[0_1px_3px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.05)] transition hover:border-[#8b0f63] hover:bg-[#8b0f63] hover:text-white disabled:cursor-default disabled:opacity-25 disabled:hover:border-[#e2e2e8] disabled:hover:bg-white disabled:hover:text-[#5a5a72]"
        >
          →
        </button>
      </nav>
    </div>
  );
}

function ScoreBlock({
  active,
  tone,
  title,
  score,
  values,
}: {
  active: boolean;
  tone: "red" | "green";
  title: string;
  score: string;
  values: number[];
}) {
  const palette =
    tone === "red"
      ? ["#dc2626", "#ef4444", "#f87171", "#fca5a5"]
      : ["#16a34a", "#22c55e", "#4ade80", "#86efac"];

  return (
    <div>
      <div className="mb-2 flex items-center gap-1.5">
        <div
          className={cx(
            "h-[7px] w-[7px] rounded-full",
            tone === "red" ? "bg-[#dc2626]" : "bg-[#16a34a]",
          )}
        />
        <div
          className={cx(
            "text-[10px] font-bold uppercase tracking-[0.5px]",
            tone === "red" ? "text-[#dc2626]" : "text-[#16a34a]",
          )}
        >
          {title}
        </div>
      </div>
      <div
        className={cx(
          "mb-2.5 font-['Clash_Display'] text-[2.4rem] font-bold leading-none",
          tone === "red" ? "text-[#dc2626]" : "text-[#16a34a]",
        )}
      >
        <CountUp active={active} end={Number(score)} />
        <span className="text-sm font-normal text-[#5a5a72]">/100</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {["Volume", "Kualitas", "Sebaran", "Sentimen"].map((label, index) => (
          <div key={label}>
            <div className="mb-1 flex justify-between text-[10px] text-[#5a5a72]">
              <span>{label}</span>
              <span className="font-bold text-[#0f0f14]">
                <CountUp active={active} end={values[index]} />
              </span>
            </div>
            <div className="h-[3px] overflow-hidden rounded bg-[#e2e2e8]">
              <div
                className={cx(
                  "h-full rounded",
                  [
                    "w-[22%]",
                    "w-[15%]",
                    "w-[18%]",
                    "w-[12%]",
                    "w-[85%]",
                    "w-[78%]",
                    "w-[72%]",
                    "w-[80%]",
                  ][tone === "red" ? index : index + 4],
                  palette[index] === brand && "bg-[#8b0f63]",
                  palette[index] === dark && "bg-[#0f0f14]",
                  tone === "red" && index === 0 && "bg-[#dc2626]",
                  tone === "red" && index === 1 && "bg-[#ef4444]",
                  tone === "red" && index === 2 && "bg-[#f87171]",
                  tone === "red" && index === 3 && "bg-[#fca5a5]",
                  tone === "green" && index === 0 && "bg-[#16a34a]",
                  tone === "green" && index === 1 && "bg-[#22c55e]",
                  tone === "green" && index === 2 && "bg-[#4ade80]",
                  tone === "green" && index === 3 && "bg-[#86efac]",
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
