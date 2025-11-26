"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const tabs = [
    { id: "deposit", label: "Deposit Crypto" },
    { id: "payments", label: "Payments" },
    { id: "transfers", label: "Transfers" },
    { id: "security", label: "Security" },
];

const tabContent = {
    deposit: {
        title: "Instant Auto-Conversion",
        description:
            "Forget the stress of P2P negotiation. Deposit USDT, BTC, or ETH, and receive settled local currency in your wallet instantly. Our automated engine ensures you get transparent, market-leading rates every time.",
        image: "/usdt.png",
        bgColor: "transparent",
    },
    payments: {
        title: "Seamless Payments",
        description:
            "Pay bills, send money, and make purchases directly from your crypto wallet. Convert and spend in real-time with zero hassle.",
        image: "/features_tab2.png",
        bgColor: "#FCF7F1",
    },
    transfers: {
        title: "Fast Transfers",
        description:
            "Send money to anyone, anywhere. Lightning-fast transfers with competitive rates and transparent fees.",
        image: "/features_tab3.png",
        bgColor: "transparent",
    },
    security: {
        title: "Bank-Grade Security",
        description:
            "Your funds are protected with multi-layer security, encryption, and compliance with international standards.",
        image: "/tab4.svg",
        bgColor: "#FCF7F1",
    },
};

export default function FeaturesTabsSection() {
    const [activeTab, setActiveTab] = useState("deposit");
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const tab of tabs) {
                const section = sectionRefs.current[tab.id];
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveTab(tab.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (tabId: string) => {
        const section = sectionRefs.current[tabId];
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20">
                    {/* Left side - Sticky Tabs (hidden on mobile) */}
                    <div className="hidden md:block md:col-span-2">
                        <div className="md:sticky md:top-24">
                            <nav className="flex flex-col gap-2">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => scrollToSection(tab.id)}
                                        className={`relative text-left px-2 py-3 rounded-lg transition-colors ${activeTab === tab.id
                                            ? "text-[#1D78D3] font-semibold"
                                            : "text-[#737373] hover:text-[#262626]"
                                            }`}
                                    >
                                        <span className="text-[18px] font-medium md:font-semibold">{tab.label}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Right side - Scrollable Content */}
                    <div className="md:col-span-10 flex justify-end">
                        <div className="w-full max-w-[900px] md:ml-[400px]">
                            {tabs.map((tab) => (
                                <div
                                    key={tab.id}
                                    ref={(el) => {
                                        sectionRefs.current[tab.id] = el;
                                    }}
                                    className="min-h-[600px] mb-16 last:mb-0"
                                >
                                    <h2 className="text-[#262626] font-bold text-[23px] md:text-[36px] leading-tight mb-4">
                                        {tabContent[tab.id as keyof typeof tabContent].title}
                                    </h2>
                                    <p className="text-[#737373] text-[14px] md:text-[20px] leading-8 mb-8 max-w-[600px]">
                                        {tabContent[tab.id as keyof typeof tabContent].description}
                                    </p>
                                    <div
                                        className="relative w-full max-w-[700px] h-[400px] md:h-[500px] rounded-[24px] overflow-hidden"
                                        style={{ backgroundColor: tabContent[tab.id as keyof typeof tabContent].bgColor }}
                                    >
                                        <Image
                                            src={tabContent[tab.id as keyof typeof tabContent].image}
                                            alt={tabContent[tab.id as keyof typeof tabContent].title}
                                            fill
                                            className="object-contain p-8"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
