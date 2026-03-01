import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import LogoBanner from "@/components/LogoBanner";

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
  verification: {
    google: "xWc-nbp-Kr7u0tLKv6jg_nP2p9EhZtX5wSYfD2m5MgU",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="relative z-10 bg-white mb-[350px]">
          <SmoothScroll />
          <Header />
          <div className=" px-[28px] max-w-[1740px] mx-auto">{children}</div>
        </div>
        <LogoBanner />
      </body>
    </html>
  );
}
