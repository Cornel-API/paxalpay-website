import Image from "next/image";
import StoreButton from "./StoreButton";
import FeatureRibbon from "./FeatureRibbon";
import Footer from "./Footer";
import FadeIn from "./animations/FadeIn";

export default function SpiralSection() {
  return (
    <>
      <section className="relative -mx-[28px] w-[calc(100%+56px)] overflow-hidden">
        <div className="relative w-full h-[680px] md:hidden">
          <div className="absolute top-8 inset-x-0 flex flex-col items-center gap-4">
            <FadeIn>
              <h2 className="text-center font-bold text-[23px] md:text-[52px] text-[#262626] leading-none">Your money, moving the<br /> way you need it.</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3">
                <StoreButton platform="google" />
                <StoreButton platform="apple" />
              </div>
            </FadeIn>
          </div>

          <div className="absolute top-50 inset-x-0 flex justify-center gap-4">
            <Image src="/right_side.png" alt="Left side" width={160} height={280} className="rounded-[14px]" />
            <Image src="/left_side1.png" alt="Right side 1" width={160} height={280} className="rounded-[14px]" />
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
            <Image src="/middle.png" alt="App phone" width={320} height={380} className="flex-shrink-0" priority />
          </div>
        </div>

        <div className="relative w-full h-[820px] hidden md:block">
          <div className="absolute top-10 inset-x-0 flex flex-col items-center gap-4">
            <FadeIn>
              <h2 className="text-center font-bold text-[40px] text-[#262626] leading-tight tracking-tighter">Your money, moving the<br className="hidden md:block" /> way you need it.</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-4">
                <StoreButton platform="google" />
                <StoreButton platform="apple" />
              </div>
            </FadeIn>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
            <Image src="/middle.png" alt="App phone" width={400} height={480} className="flex-shrink-0" priority />
          </div>

          <div className="absolute bottom-[150px] left-[calc(50%-580px)]">
            <div className="relative flex-shrink-0">
              <Image src="/right_side.png" alt="Left side" width={320} height={570} className="rounded-[18px]" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-8 w-28 rounded-full bg-black/10" />
            </div>
          </div>

          <div className="absolute bottom-[150px] left-[calc(50%+260px)]">
            <div className="relative flex-shrink-0">
              <Image src="/left_side1.png" alt="Right side 1" width={320} height={580} className="rounded-[18px]" />
            </div>
          </div>

        </div>
      </section>
      <FeatureRibbon
        items={[
          "Instant conversion",
          "No P2P risk",
          "Pay bills fast",
          "Transparent rates",
          "Fast transfers",
          "Stablecoins supported",
          "On-chain verified",
        ]}
      />

      <Footer />
    </>
  );
}