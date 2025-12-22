"use client";
import { useState } from "react";
import Image from "next/image";


interface Token {
    name: string;
    network: string;
    rate: string;
    icon: string;
    iconBg: string;
    code: string;
}

const tokens: Token[] = [
    { name: "Tether (USDT)", network: "TRC20", rate: "₦1,655.00", icon: "/crypto/tether.svg", iconBg: "#26A17B", code: "USDT" },
    { name: "Tether (USDT)", network: "BEP20", rate: "₦1,655.00", icon: "/crypto/tether.svg", iconBg: "#26A17B", code: "USDT" },
    { name: "Tether (USDT)", network: "ERC20", rate: "₦1,655.00", icon: "/crypto/tether.svg", iconBg: "#26A17B", code: "USDT" },
    { name: "Tether (USDT)", network: "Bitcoin Network", rate: "₦1,655.00", icon: "/crypto/tether.svg", iconBg: "#26A17B", code: "USDT" },
    { name: "Tether (USDT)", network: "Arbitrum", rate: "₦1,655.00", icon: "/crypto/tether.svg", iconBg: "#26A17B", code: "USDT" },
    { name: "Tether (USDT)", network: "Solana Network", rate: "₦1,655.00", icon: "/crypto/tether.svg", iconBg: "#26A17B", code: "USDT" },
    { name: "USD Coin (USDC)", network: "ERC20", rate: "₦1,645.00", icon: "/crypto/usdc.svg", iconBg: "#2775CA", code: "USDC" },
    { name: "USD Coin (USDC)", network: "Solana Network", rate: "₦1,645.00", icon: "/crypto/usdc.svg", iconBg: "#2775CA", code: "USDC" },
];

const getNetworkBadge = (network: string) => {
    switch (network.toLowerCase()) {
        case "trc20":
            return <Image src="/crypto/tron.svg" alt="TRC20" width={14} height={14} />;

        case "bep20":
            return <Image src="/crypto/binance.svg" alt="BEP20" width={14} height={14} />;

        case "erc20":
        case "ethereum":
            return <Image src="/crypto/etherum.svg" alt="Ethereum" width={14} height={14} />;

        case "bitcoin network":
            return <Image src="/crypto/bitcoin.svg" alt="Bitcoin" width={14} height={14} />;

        case "arbitrum":
            return <Image src="/crypto/arbitrum.svg" alt="Arbitrum" width={14} height={14} />;

        case "solana network":
        case "solana":
            return <Image src="/crypto/solana.svg" alt="Solana" width={14} height={14} />;

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
                <div className="mb-6">
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
                </div>

                <div className="bg-white rounded-[24px] overflow-hidden">
                    {/* Table Header */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 bg-[#F9FAFB]">
                        <div className="text-[#737373] text-[14px] font-medium">Assets</div>
                        <div className="hidden md:block text-[#737373] text-[14px] font-medium">Network</div>
                        <div className="text-[#737373] text-[14px] font-medium text-right md:text-left">Rate (sell)</div>
                        <div className="hidden md:block"></div>
                    </div>

                    {/* Table Body */}
                    <div>
                        {visibleTokens.length > 0 ? (
                            visibleTokens.map((token, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-2 md:grid-cols-4 gap-4  py-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div
                                                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                                                style={{ backgroundColor: token.iconBg }}
                                            >
                                                <Image src={token.icon} alt={token.name} width={20} height={20} className="object-contain" />
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
                            ))
                        ) : (
                            <div className="px-6 py-8 text-center text-[#A3A3A3] text-[15px]">
                                No tokens found
                            </div>
                        )}
                    </div>
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
