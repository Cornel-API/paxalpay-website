"use client";
import { useState } from "react";
import FadeIn from "./animations/FadeIn";
import StaggerContainer from "./animations/StaggerContainer";

type Item = { question: string; answer: string };

const items: Item[] = [
  {
    question: "How does Paxalpay work?",
    answer:
      "Paxalpay lets you deposit crypto (BTC, ETH, USDT and more) and instantly convert it into spendable local currency in your mobile wallet. You can then send, withdraw, or pay bills directly from the app.",
  },
  { question: "What crypto can I deposit?", answer: "USDT, USDC, BTC, ETH and other supported assets." },
  { question: "How long does conversion take?", answer: "Deposits settle in seconds; conversion is immediate in most cases." },
  { question: "Can I withdraw to my bank account?", answer: "Yes, you can withdraw to supported bank accounts directly from the app." },
  { question: "Do you support multiple currencies?", answer: "Yes, we support major local currencies depending on your region." },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <FadeIn>
            <h2 className="text-[#262626] font-bold text-[23px]  md:text-[32px]">Frequently Asked <br />Questions</h2>
            <p className="mt-3 text-[#525252] text-[15px] md:text-[18px] font-medium">If you have questions or need real-time assistance, <br />our team is always ready.</p>
            <a href="#" className="mt-6 inline-flex items-center rounded-[16px] bg-blue-600 px-4 py-2 text-white">Contact Support</a>
          </FadeIn>
        </div>
        <div>
          <StaggerContainer className="divide-y divide-zinc-200" staggerChildren={0.1}>
            {items.map((it, i) => (
              <FadeIn key={it.question}>
                <div className=" font-bold text-15px md:text-[18px] ">
                  <button type="button" className="w-full flex items-center justify-between py-5 text-left" onClick={() => setOpen(open === i ? -1 : i)}>
                    <span className="text-[#262626] font-medium">{it.question}</span>
                    <span className="text-[#262626]">{open === i ? "—" : "+"}</span>
                  </button>
                  {open === i && <div className="pb-4 text-[#525252] font-medium text-15px md:text-[18px] ">{it.answer}</div>}
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}