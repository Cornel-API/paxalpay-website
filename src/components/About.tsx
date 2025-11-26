import Image from "next/image";
import StoreButton from "./StoreButton";

import TransactionCard from "./TransactionCard";

export default function About() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-x-0 gap-y-10">
        <div>
          <div className="font-medium text-[15px] text-[#525252]">What is Paxalpay About?</div>
        </div>

        <div className="justify-self-end w-full md:w-auto">
          <h2 className="text-[#262626] font-bold  text-[23px] md:text-[32px]">
            Your Bridge Between Crypto and Daily Life
          </h2>
          <p className="mt-3 text-[#525252] text-[16px] md:text-[23px] leading-10">
            Paxalpay helps you turn your digital assets into local currency—fast,
            secure, and without the confusing steps. <br /> Built for freelancers,
            traders, businesses, and everyday people who just want money to move
            smoothly.
          </p>
        </div>

        <div className="self-end justify-self-start text-left pb-8 md:pb-12">
          <h3 className="text-[#262626] font-bold  text-[23px] md:text-[36px]">
            Built for Real People,
            <br /> Moving Real Value
          </h3>
          <div className="mt-6 flex items-center gap-4">
            <StoreButton platform="google" />
            <StoreButton platform="apple" />
          </div>
        </div>

        <div className="relative justify-self-end">
          <div className="overflow-hidden rounded-[24px]">
            <Image src="/About.png" alt="People using Paxalpay" width={628} height={400} />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-6 md:translate-y-8">
            <div className="transaction-card">
              <TransactionCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}