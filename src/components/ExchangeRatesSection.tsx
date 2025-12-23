"use client";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./animations/FadeIn";
import StaggerContainer from "./animations/StaggerContainer";

const rates = [
    {
        token: "BTC",
        icon: "/crypto/bitcoin.svg",
        iconBg: "#F7931A",
        rate: "₦45,234,500"
    },
    {
        token: "USDT",
        icon: "/crypto/tether.svg",
        iconBg: "#26A17B",
        rate: "₦2,847,320"
    },
    {
        token: "TRON",
        icon: "/crypto/tron.svg",
        iconBg: "transparent",
        rate: "₦154,500"
    },
];

export default function ExchangeRatesSection() {
    return (
        <section className="py-16 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-58 items-start">
                {/* Left side - Text content */}
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

                {/* Right side - Live rates */}
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
                                        {/* Overlapping circles - Network badge as subscript */}
                                        <div className="relative w-12 h-12">
                                            {/* Crypto logo - main */}
                                            <div
                                                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                                                style={{ backgroundColor: item.iconBg }}
                                            >
                                                <Image
                                                    src={item.icon}
                                                    alt={item.token}
                                                    width={20}
                                                    height={20}
                                                    className="object-contain"
                                                />
                                            </div>

                                            {/* Network badge - subscript (bottom-right) */}
                                            <div className="absolute right-2 bottom-1 w-5 h-5 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-sm">
                                                {/* Using Nigerian flag as network badge for now based on context, 
                                                    or should I use the network icon? 
                                                    "crypto and the nigeria logo subscript i want it to match how we did it in rate tab" 
                                                    The rate tab uses network badges. 
                                                    Wait, the user said "match how we did it in rate tab" but also mentioned "nigeria logo subscript". 
                                                    The rates tab (SupportedTokensTable) uses network badges (TRC20, etc). 
                                                    The current ExchangeRatesSection HAS a Nigeria flag subscript.
                                                    Maybe the user wants the Nigeria flag to be a subscript LIKE the network badges in the rate tab?
                                                    The current implementation ALREADY has the Nigeria flag as a subscript.
                                                    "i like the one in the rates tab" -> this implies they like the STYLE of the rates tab.
                                                    The rates tab has a specific styling for the icon (bg color, size) and the subscript.
                                                    I will replicate the icon styling (bg color, inner padding/centering) and the subscript positioning/styling from SupportedTokensTable.
                                                    
                                                    In SupportedTokensTable:
                                                    - Main icon: w-10 h-10, rounded-full, flex center, specific bg color.
                                                    - Subscript: -bottom-1 -right-1, w-5 h-5, white border.
                                                    
                                                    The current ExchangeRatesSection has:
                                                    - Main: w-10 h-10, bg-white (plain), p-1.
                                                    - Subscript: right-0 bottom-0, w-5 h-5.
                                                    
                                                    I will update to match SupportedTokensTable:
                                                    1. Add iconBg to data.
                                                    2. Use the same structure for the main icon container.
                                                    3. Use the same structure for the subscript container.
                                                    4. Keep the Nigeria flag as the subscript content as requested ("nigeria logo subscript").
                                                */}
                                                <div className="w-full h-full flex rounded-full overflow-hidden">
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
            </div>
        </section>
    );
}
