import { motion } from "framer-motion";
import { revealGroup, revealItem } from "../lib/animations";
import { coverStats } from "../data";
import { cx } from "../lib/utils";
import { Accent, Tag, Title, Body } from "../components/Typography";
import { Center } from "../components/Layout";
import { SlideShell } from "../components/SlideShell";
import { Header } from "../components/Header";
import { CountUp } from "../components/CountUp";

export function Slide01Cover({ active }: { active: boolean }) {
  return (
    <SlideShell active={active}>
      <Header label="Pitch Deck 2026" />
      <Center>
        <motion.div
          key={String(active)}
          variants={revealGroup}
          initial="hidden"
          animate={active ? "show" : "hidden"}
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
                  <CountUp active={active} end={stat.end} suffix={stat.suffix} />
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
  );
}
