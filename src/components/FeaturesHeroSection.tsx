import Image from "next/image";
import StoreButton from "./StoreButton";

export default function FeaturesHeroSection() {
    return (
        <section className="py-16 pt-16 bg-[#F9FAFB] min-h-[600px] -mx-[28px] md:mx-0">
            <div className="max-w-7xl px-[28px] md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text content */}
                    <div>
                        <h1 className="text-center md:text-left text-[#262626] font-bold text-[29px] md:text-[52px] leading-tight mb-6">
                            More Than a Wallet.
                            <br className="hidden md:block" />
                            A Complete Financial Bridge.
                        </h1>
                        <p className="text-center md:text-left text-[#525252] text-[14px] md:text-[20px] leading-8 mb-8">
                            From depositing crypto to settling real-world bills. See how Paxalpay
                            connects living in both the crypto and cash worlds.
                        </p>
                        <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2 w-full max-w-[360px]">
                            <StoreButton platform="google" className="w-full justify-center" />
                            <StoreButton platform="apple" className="w-full justify-center" />
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative w-full md:w-[755px] h-[400px] md:h-[504px] flex items-center justify-center md:justify-end">
                        <Image
                            src="/tab1.png"
                            alt="Woman holding cash with Paxalpay app showing wallet balance"
                            width={755}
                            height={504}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
