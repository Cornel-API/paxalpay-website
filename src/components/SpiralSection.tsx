import Image from "next/image";
import StoreButton from "./StoreButton";
import FeatureRibbon from "./FeatureRibbon";

export default function SpiralSection() {
  return (
    <>
      <section className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden">
        <div className="relative w-full h-[680px] md:hidden">
          <Image src="/Vector.png" alt="Spiral background" fill className="object-cover" priority />

          <div className="absolute top-8 inset-x-0 flex flex-col items-center gap-4">
            <h2 className="text-center font-[700] font-bold text-[23px] md:text-[52px] text-[#262626]">Your money, moving the<br /> way you need it.</h2>
            <div className="flex items-center gap-3">
              <StoreButton platform="google" />
              <StoreButton platform="apple" />
            </div>
          </div>

          <div className="absolute top-50 inset-x-0 flex justify-center gap-4">
            <Image src="/right_side.png" alt="Left side" width={160} height={280} className="rounded-[14px]" />
            <Image src="/left_side1.png" alt="Right side 1" width={160} height={280} className="rounded-[14px]" />
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
            <Image src="/middle.png" alt="App phone" width={320} height={380} className="flex-shrink-0" priority />
          </div>
        </div>

        <div className="relative w-full h-[820px] hidden md:block">
          <Image src="/spiral.png" alt="Spiral background" fill className="object-cover" priority />

          <div className="absolute top-10 inset-x-0 flex flex-col items-center gap-4">
            <h2 className="text-center font-[800] text-[40px] text-[#262626]">Your money, moving the<br className="hidden md:block" /> way you need it.</h2>
            <div className="flex items-center gap-4">
              <StoreButton platform="google" />
              <StoreButton platform="apple" />
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
            <Image src="/middle.png" alt="App phone" width={400} height={480} className="flex-shrink-0" priority />
          </div>

          <div className="absolute bottom-[150px] left-[calc(50%-580px)]">
            <div className="relative flex-shrink-0">
              <Image src="/right_side.png" alt="Left side" width={320} height={570} className="rounded-[18px]" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-8 w-28 rounded-full bg-black/10" />
            </div>
          </div>

          <div className="absolute bottom-[150px] left-[calc(50%+260px)]">
            <div className="relative flex-shrink-0">
              <Image src="/left_side1.png" alt="Right side 1" width={320} height={580} className="rounded-[18px]" />
            </div>
          </div>

          <div className="absolute bottom-[250px] left-[calc(50%+260px+375px)]">
            <div className="relative h-[147px] w-[220px]">
              <Image src="/left_side.png" alt="Right side 2" fill className="object-contain rounded-[12px]" />
            </div>
          </div>
        </div>
      </section>
      <FeatureRibbon
        items={[
          "Instant conversion",
          "No P2P risk",
          "Pay bills fast",
          "Transparent rates",
          "Fast transfers",
          "Stablecoins supported",
          "On-chain verified",
        ]}
      />

      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Logo + Copyright */}
          <div className="md:col-span-4 text-left">
            <div className="flex justify-start items-center gap-2">
              <Image src="/logo.svg" alt="Paxalpay" width={112} height={28} />
            </div>
          </div>

          {/* Footer Links */}
          <div className="md:col-span-8 flex flex-wrap justify-start gap-10 md:gap-32 mt-10 md:mt-0">

            <div className="min-w-[120px] text-left">
              <div className="text-[#737373] font-medium font-[500] text-[15px] md:text-[18px] mb-3">Product</div>
              <div className="flex flex-col gap-3 text-[#262626] font-[500] font-medium text-[15px] md:text-[18px] ">
                <a href="#">Deposit Crypto</a>
                <a href="#">Live Rates</a>
                <a href="#">How It Works</a>
                <a href="#">Download App</a>
              </div>
            </div>

            <div className="min-w-[120px] text-left">
              <div className="text-[#737373] font-medium font-[500] text-[15px] md:text-[18px] mb-3">Support</div>
              <div className="flex flex-col gap-3 text-[#262626] font-[500] font-medium text-[15px] md:text-[18px] ">
                <a href="#">Help Center</a>
                <a href="#">Contact Support</a>
                <a href="#">FAQs</a>
                <a href="#">Security Tips</a>
              </div>
            </div>

            <div className="min-w-[120px] text-left">
              <div className="text-[#737373] font-medium font-[500] text-[15px] md:text-[18px] mb-3">Company</div>
              <div className="flex flex-col gap-3 text-[#262626] font-[500] font-medium text-[15px] md:text-[18px] ">
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Blog</a>
                <a href="#">Press</a>
              </div>
            </div>

            <div className="min-w-[120px] text-left">
              <div className="text-[#737373] font-medium font-[500] text-[15px] md:text-[18px] mb-3">Legal</div>
              <div className="flex flex-col gap-3 text-[#262626] font-[500] font-medium text-[15px] md:text-[18px] ">
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Compliance & Licenses</a>
                <a href="#">AML / KYC Policy</a>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright (bottom-left before Disclaimer) */}
        <div className="mt-4 md:-mt-4 text-left text-[#525252] text-sm">
          © 2025 Paxalpay Technologies. All rights reserved.
        </div>


        {/* Disclaimer */}
        <div className="mt-10 text-[#525252] text-[12px] md:text-[18px] leading-6 text-start md:text-left md:px-0">
          2025 Paxalpay. All Rights Reserved. Paxalpay is a financial technology company and is not a bank. Banking services, where applicable, are provided by our regulated banking partner(s), [Name of Partner Bank/Licensed Institution], Member [Relevant Regulatory Body, e.g., NDIC or FDIC], and other licensed financial service providers. The content on this website is provided for informational purposes only and does not constitute financial, investment, legal, or tax advice. Any products or services offered, including investment options, involve inherent risks, and potential investors should consider their own personal financial situation and consult with a professional advisor before making any decisions. Past performance is not indicative of future results. [Your Company Name] is licensed and regulated by the [Primary Regulator, e.g., Central Bank of Nigeria (CBN)] as a [Specific License Type, e.g., Payments Solutions Provider] and operates in strict compliance with applicable laws and regulations in all jurisdictions where we conduct business. For complete terms, conditions, privacy policies, and regulatory disclosures, please refer to the links provided below. Unauthorized use, reproduction, or distribution of any content from this site is strictly prohibited.
        </div>
      </section>

    </>
  );
}