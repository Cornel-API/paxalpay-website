import Image from "next/image";
import FeatureRibbon from "./FeatureRibbon";


export default function GlobalAmbitionSection() {
    return (
        <>
            <section className="py-16 bg-[#F9FAFB]">
                <div className="max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        {/* Left side - Text content */}
                        <div className="self-start">
                            <h2 className="text-[#262626] font-bold text-[23px] md:text-[36px] leading-none mb-6">
                                Local Settlement. Global Ambition.
                            </h2>
                            <p className="text-[#525252] text-[14px] md:text-[20px] leading-8">
                                Right now, we settle in Nigerian Naira (NGN). But we're not stopping there.
                                Our mission is to make crypto useful across Africa and beyond. Here's what's
                                live and what's coming.
                            </p>
                        </div>

                        {/* Right side - Map */}
                        <div className="w-full">
                            <div className="relative w-full max-w-[400px] h-[390px] mx-auto md:max-w-[635px] md:h-[621px] md:mx-0">
                                <Image
                                    src="/map.png"
                                    alt="Africa map showing Nigeria highlighted with supported commercial banks"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FeatureRibbon
                items={[
                    "Instant Settlement",
                    "Secure Transactions",
                    "24/7 Support",
                    "Real-time Rates",
                    "Zero Hidden Fees",
                    "Fast Withdrawals",
                ]}
            />
        </>
    );
}
