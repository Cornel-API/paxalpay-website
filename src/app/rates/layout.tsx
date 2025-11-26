import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Live Rates - Paxalpay",
    description: "Real-time crypto to Naira exchange rates. Zero hidden fees.",
};

export default function RatesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
