import { motion } from "framer-motion";
import { revealGroup } from "../lib/animations";

export function PageMotion({
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
