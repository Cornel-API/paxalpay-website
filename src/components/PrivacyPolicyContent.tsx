import React from "react";
import Link from "next/link";

const SITE_URL = "https://paxalpay.com";
const EMAIL_INFO = "info@paxalpay.com";
const EMAIL_PRIVACY = "privacy@paxalpay.com";

export default function PrivacyPolicyContent() {
  return (
    <section className="min-h-screen pt-20 md:pt-32 bg-[#FFFCF5] -mx-[28px] w-[calc(100%+56px)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-[29px] md:text-[52px] font-bold text-[#262626] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#737373] text-[16px]">
            Last updated: February 2025
          </p>
        </div>

        <div className="space-y-10 text-[#262626] text-[14px] md:text-[18px] leading-relaxed">
          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">1. Introduction and scope</h2>
            <p className="mb-4">
              PaxalPay Limited (“<strong>Paxalpay</strong>”, “<strong>we</strong>”, “<strong>us</strong>”, “<strong>our</strong>”) operates the website{" "}
              <a href={SITE_URL} className="text-blue-600 hover:underline">{SITE_URL}</a>, mobile applications, APIs, and related digital platforms (together, the “<strong>Site</strong>”). We are headquartered in Nigeria and provide financial technology services, including crypto-to-fiat conversion, payments, and related services (the “<strong>Services</strong>”).
            </p>
            <p className="mb-4">
              This Privacy Policy explains how we collect, use, disclose, store, and protect your personal data when you use our Site and Services. It applies to all visitors, users, and customers (together, “<strong>you</strong>” or “<strong>Users</strong>”). By accessing or using our Site or Services, you agree to this Privacy Policy. If you do not agree, you must not use our Site or Services.
            </p>
            <p>
              We process personal data in line with applicable law, including the Nigeria Data Protection Act 2023 (NDPA) and, where relevant, other data protection laws. For users in the European Economic Area (EEA) or the United Kingdom, we rely on lawful bases under the GDPR/UK GDPR where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">2. Data controller</h2>
            <p>
              The data controller responsible for your personal data is PaxalPay Limited. For privacy-related requests or complaints you may contact us at{" "}
              <a href={`mailto:${EMAIL_PRIVACY}`} className="text-blue-600 hover:underline">{EMAIL_PRIVACY}</a> or{" "}
              <a href={`mailto:${EMAIL_INFO}`} className="text-blue-600 hover:underline">{EMAIL_INFO}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">3. Information we collect</h2>
            <p className="mb-4">
              We collect information that identifies you or relates to you (“<strong>Personal Data</strong>”) in the following ways.
            </p>
            <h3 className="text-[16px] md:text-[20px] font-semibold mb-3">3.1 Information you provide</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Account and identity:</strong> name, date of birth, email address, phone number, address, government-issued ID, photograph, and biometric data where required for verification.</li>
              <li><strong>Financial and payment:</strong> bank account details, payment method information, transaction history, and related verification information.</li>
              <li><strong>Communications:</strong> content of messages you send to us (e.g. via support, chat, or email).</li>
              <li><strong>Preferences and marketing:</strong> communication preferences and marketing consents where you have opted in.</li>
            </ul>
            <h3 className="text-[16px] md:text-[20px] font-semibold mb-3">3.2 Information we collect automatically</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Device and usage:</strong> device type, operating system, unique device identifiers, IP address, browser type, and language.</li>
              <li><strong>Usage data:</strong> pages visited, features used, time and date of access, and referral source.</li>
              <li><strong>Location:</strong> approximate or precise location where permitted by your device settings and applicable law.</li>
            </ul>
            <h3 className="text-[16px] md:text-[20px] font-semibold mb-3">3.3 Information from third parties</h3>
            <p className="mb-4">
              We may receive information from identity verification providers, payment processors, banks, and other partners necessary to provide the Services, prevent fraud, and comply with law.
            </p>
            <p>
              Providing certain data is necessary to use parts of our Services (e.g. account creation and transactions). If you do not provide required information, we may not be able to offer you those Services.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">4. How we use your information</h2>
            <p className="mb-4">We use your Personal Data for the following purposes and, where required by law, on the stated lawful basis:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Providing the Services:</strong> account creation and management, identity verification, processing deposits, conversions, withdrawals, bill payments, and transfers.</li>
              <li><strong>Contract performance:</strong> fulfilling our contract with you and communicating about your account and transactions.</li>
              <li><strong>Security and fraud prevention:</strong> protecting our systems and users, detecting and preventing fraud, money laundering, and other illegal activity.</li>
              <li><strong>Legal and regulatory compliance:</strong> meeting obligations under the NDPA, anti-money laundering, tax, and other applicable laws and responding to lawful requests from authorities.</li>
              <li><strong>Improvement and analytics:</strong> analysing usage to improve our Site and Services, develop new features, and conduct research (including in anonymised or aggregated form).</li>
              <li><strong>Customer support:</strong> responding to your enquiries and resolving issues.</li>
              <li><strong>Marketing:</strong> sending you product updates and marketing communications only where you have consented or where we are otherwise permitted by law.</li>
              <li><strong>Automated decision-making:</strong> where we use automated processes (e.g. for fraud or risk assessment), we ensure fairness and, where required, provide you with the right to obtain human review or challenge decisions.</li>
            </ul>
            <p className="mt-4">
              We do not use your Personal Data for purposes incompatible with those described above unless we have your consent or a clear legal basis.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">5. How we share your information</h2>
            <p className="mb-4">We may share your Personal Data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service providers:</strong> cloud hosting, payment processing, identity verification, analytics, email delivery, and other providers who process data on our instructions and under contracts that protect your data.</li>
              <li><strong>Banking and financial partners:</strong> where necessary to provide settlement, banking, and regulated financial services.</li>
              <li><strong>Regulators and authorities:</strong> when required by law or to protect our rights, your safety, or the public.</li>
              <li><strong>Professional advisers:</strong> lawyers, auditors, and insurers where necessary for our operations.</li>
              <li><strong>Corporate transactions:</strong> in connection with a merger, sale of assets, or other corporate change, subject to the same privacy protections.</li>
            </ul>
            <p className="mt-4">
              We do not sell your Personal Data. We may share data with third parties only as described above or with your consent.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">6. International transfers</h2>
            <p className="mb-4">
              Your data may be transferred to and processed in countries outside Nigeria or your country of residence. Those countries may have different data protection laws. When we transfer data internationally, we implement appropriate safeguards (e.g. standard contractual clauses, adequacy decisions, or other mechanisms recognised by applicable law) to protect your data.
            </p>
            <p>
              You may request details of the safeguards we use for international transfers by contacting us at{" "}
              <a href={`mailto:${EMAIL_PRIVACY}`} className="text-blue-600 hover:underline">{EMAIL_PRIVACY}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">7. Data retention</h2>
            <p className="mb-4">
              We retain your Personal Data only for as long as necessary to fulfil the purposes set out in this policy, including to provide the Services, comply with legal, tax, and regulatory obligations, resolve disputes, and enforce our agreements.
            </p>
            <p className="mb-4">
              Typically we retain: (a) account and transaction data for the duration of your relationship with us and for a period thereafter as required by law (e.g. 5–7 years for financial and anti-money laundering compliance); (b) marketing and support communications in line with our internal policies; (c) logs and security-related data for a limited period necessary for security and fraud prevention.
            </p>
            <p>
              After the retention period, we securely delete or anonymise your data so it no longer identifies you.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">8. Security</h2>
            <p className="mb-4">
              We implement technical and organisational measures to protect your Personal Data against unauthorised access, alteration, disclosure, or destruction, including encryption, access controls, and secure development practices. Access to Personal Data is limited to personnel and service providers who need it to perform their duties.
            </p>
            <p className="mb-4">
              In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will notify the relevant supervisory authority and, where required by law, notify you without undue delay.
            </p>
            <p>
              You are responsible for keeping your account credentials confidential. Do not share your password or one-time codes with anyone. If you suspect unauthorised access, contact us immediately at{" "}
              <a href={`mailto:${EMAIL_INFO}`} className="text-blue-600 hover:underline">{EMAIL_INFO}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">9. Cookies and similar technologies</h2>
            <p className="mb-4">
              We and our partners use cookies, web beacons, and similar technologies on our Site to provide functionality, analyse usage, and improve your experience.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Strictly necessary:</strong> required for the Site to function (e.g. authentication, security). These cannot be disabled.</li>
              <li><strong>Functional:</strong> remember preferences and settings to improve your experience.</li>
              <li><strong>Analytics:</strong> help us understand how visitors use our Site (e.g. page views, flows).</li>
              <li><strong>Marketing:</strong> used only with your consent to deliver relevant ads and measure campaign effectiveness.</li>
            </ul>
            <p>
              You can manage cookies through your browser settings. Disabling certain cookies may affect the functionality of the Site. For more information, contact us at{" "}
              <a href={`mailto:${EMAIL_PRIVACY}`} className="text-blue-600 hover:underline">{EMAIL_PRIVACY}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">10. Your rights</h2>
            <p className="mb-4">
              Subject to applicable law (including the NDPA and, where applicable, GDPR/UK GDPR), you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Access:</strong> request a copy of the Personal Data we hold about you.</li>
              <li><strong>Rectification:</strong> request correction of inaccurate or incomplete data.</li>
              <li><strong>Erasure:</strong> request deletion of your data in certain circumstances.</li>
              <li><strong>Restriction:</strong> request that we limit processing in certain cases.</li>
              <li><strong>Portability:</strong> receive your data in a structured, machine-readable format where technically feasible.</li>
              <li><strong>Object:</strong> object to processing based on our legitimate interests or for direct marketing.</li>
              <li><strong>Withdraw consent:</strong> where we rely on consent, you may withdraw it at any time without affecting the lawfulness of processing before withdrawal.</li>
              <li><strong>Complain:</strong> lodge a complaint with a data protection supervisory authority.</li>
            </ul>
            <p className="mb-4">
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${EMAIL_PRIVACY}`} className="text-blue-600 hover:underline">{EMAIL_PRIVACY}</a> or{" "}
              <a href={`mailto:${EMAIL_INFO}`} className="text-blue-600 hover:underline">{EMAIL_INFO}</a>. We will respond within the timeframe required by applicable law and may need to verify your identity. We may not be able to fulfil a request where it would conflict with legal obligations or the rights of others.
            </p>
            <p>
              If you are in the EEA or UK, you have the right to lodge a complaint with your local data protection authority. In Nigeria, you may contact the Nigeria Data Protection Commission (NDPC).
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">11. Children</h2>
            <p>
              Our Site and Services are not directed at anyone under 18. We do not knowingly collect Personal Data from anyone under 18. If you believe we have collected data from a minor, please contact us at{" "}
              <a href={`mailto:${EMAIL_PRIVACY}`} className="text-blue-600 hover:underline">{EMAIL_PRIVACY}</a> and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">12. Third-party links</h2>
            <p>
              Our Site may contain links to third-party websites or services. We are not responsible for their privacy practices. This Privacy Policy applies only to our Site and Services. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">13. Changes to this policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will post the updated version on this page and update the “Last updated” date. For material changes, we will notify you by email (to the address associated with your account) or through a prominent notice on our Site before the change takes effect.
            </p>
            <p>
              Your continued use of our Site or Services after the effective date of any change constitutes acceptance of the updated policy. We encourage you to review this page periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">14. Contact us</h2>
            <p className="mb-4">
              For questions about this Privacy Policy or our data practices, or to exercise your rights:
            </p>
            <ul className="list-none space-y-1 mb-4">
              <li>Email: <a href={`mailto:${EMAIL_PRIVACY}`} className="text-blue-600 hover:underline">{EMAIL_PRIVACY}</a> (privacy) or <a href={`mailto:${EMAIL_INFO}`} className="text-blue-600 hover:underline">{EMAIL_INFO}</a> (general)</li>
              <li>Website: <Link href="/help" className="text-blue-600 hover:underline">{SITE_URL}/help</Link> (support)</li>
            </ul>
            <p className="mb-4">
              If you believe your data has been mishandled, please contact us as above. We will investigate and respond within the timeframes required by applicable law (e.g. 72 hours for initial acknowledgment where required under the NDPA).
            </p>
            <p className="font-medium mt-8">
              Your use of our Site and Services constitutes acceptance of this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
