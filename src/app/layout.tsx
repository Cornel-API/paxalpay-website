import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Paxalpay - Skip the P2P Wait. Spend Your Crypto Instantly",
  description: "Deposit USDT, BTC, or ETH and get settled in local currency immediately. Pay bills, transfer to any bank, or scan-to-pay. No merchants, no delays, no risk.",
  icons: {
    icon: '/logo_blue.svg',
    apple: '/logo_blue.svg',
  },
  openGraph: {
    title: "Paxalpay - Skip the P2P Wait. Spend Your Crypto Instantly",
    description: "Deposit USDT, BTC, or ETH and get settled in local currency immediately. Pay bills, transfer to any bank, or scan-to-pay.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-x-hidden`}>
        <Header />
        <div className=" px-[28px]">{children}</div>
      </body>
    </html>
  );
}
