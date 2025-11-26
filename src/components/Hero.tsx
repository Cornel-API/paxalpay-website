import Image from "next/image";
import StoreButton from "./StoreButton";
import FadeIn from "./animations/FadeIn";

export default function Hero() {
  return (
    <section className=" px-6 relative h-[960px] pt-26 pb-0 overflow-hidden bg-[#FCF7F1] -mx-[28px]">
      <div className="flex flex-col items-center text-center">
        <FadeIn delay={0.1}>
          <h1 className="text-center font-extrabold md:text-[52px] text-[29px] text-[#262626] leading-tight">
            Skip the P2P Wait.
            <br className="hidden md:block" /> Spend Your Crypto Instantly.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-4 md:text-[20px] text-[14px] font-medium text-[#525252]">
            Deposit USDT, BTC, or ETH and get settled in local currency immediately. Pay bills, <br className="hidden md:block" /> transfer to any bank, or scan-to-pay. No merchants, no delays, no risk.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-6 flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-2 w-full max-w-[360px]">
            <StoreButton platform="google" className="w-full justify-center" />
            <StoreButton platform="apple" className="w-full justify-center" />
          </div>
        </FadeIn>
      </div>

      <div className="px-6 md:px-0 pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-screen md:left-0 md:right-0 md:w-auto md:translate-x-0 flex justify-center">
        <FadeIn delay={0.4} direction="up" className="flex justify-center">
          <Image
            src="/hero_image.png"
            alt="App preview"
            width={735}
            height={986}
            className="w-[900px] h-auto md:w-[735px] origin-bottom scale-[1.2] md:scale-100"
          />
        </FadeIn>
      </div>
    </section>
  );
}