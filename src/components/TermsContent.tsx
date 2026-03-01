import React from "react";
import Link from "next/link";

const SITE_URL = "https://paxalpay.com";
const EMAIL_INFO = "info@paxalpay.com";
const EMAIL_LEGAL = "legal@paxalpay.com";

export default function TermsContent() {
  return (
    <section className="min-h-screen pt-20 md:pt-32 bg-[#FFFCF5] -mx-[28px] w-[calc(100%+56px)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-[29px] md:text-[52px] font-bold text-[#262626] mb-4">
            Terms and Conditions
          </h1>
          <p className="text-[#737373] text-[16px]">
            Last updated: February 2025
          </p>
        </div>

        <div className="space-y-10 text-[#262626] text-[14px] md:text-[18px] leading-relaxed">
          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">1. Agreement to terms</h2>
            <p className="mb-4">
              These Terms and Conditions (“<strong>Terms</strong>”) are a binding agreement between you (“<strong>you</strong>”, “<strong>User</strong>”) and PaxalPay Limited (“<strong>Paxalpay</strong>”, “<strong>we</strong>”, “<strong>us</strong>”, “<strong>our</strong>”), a company headquartered in Nigeria, governing your access to and use of the website <a href={SITE_URL} className="text-blue-600 hover:underline">{SITE_URL}</a>, our mobile applications, APIs, and any related services (together, the “<strong>Platform</strong>” or “<strong>Services</strong>”).
            </p>
            <p className="mb-4">
              By accessing or using the Platform, you agree to be bound by these Terms and our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>. If you do not agree, you must not use the Platform. We may update these Terms from time to time; continued use after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">2. Eligibility</h2>
            <p className="mb-4">
              You must be at least 18 years old and have the legal capacity to enter into a binding contract in your jurisdiction. By using the Platform, you represent and warrant that you meet these requirements and that all information you provide is accurate and complete.
            </p>
            <p>
              Our Services may not be available in all jurisdictions. It is your responsibility to ensure that your use of the Platform complies with the laws of your country of residence. We reserve the right to restrict access from certain regions where we do not offer the Services.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">3. Account registration and security</h2>
            <p className="mb-4">
              To use certain features, you must register an account. You agree to provide accurate, current, and complete information and to update it as needed. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.
            </p>
            <p>
              You must notify us immediately at <a href={`mailto:${EMAIL_INFO}`} className="text-blue-600 hover:underline">{EMAIL_INFO}</a> of any unauthorised access or use. We are not liable for any loss or damage arising from your failure to protect your credentials or from unauthorised use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">4. Description of services</h2>
            <p className="mb-4">
              Paxalpay provides a financial technology platform that allows Users to, among other things: deposit supported cryptocurrencies (e.g. USDT, BTC, ETH); convert crypto to local fiat currency; pay bills; transfer funds; and withdraw to bank accounts or use other payment methods we support. The availability of specific features, currencies, and limits may vary by jurisdiction and may change over time.
            </p>
            <p>
              We are a technology and payments service provider. We are not a bank. Banking and regulated financial services, where applicable, may be provided by our licensed partners. Your use of the Platform is subject to the terms of those third-party services where relevant.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">5. Fees and charges</h2>
            <p className="mb-4">
              Use of the Platform may be subject to fees, including conversion fees, withdrawal fees, and other charges as displayed in the app or on the Platform at the time of the transaction. You are responsible for reviewing applicable fees before completing any transaction. By proceeding, you agree to pay all applicable fees.
            </p>
            <p>
              Fees may change. We will notify you of material fee changes where required by law or our policies. Continued use after such changes constitutes acceptance unless you close your account in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">6. Prohibited use</h2>
            <p className="mb-4">You must not use the Platform to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable law, regulation, or third-party right.</li>
              <li>Engage in fraud, money laundering, terrorist financing, or other illegal activity.</li>
              <li>Provide false, misleading, or incomplete information.</li>
              <li>Use the Platform if you are located in a jurisdiction where our Services are prohibited.</li>
              <li>Attempt to gain unauthorised access to our systems, other accounts, or any network.</li>
              <li>Interfere with or disrupt the integrity or performance of the Platform.</li>
              <li>Scrape, harvest, or use automated means to access the Platform without our written consent.</li>
              <li>Resell or sublicense the Services except as expressly permitted by us.</li>
            </ul>
            <p className="mt-4">
              We may suspend or terminate your account and report suspicious activity to the relevant authorities if we believe you have breached these Terms or applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">7. Intellectual property</h2>
            <p>
              The Platform, including its design, text, graphics, logos, software, and other content (excluding user-generated content), is owned by Paxalpay or our licensors and is protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works from our content without our prior written consent. You are granted a limited, non-exclusive, non-transferable licence to access and use the Platform for your personal or internal business use in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">8. Disclaimers</h2>
            <p className="mb-4">
              THE PLATFORM AND SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE”. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mb-4">
              We do not guarantee that the Platform will be uninterrupted, error-free, or free of harmful components. Cryptocurrency and fiat transactions involve risk, including volatility, regulatory change, and technical risk. The content on the Platform is for general information only and does not constitute financial, investment, legal, or tax advice. You should seek independent professional advice before making decisions.
            </p>
            <p>
              Past performance is not indicative of future results. We are not responsible for the actions of third parties, including banking partners, payment processors, or other users.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">9. Limitation of liability</h2>
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PAXALPAY AND ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL) ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE PLATFORM OR THESE TERMS, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.
            </p>
            <p className="mb-4">
              OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE PLATFORM SHALL NOT EXCEED THE GREATER OF (A) THE FEES YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED UNITED STATES DOLLARS (USD 100).
            </p>
            <p>
              Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, our liability will be limited to the maximum extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Paxalpay and its affiliates, directors, officers, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to: (a) your use of the Platform; (b) your breach of these Terms or any applicable law; (c) your violation of any third-party right; or (d) any dispute between you and any third party in connection with the Platform. We reserve the right to assume the exclusive defence and control of any matter subject to indemnification by you, at your expense.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">11. Termination</h2>
            <p className="mb-4">
              We may suspend or terminate your access to the Platform at any time, with or without cause or notice, including for breach of these Terms, fraud, or to comply with law. You may close your account by contacting us at <a href={`mailto:${EMAIL_INFO}`} className="text-blue-600 hover:underline">{EMAIL_INFO}</a>.
            </p>
            <p>
              Upon termination, your right to use the Platform ceases immediately. Provisions that by their nature should survive (including disclaimers, limitation of liability, indemnification, and governing law) will survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">12. Governing law and dispute resolution</h2>
            <p className="mb-4">
              These Terms are governed by the laws of the Federal Republic of Nigeria, without regard to conflict of law principles. Any dispute arising out of or relating to these Terms or the Platform shall first be attempted to be resolved by good-faith negotiation. If the dispute cannot be resolved within thirty (30) days, it may be referred to the courts of Nigeria, and you consent to the exclusive jurisdiction of such courts.
            </p>
            <p>
              If you are a consumer, nothing in these Terms affects your statutory rights under applicable consumer protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">13. General</h2>
            <p className="mb-4">
              <strong>Entire agreement:</strong> These Terms, together with our Privacy Policy and any other policies we publish on the Platform, constitute the entire agreement between you and Paxalpay regarding the Platform.
            </p>
            <p className="mb-4">
              <strong>Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
            </p>
            <p className="mb-4">
              <strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms will not constitute a waiver of such right or provision.
            </p>
            <p className="mb-4">
              <strong>Assignment:</strong> You may not assign or transfer these Terms or your account without our prior written consent. We may assign our rights and obligations without restriction.
            </p>
            <p>
              <strong>Contact:</strong> For questions about these Terms, contact us at <a href={`mailto:${EMAIL_LEGAL}`} className="text-blue-600 hover:underline">{EMAIL_LEGAL}</a> or <a href={`mailto:${EMAIL_INFO}`} className="text-blue-600 hover:underline">{EMAIL_INFO}</a>. For support, visit <Link href="/help" className="text-blue-600 hover:underline">paxalpay.com/help</Link>.
            </p>
          </section>

          <section className="mb-8">
            <p className="font-medium">
              By using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
