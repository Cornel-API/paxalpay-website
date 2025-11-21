"use client";
import { useEffect, useRef, useState } from "react";

const tabs = [
  {
    label: "Instant Crypto-to-Fiat Wallet Funding",
    content:
      "Deposit USDT, USDC, BTC, ETH and more — we instantly convert it to your local currency so you can use it immediately for anything: transfers, bills, purchases, airtime",
  },
  {
    label: "Your Money Works Anywhere",
    content:
      "Spend locally with ease. Your balance is ready for everyday transactions wherever you are.",
  },
  {
    label: "Everyday Bills Paid in Seconds",
    content:
      "Pay utilities, airtime, subscriptions and more, all within seconds from your wallet.",
  },
  {
    label: "Built for Speed and Security",
    content:
      "Fast settlements and modern security practices keep your funds and data protected.",
  },
];

export default function AutoTabs() {
  const [active, setActive] = useState(0);
  const tabsWrapRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const timerRef = useRef<number | null>(null);
  const DURATION_MS = 5000;

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setActive((i) => (i + 1) % tabs.length);
    }, DURATION_MS);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [active]);

  useEffect(() => {
    const el = buttonRefs.current[active];
    if (!el) return;
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const container = tabsWrapRef.current;
      if (!container) return;
      const target = el.offsetLeft - (container.clientWidth - el.offsetWidth) / 2;
      const max = container.scrollWidth - container.clientWidth;
      const clamped = Math.max(0, Math.min(target, max));
      container.scrollTo({ left: clamped, behavior: "smooth" });
    }
  }, [active]);

  return (
    <section className="py-16">
      <div className="text-[#262626] font-bold font-[700] text-[23px] md:text-[32px]">
        The Easiest Way to Use
        <br /> Crypto in Real Life
      </div>

      <div
        ref={tabsWrapRef}
        className="mt-6 flex items-end gap-8 flex-nowrap overflow-x-auto overscroll-x-contain scroll-smooth md:flex-wrap md:overflow-visible md:snap-x md:snap-mandatory"
        role="tablist"
        aria-label="Features"
      >

        {tabs.map((t, i) => (
          <button
            key={t.label}
            type="button"
            onClick={() => setActive(i)}
            ref={(el) => { buttonRefs.current[i] = el; }}
            className={`relative pb-2 text-[15px] font-[500] font-medium flex-shrink-0 snap-center ${i === active ? "text-blue-600" : "text-[#262626]"}`}
            role="tab"
            aria-selected={i === active}
            aria-controls={`tab-panel-${i}`}
          >
            {t.label}
            <span
              className={`absolute left-0 bottom-0 h-[6px] rounded-[6px] ${i === active ? "w-full bg-blue-600 tab-underline" : "w-full bg-zinc-200"}`}
              style={i === active ? { animationDuration: `${DURATION_MS}ms` } : undefined}
              id={`tab-underline-${i}`}
            />
          </button>
        ))}
        <div className="shrink-0 w-[40px]" aria-hidden="true" />
      </div>

      <div className="mt-8 w-full md:w-[899px] h-auto md:h-[464px] rounded-[32px] bg-zinc-100 p-6 md:p-10 overflow-hidden">
        <div className="h-full overflow-hidden flex items-start" role="tabpanel" id={`tab-panel-${active}`} aria-labelledby={`tab-underline-${active}`} aria-live="polite">
          <p className="text-left text-[#262626] text-[20px]  leading-9 md:max-w-[447px] pt-0 md:pt-28">{tabs[active].content}</p>
        </div>
      </div>
    </section>
  );
}