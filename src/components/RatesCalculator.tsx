"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface RatesCalculatorProps {
    className?: string;
    initialCurrency?: { code: string; name: string; icon: string; color: string };
    initialAmount?: string;
}

const currencies = [
    { code: "USDT", name: "USDT (TRC-20)", icon: "/crypto/tether.svg", color: "#26A17B" },
    { code: "BTC", name: "Bitcoin (BTC)", icon: "/crypto/bitcoin.svg", color: "#F7931A" },
    { code: "ETH", name: "Ethereum (ETH)", icon: "/crypto/etherum.svg", color: "#627EEA" },
];

export default function RatesCalculator({ className, initialCurrency, initialAmount }: RatesCalculatorProps) {
    const [sendAmount, setSendAmount] = useState("0");
    const [receiveAmount, setReceiveAmount] = useState("0");
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const receiveCurrency = "NGN";



    const rate = 830;
    const refreshTime = "00:27s";

    useEffect(() => {
        if (initialCurrency) {
            setSelectedCurrency(initialCurrency);
        }
        if (initialAmount) {
            const numValue = Math.max(0, parseFloat(initialAmount) || 0);
            setSendAmount(numValue.toString());
            setReceiveAmount((numValue * rate).toFixed(2));
        }
    }, [initialCurrency, initialAmount, rate]);

    const handleSendAmountChange = (value: string) => {
        const numValue = Math.max(0, parseFloat(value) || 0);
        setSendAmount(numValue.toString());
        setReceiveAmount((numValue * rate).toFixed(2));
    };

    const handleCurrencySelect = (currency: typeof currencies[0]) => {
        setSelectedCurrency(currency);
        setIsDropdownOpen(false);
        setSearchTerm("");
    };

    const filteredCurrencies = currencies.filter(currency =>
        currency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        currency.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={className}>
            <div className="rounded-[36px] border-[6px] border-[#D2E25E] bg-[#D2E25E] p-1 max-h-[380px]">
                <div className="rounded-[32px] bg-white p-4 mb-2">
                    <div className="relative inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#F5F5F5] mb-3">
                        <span className="text-[#A3A3A3] text-[14px] font-medium">You send</span>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2 text-[#262626] text-[16px] font-medium"
                        >
                            {selectedCurrency.name}
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                className={`text-[#262626] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                            >
                                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-full min-w-[280px] bg-white rounded-[16px] shadow-lg border border-zinc-200 py-2 z-50">
                                <div className="px-3 pb-2 border-b border-zinc-200">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Search cryptocurrencies..."
                                        className="w-full px-3 py-2 text-[14px] bg-[#F5F5F5] rounded-[8px] outline-none focus:ring-2 focus:ring-blue-500"
                                        autoFocus
                                    />
                                </div>

                                <div className="max-h-[200px] overflow-y-auto">
                                    {filteredCurrencies.length > 0 ? (
                                        filteredCurrencies.map((currency) => (
                                            <button
                                                key={currency.code}
                                                onClick={() => handleCurrencySelect(currency)}
                                                className="w-full px-4 py-3 text-left hover:bg-[#F5F5F5] flex items-center gap-3 transition-colors"
                                            >
                                                <div
                                                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                                                    style={{ backgroundColor: currency.color }}
                                                >
                                                    <Image src={currency.icon} alt={currency.code} width={20} height={20} className="object-contain" />
                                                </div>
                                                <span className="text-[#262626] text-[15px] font-medium">
                                                    {currency.name}
                                                </span>
                                            </button>
                                        ))
                                    ) : (
                                        <div className="px-4 py-3 text-[#A3A3A3] text-[14px] text-center">
                                            No cryptocurrencies found
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-[24px] bg-[#F5F5F5]">
                        <input
                            type="number"
                            value={sendAmount}
                            onChange={(e) => handleSendAmountChange(e.target.value)}
                            min="0"
                            className="bg-transparent text-[32px] text-[#262626] outline-none w-full font-medium"
                            placeholder="0"
                        />
                        <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                            <span className="text-[#A3A3A3] text-[20px] font-semibold">
                                {selectedCurrency.code}
                            </span>
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: selectedCurrency.color }}
                            >
                                <Image src={selectedCurrency.icon} alt={selectedCurrency.code} width={24} height={24} className="object-contain" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-[24px] bg-white p-4">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#F5F5F5] mb-3">
                        <span className="text-[#A3A3A3] text-[14px] font-medium">Receive</span>
                        <span className="text-[#262626] text-[16px] font-medium">
                            Nigerian Naira
                        </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-[24px] bg-[#F5F5F5]">
                        <input
                            type="number"
                            value={receiveAmount}
                            readOnly
                            min="0"
                            className="bg-transparent text-[32px] font-medium text-[#737373] outline-none w-full"
                            placeholder="0"
                        />
                        <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                            <span className="text-[#A3A3A3] text-[20px] font-semibold">
                                {receiveCurrency}
                            </span>
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <div className="w-full h-full flex">
                                    <div className="w-1/3 bg-green-600"></div>
                                    <div className="w-1/3 bg-white"></div>
                                    <div className="w-1/3 bg-green-600"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-4 px-2">
                <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                        <div
                            className="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: selectedCurrency.color }}
                        >
                            <Image src={selectedCurrency.icon} alt={selectedCurrency.code} width={28} height={28} className="object-contain" />
                        </div>
                        <div className="absolute right-0 bottom-0 w-6 h-6 rounded-full overflow-hidden shadow-sm z-10 border-2 border-white">
                            <div className="w-full h-full flex">
                                <div className="w-1/3 bg-green-600"></div>
                                <div className="w-1/3 bg-white"></div>
                                <div className="w-1/3 bg-green-600"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#A3A3A3] text-[12px] font-medium">Rate</div>
                        <div className="text-[#262626] text-[16px] font-medium">
                            {selectedCurrency.code} → {receiveCurrency}
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[#262626] text-[20px] font-medium">
                        ₦{rate}/{selectedCurrency.code}
                    </div>
                    <div className="text-[#7C3AED] text-[13px] font-medium">
                        refresh in {refreshTime}
                    </div>
                </div>
            </div>
        </div>
    );
}
