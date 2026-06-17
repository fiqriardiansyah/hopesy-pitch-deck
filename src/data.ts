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

export const brand = "#8b0f63";
export const dark = "#0f0f14";

export const slides = Array.from({ length: 17 }, (_, index) => index + 1);

export const progressWidths = [
  "w-[5.88%]",
  "w-[11.76%]",
  "w-[17.65%]",
  "w-[23.53%]",
  "w-[29.41%]",
  "w-[35.29%]",
  "w-[41.18%]",
  "w-[47.06%]",
  "w-[52.94%]",
  "w-[58.82%]",
  "w-[64.71%]",
  "w-[70.59%]",
  "w-[76.47%]",
  "w-[82.35%]",
  "w-[88.24%]",
  "w-[94.12%]",
  "w-full",
];

export const coverStats = [
  { end: 500, suffix: "K+", label: "Real Users" },
  { end: 7, suffix: " Tahun", label: "Operasional" },
  { end: 100, suffix: "+", label: "Brand Dilayani" },
  { end: 20, suffix: "+", label: "Agency Partners" },
];

export const problemCards = [
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

export const services = [
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

export const frameworks = [
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

export const researchStats = [
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

export const trustZones = [
  ["0-30", "Kritis", "Jangan iklan dulu", "text-[#dc2626]", "w-5 bg-[#dc2626]"],
  ["31-50", "Lemah", "Bangun fondasi", "text-[#d97706]", "w-8 bg-[#d97706]"],
  ["51-70", "Sedang", "Iklan mulai efektif", "text-[#ca8a04]", "w-12 bg-[#ca8a04]"],
  ["71-85", "Kuat", "Conversion optimal", "text-[#16a34a]", "w-[60px] bg-[#16a34a]"],
  ["86-100", "Dominan", "Pemimpin kategori", "text-[#8b0f63]", "w-[76px] bg-[#8b0f63]"],
];

export const logos = [
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
