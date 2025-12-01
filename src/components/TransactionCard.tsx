"use client";
import { useEffect, useState } from "react";

type CardProps = {
  type: string;
  timestamp: string;
  amount: string;
  value: string;
};

function CardInner({ type, timestamp, amount, value }: CardProps) {
  return (
    <div className="grid grid-cols-2 items-center w-[288px] h-[72px] md:w-[460px] md:h-[88px] rounded-[18px] bg-white px-3 md:px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.15)]">
      <div className="flex items-center gap-3 md:gap-4">
        <div className="h-8 w-8 md:h-10 md:w-10 rounded-[12px] bg-green-100 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l4 4 10-10" stroke="#38a169" strokeWidth="2" />
          </svg>
        </div>
        <div className="leading-none text-left">
          <div className="text-[#262626] font-semibold text-[14px] md:text-[16px]">{type}</div>
          <div className="text-[#525252] text-[12px] md:text-[14px]">{timestamp}</div>
        </div>
      </div>

      <div className="text-right leading-none pr-1">
        <div className="text-[#262626] font-semibold text-[14px] md:text-[16px]">{amount}</div>
        <div className="text-[#525252] text-[12px] md:text-[14px]">{value}</div>
      </div>
    </div>
  );
}

const cards: CardProps[] = [
  { type: "USDT Deposit", timestamp: "Today, 10:45 AM", amount: "+200 USDT", value: "₦310,000" },
  { type: "BTC Withdrawal", timestamp: "Today, 11:00 AM", amount: "-0.005 BTC", value: "₦75,000" },
  { type: "ETH Deposit", timestamp: "Yesterday, 4:20 PM", amount: "+0.12 ETH", value: "₦180,000" },
  { type: "USDT Deposit", timestamp: "Today, 9:05 AM", amount: "+120 USDT", value: "₦186,000" },
];

export default function TransactionCard() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = (active + 1) % cards.length;

  useEffect(() => {
    const id = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActive(next);
        setIsAnimating(false);
      }, 350);
    }, 5000);

    return () => clearInterval(id);
  }, [active]);

  return (
    <div className="relative w-[288px] h-[72px] md:w-[460px] md:h-[88px]">

      <div className="absolute inset-0 scale-[0.94] opacity-30 blur-sm translate-y-3 z-0">
        <CardInner {...cards[(active - 1 + cards.length) % cards.length]} />
      </div>

      {/* FRONT ACTIVE CARD */}
      <div className="absolute inset-0 z-50">
        <CardInner {...cards[active]} />
      </div>

      {/* CARD SLIDING IN FROM BEHIND */}
      <div
        className={`absolute inset-0 z-20 transition-transform duration-300 ease-out ${isAnimating ? "translate-y-0 scale-100" : "translate-y-[28px] scale-[0.95]"
          }`}
      >
        <CardInner {...cards[next]} />
      </div>
    </div>
  );
}
