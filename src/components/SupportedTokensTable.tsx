"use client";
import { useState } from "react";
import Image from "next/image";
import FadeIn from "./animations/FadeIn";
import StaggerContainer from "./animations/StaggerContainer";

interface Token {
    name: string;
    network: string;
    rate: string;
    icon: string;
    iconBg: string;
    code: string;
}

const tokens: Token[] = [
    { name: "Tether (USDT)", network: "TRC20", rate: "₦1,655.00", icon: "₮", iconBg: "#26A17B", code: "USDT" },
    { name: "Tether (USDT)", network: "BEP20", rate: "₦1,655.00", icon: "₮", iconBg: "#26A17B", code: "USDT" },
    { name: "Tether (USDT)", network: "ERC20", rate: "₦1,655.00", icon: "₮", iconBg: "#26A17B", code: "USDT" },
    { name: "Tether (USDT)", network: "Bitcoin Network", rate: "₦1,655.00", icon: "₮", iconBg: "#26A17B", code: "USDT" },
    { name: "Tether (USDT)", network: "Arbitrum", rate: "₦1,655.00", icon: "₮", iconBg: "#26A17B", code: "USDT" },
    { name: "Tether (USDT)", network: "Solana Network", rate: "₦1,655.00", icon: "₮", iconBg: "#26A17B", code: "USDT" },
    { name: "USD Coin (USDC)", network: "ERC20", rate: "₦1,645.00", icon: "$", iconBg: "#2775CA", code: "USDC" },
    { name: "USD Coin (USDC)", network: "Solana Network", rate: "₦1,645.00", icon: "$", iconBg: "#2775CA", code: "USDC" },
];

const getNetworkBadge = (network: string) => {
    switch (network.toLowerCase()) {
        case "trc20":
            return (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#EB0029">
                    <path d="M3.2 2.3l17 3.4.1.2-7.6 15.8h-.3L2.1 3.5l1.1-1.2zm1.6 2.3l5.6 12.1 5.8-12-11.4-.1zm6.7 11.7l6.1-12.7 2.8.6-8.5 17.7-.4-.1-6.4-13.8 2.9-.3 5.5 12.1z" />
                </svg>
            );

        case "bep20":
            return (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#F3BA2F">
                    <path d="M12 1.8L7.1 4.6l4.9 2.8 4.9-2.8L12 1.8zM4 7.5v5.7l4.9 2.8V10.3L4 7.5zm16 0l-4.9 2.8v5.7L20 13.2V7.5zM12 12l4.9 2.8-4.9 2.8-4.9-2.8L12 12z" />
                </svg>
            );

        case "erc20":
        case "ethereum":
            return (
                <svg width="14" height="14" viewBox="0 0 256 417" fill="#627EEA">
                    <path d="M127.6 0L124 12.3v271.2l3.6 3.6 127.6-75.4z" />
                    <path d="M127.6 0L0 211.7l127.6 75.4V0z" />
                    <path d="M127.6 342.7l-3 3.7v67.4l3-8.7 127.7-179.8z" />
                    <path d="M127.6 413.8V342.7L0 225.3z" />
                </svg>
            );

        case "bitcoin network":
            return (
                <svg width="14" height="14" viewBox="0 0 32 32" fill="#F7931A">
                    <path d="M16 0a16 16 0 1016 16A16 16 0 0016 0zm2.2 23.3h-1.7v2.4h-1.5v-2.4h-1.4v-1.4h1.4v-.9h-1.4v-1.5h1.4v-7.2h3.1a3.4 3.4 0 013.4 3.4 3.4 3.4 0 01-2.1 3.1 3.4 3.4 0 011.9 3.2c0 2.2-1.8 3.3-4.1 3.3zm-.8-9.9h-1.9v2.6h1.9a1.3 1.3 0 100-2.6zm.2 4h-2.1v2.8h2.1a1.4 1.4 0 000-2.8z" />
                </svg>
            );

        case "arbitrum":
            return (
                <svg width="14" height="14" viewBox="0 0 256 256">
                    <path fill="#2D3748" d="M128 0L0 74v108l128 74 128-74V74z" />
                    <path fill="#28A0F0" d="M128 28l96 54v92l-96 54-96-54V82z" />
                    <path fill="#fff" d="M164 176l-18 10-30-88 18-10 30 88zM110 176l-18 10-30-88 18-10 30 88z" />
                </svg>
            );

        case "solana network":
        case "solana":
            return (
                <svg width="14" height="14" viewBox="0 0 397 311">
                    <linearGradient id="sol" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#00FFA3" />
                        <stop offset="100%" stopColor="#DC1FFF" />
                    </linearGradient>
                    <path fill="url(#sol)" d="M64 224h297l-65 64H0z" />
                    <path fill="url(#sol)" d="M64 127h297l-65 64H0z" />
                    <path fill="url(#sol)" d="M64 31h297L296 95H0z" />
                </svg>
            );

        default:
            return null;
    }
};

