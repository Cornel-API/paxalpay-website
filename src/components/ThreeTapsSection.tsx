import Image from "next/image";
import FadeIn from "./animations/FadeIn";
import StaggerContainer from "./animations/StaggerContainer";

const steps = [
    {
        title: "Deposit",
        description: "Send BTC, ETH, USDT, or 15+ other tokens to your PaxalPay wallet",
        image: "/qr_code.png",
        bgColor: "#FAFAFA",
    },
    {
        title: "Instant Conversion",
        description: "See exactly what you'll get. No hidden fees. No surprises.",
        image: "/Notification.png",
        bgColor: "#FAFAFA",
    },
    {
        title: "Spend or Withdraw",
        description: "Currency hits your wallet instantly. Withdraw, pay bills, or send to friends.",
        image: "/tag.png",
        bgColor: "#FAFAFA",
    },
];

export default function ThreeTapsSection() {
    return (
        <section className="py-16 bg-white">
            <FadeIn>
                <h2 className="text-[#262626] font-bold text-[23px] md:text-[32px] leading-none mb-12 text-center">
                    From Crypto to Cash in 3 Taps
                </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerChildren={0.2}>
                {steps.map((step, index) => (
                    <FadeIn key={index}>
                        <div
                            className="rounded-[24px] p-8 flex flex-col"
                            style={{ backgroundColor: step.bgColor }}
                        >
                            <h3 className="text-[#262626] font-bold text-[18px] md:text-[23px] mb-3">
                                {step.title}
                            </h3>
                            <p className="text-[#525252] text-[14px] md:text-[18px] leading-6 mb-8">
                                {step.description}
                            </p>
                            <div className="relative w-full h-[300px] mt-auto">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </StaggerContainer>
        </section>
    );
}
