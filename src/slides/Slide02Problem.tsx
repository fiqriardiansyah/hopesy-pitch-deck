import { motion } from "framer-motion";
import { revealGroup, revealItem } from "../lib/animations";
import { problemCards } from "../data";
import { Tag, Title, Body } from "../components/Typography";
import { Left } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { CountUp } from "../components/CountUp";

export function Slide02Problem({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="Problem — 02 / 12" />
      <Left>
        <motion.div
          key={String(active)}
          variants={revealGroup}
          initial="hidden"
          animate={active ? "show" : "hidden"}
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
                    active={active}
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
  );
}