interface SupportedTokensTableProps {
    onCalculate?: (token: Token) => void;
}

export default function SupportedTokensTable({ onCalculate }: SupportedTokensTableProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [visibleLimit, setVisibleLimit] = useState(6);

    const filteredTokens = tokens.filter(token =>
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.network.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const visibleTokens = filteredTokens.slice(0, visibleLimit);

    const handleCalculateClick = (token: Token) => {
        if (onCalculate) {
            onCalculate(token);
        }
    };

    const handleViewMore = () => {
        setVisibleLimit(prev => prev + 2);
    };

    return (
        <section id="supported-tokens" className="py-16">
            <div className="max-w-[900px] mx-auto">
                <FadeIn className="mb-6">
                    <div className="relative">
                        <svg
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3A3A3]"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M14 14l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search token"
                            className="w-full pl-12 pr-4 py-3 bg-[#F5F5F5] rounded-[12px] text-[15px] outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </FadeIn>

                <div className="bg-white rounded-[24px] overflow-hidden">
                    {/* Table Header */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 bg-[#F9FAFB]">
                        <div className="text-[#737373] text-[14px] font-medium">Assets</div>
                        <div className="hidden md:block text-[#737373] text-[14px] font-medium">Network</div>
                        <div className="text-[#737373] text-[14px] font-medium text-right md:text-left">Rate (sell)</div>
                        <div className="hidden md:block"></div>
                    </div>

                    {/* Table Body */}
                    <StaggerContainer staggerChildren={0.05}>
                        {visibleTokens.length > 0 ? (
                            visibleTokens.map((token, index) => (
                                <FadeIn key={index} direction="up">
                                    <div
                                        className="grid grid-cols-2 md:grid-cols-4 gap-4  py-4"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="relative">
                                                <div
                                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                                                    style={{ backgroundColor: token.iconBg }}
                                                >
                                                    {token.icon}
                                                </div>

                                                {/* Dynamic Network Badge */}
                                                {getNetworkBadge(token.network) && (
                                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-sm">
                                                        {getNetworkBadge(token.network)}
                                                    </div>
                                                )}
                                            </div>
                                            <span className="text-[#262626] text-[14px] md:text-[18px] font-medium">{token.name}</span>
                                        </div>

                                        <div className="hidden md:flex items-center">
                                            <span className="text-[#262626] text-[14px] md:text-[18px]">{token.network}</span>
                                        </div>

                                        <div className="flex items-center justify-end md:justify-start">
                                            <span className="text-[#262626] text-[14px] md:text-[18px] font-semibold">{token.rate}</span>
                                        </div>

                                        <div className="hidden md:flex items-center justify-end">
                                            <button
                                                onClick={() => handleCalculateClick(token)}
                                                className="text-[#1D78D3] text-[15px] font-medium hover:underline"
                                            >
                                                Calculate
                                            </button>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))
                        ) : (
                            <div className="px-6 py-8 text-center text-[#A3A3A3] text-[15px]">
                                No tokens found
                            </div>
                        )}
                    </StaggerContainer>
                </div>

                {filteredTokens.length > visibleLimit && (
                    <div className="mt-6 text-center">
                        <button
                            onClick={handleViewMore}
                            className="text-[#1D78D3] text-[16px] font-semibold hover:underline"
                        >
                            View all supported Tokens
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
