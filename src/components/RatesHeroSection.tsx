"use client";
import { useState, useRef } from "react";
import StoreButton from "./StoreButton";
import RatesCalculator from "./RatesCalculator";
import SupportedTokensTable from "./SupportedTokensTable";

const currencies = [
    { code: "USDT", name: "USDT (TRC-20)", icon: "₮", color: "#26A17B" },
    { code: "USDT", name: "USDT (BEP-20)", icon: "₮", color: "#26A17B" },
    { code: "USDT", name: "USDT (ERC-20)", icon: "₮", color: "#26A17B" },
    { code: "BTC", name: "Bitcoin (BTC)", icon: "₿", color: "#F7931A" },
    { code: "ETH", name: "Ethereum (ETH)", icon: "Ξ", color: "#627EEA" },
];

export default function RatesHeroSection() {
    const calculatorRef = useRef<HTMLDivElement>(null);
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
    const [amount, setAmount] = useState("0");

    const handleCalculateClick = (token: { name: string; network: string; code: string; icon: string; iconBg: string }) => {
        // Format network name properly (e.g., "TRC20" -> "TRC-20", "BEP20" -> "BEP-20")
        const formattedNetwork = token.network.replace(/(\D+)(\d+)/, '$1-$2');

        const currency = {
            code: token.code,
            name: `${token.code} (${formattedNetwork})`, // e.g., "USDT (TRC-20)"
            icon: token.icon,
            color: token.iconBg
        };

        setSelectedCurrency(currency);
        setAmount("1");

        setTimeout(() => {
            calculatorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
    };

    return (
        <>
            <section className="pt-28 w-full py-16 min-h-[600px] bg-[#FCF7F1]">
                <div className="px-[28px] grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="text-center md:text-left">
                        <h1 className="text-[#262626] font-bold text-[40px] md:text-[52px] leading-tight">
                            Real-Time Rates.
                            <br className="hidden md:block" />
                            Zero Hidden Fees.
                        </h1>
                        <p className="mt-4 text-[#525252] font-medium text-[20px] leading-7">
                            See exactly what your crypto is worth in Naira. Our rates are
                            <br className="hidden md:block" />
                            updated every 60 seconds to ensure you get the best market value.
                        </p>
                        <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2 w-full max-w-[360px]">
                            <StoreButton platform="google" className="w-full justify-center" />
                            <StoreButton platform="apple" className="w-full justify-center" />
                        </div>
                    </div>

                    <div ref={calculatorRef}>
                        <RatesCalculator
                            className="w-full max-w-[500px] mx-auto md:ml-auto md:mr-0"
                            initialCurrency={selectedCurrency}
                            initialAmount={amount}
                        />
                    </div>
                </div>
            </section>

            <SupportedTokensTable onCalculate={handleCalculateClick} />
        </>
    );
}
