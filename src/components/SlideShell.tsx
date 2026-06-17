import { cx } from "../lib/utils";

export function SlideShell({
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
