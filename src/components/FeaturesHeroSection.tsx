import Image from "next/image";
import StoreButton from "./StoreButton";
import FadeIn from "./animations/FadeIn";

export default function FeaturesHeroSection() {
    return (
        <section className="pt-16 pb-0 md:py-16 bg-[#F9FAFB] md:min-h-[600px] -mx-[28px] md:mx-0">
            <div className="max-w-7xl px-[28px] md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text content */}
                    <div className="text-center md:text-left">
                        <FadeIn>
                            <h1 className="text-[#262626] font-bold text-[29px] md:text-[52px] leading-none mb-6">
                                More Than a Wallet.
                                <br className="hidden md:block" />
                                A Complete Financial Bridge.
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-[#525252] text-[14px] md:text-[20px] leading-8 mb-8">
                                From depositing crypto to settling real-world bills. See how Paxalpay
                                connects living in both the crypto and cash worlds.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="mt-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-2 w-full max-w-[360px]">
                                <StoreButton platform="google" className="w-full justify-center" />
                                <StoreButton platform="apple" className="w-full justify-center" />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right side - Image */}
                    <FadeIn delay={0.3} direction="left" className="w-full flex justify-center md:justify-end">
                        <div className="relative w-[481px] md:w-[755px] h-[321px] md:h-[504px]">
                            <Image
                                src="/first_tab.png"
                                alt="Woman holding cash with Paxalpay app showing wallet balance"
                                width={755}
                                height={504}
                                className="w-full h-full object-contain"
                                priority
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
