import Image from "next/image";
import StoreButton from "./StoreButton";
import FeatureRibbon from "./FeatureRibbon";
import FadeIn from "./animations/FadeIn";

const features = [
  "Instant conversion",
  "No P2P risk",
  "Pay bills fast",
  "Transparent rates",
  "Fast transfers",
  "Stablecoins supported",
  "On-chain verified",
];

export default function SupportSection() {
  return (
    <section className="pt-20">
      <FadeIn>
        <div className="text-left md:text-center">
          <h2 className="text-[#262626] font-bold text-[23px] md:text-[32px]">
            We Support the Tokens You
            <br /> Already Use
          </h2>
          <p className="mt-3 text-[#525252] font-medium text-[15px] md:text-[18px]">
            We support the most widely used digital assets so
            <br /> you can fund your wallet effortlessly.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-10 flex items-center justify-center">
          <div className="relative w-full max-w-[960px]">
            <Image src="/mobile.png" alt="Mobile preview" width={360} height={640} className="object-contain md:hidden" priority />
            <Image src="/desktop.png" alt="Desktop preview" width={1000} height={540} className="object-contain hidden md:block" priority />
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-6 md:-mt-16 text-center font-medium text-[#525252] text-[15px] md:text-[18px]">
          Secured, audited, and backed by industry<br /> standard infrastructure.
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="mt-6 flex items-center justify-center gap-4">
          <StoreButton platform="google" />
          <StoreButton platform="apple" />
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <div className="mt-12">
          <FeatureRibbon items={features} />
        </div>
      </FadeIn>
    </section>
  );
}