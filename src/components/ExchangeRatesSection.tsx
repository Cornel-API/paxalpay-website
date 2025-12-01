"use client";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./animations/FadeIn";
import StaggerContainer from "./animations/StaggerContainer";

const rates = [
    {
        token: "BTC",
        logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
        rate: "₦45,234,500"
    },
    {
        token: "USDT",
        logo: "https://cryptologos.cc/logos/tether-usdt-logo.svg",
        rate: "₦2,847,320"
    },
    {
        token: "TRON",
        logo: "https://cryptologos.cc/logos/tron-trx-logo.svg",
        rate: "₦154,500"
    },
];

export default function ExchangeRatesSection() {
    return (
        <section className="py-16 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left side - Text content */}
                <FadeIn direction="right">
                    <div>
                        <h2 className="text-center md:text-left text-[#262626] font-bold  text-[23px] md:text-[36px] leading-none">
                            No Hidden Fees.<br />Just Honest Numbers.
                        </h2>
                        <p className="hidden md:block mt-4 text-[#525252] font-medium text-[14px] md:text-[18px] leading-7">
                            We show our fee upfront. Others hide it <br />in the exchange rate.
                        </p>
                        <Link
                            href="/rates#supported-tokens"
                            scroll={true}
                            className="hidden md:inline-flex mt-6 px-6 py-3 bg-blue-600 text-white rounded-[16px] font-bold text-[15px] hover:bg-blue-700 transition-colors"
                        >
                            View Supported Tokens
                        </Link>
                    </div>
                </FadeIn>

                {/* Right side - Live rates */}
                <FadeIn direction="left" delay={0.2}>
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-[#262626] font-bold  text-[16px] md:text-[23px] ">
                                Live Exchange Rates
                            </h3>
                            <span className="text-[#A3A3A3] text-[14px] md:text-[18px] font-bold">
                                Updated 2 mins ago
                            </span>
                        </div>

                        <StaggerContainer className="space-y-4" staggerChildren={0.1}>
                            {rates.map((item) => (
                                <FadeIn key={item.token} direction="up">
                                    <div
                                        className="flex items-center justify-between p-4 rounded-[16px] bg-white "
                                    >
                                        {/* Left: Overlapping icons + token name */}
                                        <div className="flex items-center gap-3">
                                            {/* Overlapping circles - Nigerian flag as subscript */}
                                            <div className="relative w-12 h-12">
                                                {/* Crypto logo - main */}
                                                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center p-1">
                                                    <Image
                                                        src={item.logo}
                                                        alt={item.token}
                                                        width={32}
                                                        height={32}
                                                        className="object-contain"
                                                    />
                                                </div>
                                                {/* Nigerian flag - subscript (bottom-right) */}
                                                <div className="absolute right-0 bottom-0 w-5 h-5 rounded-full overflow-hidden shadow-sm">
                                                    <div className="w-full h-full flex">
                                                        <div className="w-1/3 bg-green-600"></div>
                                                        <div className="w-1/3 bg-white"></div>
                                                        <div className="w-1/3 bg-green-600"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <span className="text-[#262626] font-bold text-[14px] md:text-[18px]">
                                                1 {item.token}
                                            </span>
                                        </div>

                                        {/* Middle: Arrow */}
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="text-zinc-400 flex-shrink-0"
                                        >
                                            <path
                                                d="M5 12h14m0 0l-7-7m7 7l-7 7"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>

                                        {/* Right: Rate */}
                                        <span className="text-[#262626] font-bold  md:text-[18px] text-[14px]">
                                            {item.rate}
                                        </span>
                                    </div>
                                </FadeIn>
                            ))}
                        </StaggerContainer>
                        <div className="mt-6 md:hidden">
                            <Link
                                href="/rates#supported-tokens"
                                scroll={true}
                                className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-[16px] font-bold text-[15px] hover:bg-blue-700 transition-colors"
                            >
                                View Supported Tokens
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
