import { cx } from "../lib/utils";

export function Center({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center overflow-hidden px-5 pb-14 pt-7 text-center sm:px-8 lg:px-[52px]">
      <div className="mx-auto w-full max-w-[960px]">{children}</div>
    </main>
  );
}

export function Left({
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
