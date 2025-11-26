import Image from "next/image";

export default function Footer() {
    return (
        <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                {/* Logo + Copyright */}
                <div className="md:col-span-4 text-left">
                    <div className="flex justify-start items-center gap-2">
                        <Image src="/logo.svg" alt="Paxalpay" width={203} height={39} />
                    </div>
                    <div className="mt-4 text-left text-[#525252] text-sm">
                        © 2025 Paxalpay Technologies. All rights reserved.
                    </div>
                </div>

                {/* Footer Links */}
                <div className="md:col-span-8 flex flex-wrap justify-start gap-10 md:gap-32 mt-10 md:mt-0">
                    <div className="min-w-[120px] text-left">
                        <div className="text-[#737373] font-medium text-[15px] md:text-[18px] mb-3">Product</div>
                        <div className="flex flex-col gap-3 text-[#262626] font-medium text-[15px] md:text-[18px]">
                            <a href="#">Deposit Crypto</a>
                            <a href="#">Bill Payments</a>
                            <a href="#">Transfers</a>
                            <a href="#">Live Rates</a>
                            <a href="#">How It Works</a>
                            <a href="#">Download App</a>
                        </div>
                    </div>

                    <div className="min-w-[120px] text-left">
                        <div className="text-[#737373] font-medium text-[15px] md:text-[18px] mb-3">Support</div>
                        <div className="flex flex-col gap-3 text-[#262626] font-medium text-[15px] md:text-[18px]">
                            <a href="#">Help Center</a>
                            <a href="#">Contact Support</a>
                            <a href="#">FAQs</a>
                        </div>
                    </div>

                    <div className="min-w-[120px] text-left">
                        <div className="text-[#737373] font-medium text-[15px] md:text-[18px] mb-3">Company</div>
                        <div className="flex flex-col gap-3 text-[#262626] font-medium text-[15px] md:text-[18px]">
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">Blog</a>
                            <a href="#">Press</a>
                        </div>
                    </div>

                    <div className="min-w-[120px] text-left">
                        <div className="text-[#737373] font-medium text-[15px] md:text-[18px] mb-3">Legal</div>
                        <div className="flex flex-col gap-3 text-[#262626] font-medium text-[15px] md:text-[18px]">
                            <a href="#">Terms of Service</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Compliance & Licenses</a>
                            <a href="#">AML / KYC Policy</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-10 text-[#525252] text-[12px] md:text-[18px] leading-6 text-start md:text-left md:px-0">
                2025 Paxalpay. All Rights Reserved. Paxalpay is a financial technology company and is not a bank. Banking services, where applicable, are provided by our regulated banking partner(s), [Name of Partner Bank/Licensed Institution], Member [Relevant Regulatory Body, e.g., NDIC or FDIC], and other licensed financial service providers. The content on this website is provided for informational purposes only and does not constitute financial, investment, legal, or tax advice. Any products or services offered, including investment options, involve inherent risks, and potential investors should consider their own personal financial situation and consult with a professional advisor before making any decisions. Past performance is not indicative of future results. [Your Company Name] is licensed and regulated by the [Primary Regulator, e.g., Central Bank of Nigeria (CBN)] as a [Specific License Type, e.g., Payments Solutions Provider] and operates in strict compliance with applicable laws and regulations in all jurisdictions where we conduct business. For complete terms, conditions, privacy policies, and regulatory disclosures, please refer to the links provided below. Unauthorized use, reproduction, or distribution of any content from this site is strictly prohibited.
            </div>
        </section>
    );
}
