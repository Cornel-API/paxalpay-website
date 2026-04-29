"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";


const tabs = [
  {
    label: "Instant Crypto-to-Fiat Wallet Funding",
    content:
      "Deposit USDT, USDC, BTC, ETH and more. We instantly convert it to your local currency so you can use it immediately for anything: transfers, bills, purchases, airtime.",
    image: "/first_tab.png",
    layout: "side", // text left, image right
  },
  {
    label: "Your Money Works Anywhere",
    content:
      "Paxalpay offers transaction speed and reliability. Send to any bank account, Transfer to friends, Pay merchant, Spend as normal",
    image: "/tab2.png",
    layout: "background", // image as background
  },
  {
    label: "Everyday Bills Paid in Seconds",
    content:
      "Use your converted balance to handle the essentials: Airtime & data, Internet subscriptions, Electricity, TV services and many more. Paxalpay makes your crypto useful in your day-to-day life.",
    image: "/tab3.png",
    layout: "side", // text left, image right
  },
  {
    label: "Built for Speed and Security",
    content:
      "Bank-grade encryption, transaction PIN, device verification and anti-fraud monitoring ensure every operation is protected. Your funds, identity and actions remain secure at every step.",
    image: "/tab4.svg",
    layout: "side", // text left, image right
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
    <section className="py-16 flex flex-col items-center overflow-hidden">
      <div className="text-[#262626] font-bold  text-[23px] md:text-[32px] text-center leading-tight">
        Why people are
        <br /> Switching to PaxalPay
      </div>

      <div
        ref={tabsWrapRef}
        className="mt-6 w-full max-w-full flex items-end justify-start md:justify-center gap-8 flex-nowrap overflow-x-auto overscroll-x-contain scroll-smooth md:flex-wrap md:overflow-visible md:snap-x md:snap-mandatory"
        role="tablist"
        aria-label="Features"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >

        {tabs.map((t, i) => (
          <button
            key={t.label}
            type="button"
            onClick={() => setActive(i)}
            ref={(el) => { buttonRefs.current[i] = el; }}
            className={`relative pb-2 text-[15px] font-medium flex-shrink-0 snap-center ${i === active ? "text-blue-600" : "text-[#737373]"} ${i === 0 ? "pl-6 md:pl-0" : ""}`}
            role="tab"
            aria-selected={i === active}
            aria-controls={`tab-panel-${i}`}
          >
            {t.label}
            <span
              className={`absolute ${i === 0 ? "left-6 md:left-0" : "left-0"} bottom-0 h-[6px] rounded-[6px] ${i === active ? "w-full bg-blue-600 tab-underline" : "w-full bg-zinc-200"}`}
              style={i === active ? { animationDuration: `${DURATION_MS}ms` } : undefined}
              id={`tab-underline-${i}`}
            />
          </button>
        ))}
        <div className="shrink-0 w-[40px]" aria-hidden="true" />
      </div>

      <div
        className={`mt-8 w-full md:w-full md:max-w-[999px] h-auto md:h-[464px] min-h-[550px] md:min-h-0 rounded-[32px] overflow-hidden mx-auto relative ${tabs[active].layout === "side" ? "bg-[#FCF7F1] md:p-10" : "bg-zinc-100"
          }`}
      >
        {tabs[active].layout === "background" ? (
          // Tab 2: Background image layout
          <div className="h-full min-h-[550px] md:min-h-0 overflow-hidden flex items-start justify-start relative" role="tabpanel" id={`tab-panel-${active}`} aria-labelledby={`tab-underline-${active}`} aria-live="polite">
            <div className="absolute inset-0 z-0">
              <Image
                src="/tab2.png"
                alt=""
                fill
                className="hidden md:block object-cover"
              />
              <Image
                src="/tab2_mobile.png"
                alt=""
                fill
                className="md:hidden object-cover"
              />
            </div>
            <p className="text-left text-[#262626] text-[20px] leading-7 md:max-w-[447px] relative z-10 px-6 md:px-10 pt-6 md:pt-10">{tabs[active].content}</p>
          </div>
        ) : (
          // Tabs 1, 3, 4: Side-by-side layout
          <div className="h-full overflow-hidden flex flex-col md:flex-row items-start justify-between gap-2 md:gap-6 md:px-0" role="tabpanel" id={`tab-panel-${active}`} aria-labelledby={`tab-underline-${active}`} aria-live="polite">
            <p className="text-left text-[#262626] text-[20px] leading-7 md:max-w-[447px] flex-1 px-6 py-6 md:px-0">{tabs[active].content}</p>
            <div className="relative w-full md:mx-0 md:w-[550px] h-[300px] md:h-full flex-shrink-0">
              <Image
                src={tabs[active].image}
                alt=""
                fill
                className="object-cover md:object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}