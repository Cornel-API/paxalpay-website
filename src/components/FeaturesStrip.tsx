import FadeIn from "./animations/FadeIn";
import StaggerContainer from "./animations/StaggerContainer";
import Image from "next/image";

export default function FeaturesStrip() {
  return (
    <section className="py-16">
      <FadeIn>
        <h2 className="text-[#525252] font-bold  text-[18px] mb-10">
          Tired of P2P Drama?
        </h2>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10" staggerChildren={0.2}>
        <FadeIn>
          <div>
            <div className="flex flex-col items-start gap-3">
              <Image src="/time_duration_line.svg" alt="Time" width={24} height={24} />
              <div>
                <div className="text-[#262626] font-bold text-[18px] md:text-[23px]">Waiting Game</div>
                <div className="mt-2 text-[#525252] font-medium text-[14px] md:text-[18px]">Hours waiting for P2P traders to confirm. Your money stuck in limbo while prices move.</div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div>
            <div className="flex flex-col items-start gap-3">
              <Image src="/incognito_mode_line.svg" alt="Risk" width={24} height={24} />
              <div>
                <div className="text-[#262626] font-bold text-[18px] md:text-[23px]">The Risk</div>
                <div className="mt-2 text-[#525252] font-medium text-[14px] md:text-[18px]">Scammers. Chargebacks. Frozen accounts. One bad trade could lock your funds for weeks.</div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div>
            <div className="flex flex-col items-start gap-3">
              <Image src="/bill_line.svg" alt="Cost" width={24} height={24} />
              <div>
                <div className="text-[#262626] font-bold text-[18px] md:text-[23px]">Hidden Costs</div>
                <div className="mt-2 text-[#525252] font-medium text-[14px] md:text-[18px]">'Favorable rates' that aren't. Traders taking 3-5% cuts. You lose money on every transaction.</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </StaggerContainer>
    </section>
  );
}