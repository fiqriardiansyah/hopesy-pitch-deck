import { useCallback, useEffect, useState } from "react";
import { cx } from "./lib/utils";
import { slides, progressWidths } from "./data";
import { Slide01Cover } from "./slides/Slide01Cover";
import { Slide02Problem } from "./slides/Slide02Problem";
import { Slide03RootCause } from "./slides/Slide03RootCause";
import { Slide04Solution } from "./slides/Slide04Solution";
import { Slide05TrustScore } from "./slides/Slide05TrustScore";
import { Slide06HowItWorks } from "./slides/Slide06HowItWorks";
import { Slide07Services } from "./slides/Slide07Services";
import { Slide08UGC } from "./slides/Slide08UGC";
import { Slide09RatingReview } from "./slides/Slide09RatingReview";
import { Slide10EngagementConversation } from "./slides/Slide10EngagementConversation";
import { Slide10Framework } from "./slides/Slide10Framework";
import { Slide11LeadsConversion } from "./slides/Slide11LeadsConversion";
import { Slide11CaseStudy } from "./slides/Slide11CaseStudy";
import { SlideResearchSurvey } from "./slides/SlideResearchSurvey";
import { Slide12Traction } from "./slides/Slide12Traction";
import { Slide13Clients } from "./slides/Slide13Clients";
import { Slide14CTA } from "./slides/Slide14CTA";

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

      <Slide01Cover active={current === 0} />
      <Slide02Problem active={current === 1} />
      <Slide03RootCause active={current === 2} />
      <Slide04Solution active={current === 3} />
      <Slide05TrustScore active={current === 4} />
      <Slide06HowItWorks active={current === 5} />
      <Slide07Services active={current === 6} />
      <Slide08UGC active={current === 7} />
      <Slide09RatingReview active={current === 8} />
      <Slide10EngagementConversation active={current === 9} />
      <Slide11LeadsConversion active={current === 10} />
      <SlideResearchSurvey active={current === 11} />
      <Slide10Framework active={current === 12} />
      <Slide11CaseStudy active={current === 13} />
      <Slide12Traction active={current === 14} />
      <Slide13Clients active={current === 15} />
      <Slide14CTA active={current === 16} />

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

export default App;
