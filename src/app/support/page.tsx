import type { Metadata } from "next";
import FeatureRibbon from "@/components/FeatureRibbon";
import PeopleSection from "@/components/PeopleSection";

export const metadata: Metadata = {
    title: "Data Privacy Policy - Paxalpay",
    description: "Paxalpay Data Privacy Policy",
};

export default function SupportPage() {
    return (
        <main className="min-h-screen pt-20 md:pt-32 bg-[#FFFCF5]">
            <div className="max-w-[800px] mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-[32px] md:text-[48px] font-bold text-[#262626] mb-4">
                        Data Privacy Policy
                    </h1>
                    <p className="text-[#737373] text-[16px]">
                        November, 2022
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-10 text-[#262626] text-[16px] md:text-[18px] leading-relaxed">
                    <section>
                        <p className="mb-6">
                            This Data Privacy Policy applies to your use of APIs, applications, website, related digital platforms and/or Services (collectively, the “Site”) provided by PaxalPay Limited; an entity currently headquartered in Nigeria.
                        </p>
                        <p className="mb-6">
                            At PaxalPay, we value the privacy of our customers and others (collectively or individually "Users") who visit and use our Site and we are committed to protecting your personal data (i.e., any information you provide to us from which you can be identified) in accordance with this Privacy Policy.
                        </p>
                        <p className="mb-6">
                            This Data Privacy Policy governs the information you provide to us or that we may learn from your use of our Site and informs you how we may collect, use, and in some instances share, this information.
                        </p>
                        <p>
                            By accessing or using our Site, or in any other services we provide (collectively, Services), and expressly consenting where required, you agree to be bound by this Privacy Policy. If you do not consent to our Privacy Policy, then you must not access or use our Services.
                        </p>
                    </section>


                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-bold mb-4">Information We May Collect</h2>
                        <p className="mb-4">
                            As a platform that provides financial solutions to service providers and customers, we collect information or Personal Data which might include your name, contact details, title, login name and password, payment or banking information (including related payment verification information), and any other background information from you when you create or update a user account on our Site. If you do not expressly provide this information, you will not be able to create a user account on our Site.
                        </p>
                        <p className="mb-4">
                            We collect Personal Data which you choose to provide to us directly, and which might include your Biometric data; name, age, email, location data, telephone number, transaction information and other information when you agree to use our services and other ancillary services offered via our Site.
                        </p>
                        <p className="mb-4">
                            We may collect Personal Data through the use of cookies, tags, web beacons and other technologies. We may also collect unique device identifiers and may collect geolocation information if we have the appropriate legal basis to do so.
                        </p>
                        <p className="mb-4">
                            We may combine the information we receive from you with information we receive from other sources.
                        </p>
                        <p className="mb-4">
                            By using our Site or sending us information, you explicitly consent to PaxalPay processing your personal data in accordance with this Privacy Policy.
                        </p>
                    </section>


                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-bold mb-4">How We Use The Information We Collect</h2>
                        <p className="mb-4">
                            Per the terms of this Data Privacy Policy, we may process and use the information we collect from you for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To enable our services including but not limited to: creating and updating accounts, processing payments, processing and delivering your service requests, tracking and sharing the progress of deliverables.</li>
                            <li>For research and development including testing, research, analysis, product development, and machine learning to improve the experience of our Users. This helps us make our services more convenient and easier-to-use, enhance the safety and security of our services, and develop new services and features.</li>
                            <li>For customer support.</li>
                            <li>For marketing and non-marketing communications with our Users including enabling communication amongst our Users, generating receipts and marketing our services to our Users.</li>
                            <li>Automated decision making.</li>
                            <li>For compliance with a legal obligation. This includes obligations under the Nigeria Data Protection Act 2023, as well as anti-fraud and anti-money laundering measures, tax and social security requirements.</li>
                        </ul>
                        <p className="mt-4">
                            As to client data we collect, we do not use the information for any purposes other than the fulfilment of our obligations to Users. We keep Users’ information secure at all times, and prevent the use and disclosure of it by our employees or any third parties.
                        </p>
                    </section>


                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-bold mb-4">How We Might Share Your Information</h2>
                        <p className="mb-4">
                            We may share your Personal data with others such as:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Our Clients and Partner Companies:</strong> names and demographic data only, information related to the services rendered including statistics will also be shared with these entities.</li>
                            <li><strong>Third party service providers,</strong> who process information on our behalf to help run some of our internal business operations including processing and fulfilment of your requests, email distribution, marketing service, payments, Cloud storage and information technology services, so that they can provide services to PaxalPay;</li>
                            <li><strong>Law enforcement authorities or other government bodies</strong> when we are required to do so in compliance with all applicable laws, regulations and rules, and requests of law enforcement, regulatory and other governmental agencies.</li>
                            <li>If, in future, we are acquired by or merged with another company, and all of or a substantial amount of our assets are transferred to another company, or as part of bankruptcy proceedings, we may disclose/transfer the information we have collected from you to the acquiring company.</li>
                        </ul>
                        <p className="mt-4">
                            In addition to the above, we may share Personal Data about you with others to the extent you consent to such sharing.
                        </p>
                    </section>


                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-bold mb-4">Data Transfer</h2>
                        <p className="mb-4">
                            We may transfer to, and store the data we collect about you in countries other than the country in which the data was originally collected. Those countries may not have the same data protection laws as the country from which you provided us the data. When we transfer your data to other countries, we will protect the data as described in this Privacy Policy and comply with applicable legal requirements providing adequate protection for the transfer of data to countries outside Nigeria.
                        </p>
                        <p>
                            You may request more information about the safeguards that we have put in place in respect of transfers of personal data by contacting us at <a href="mailto:info@paxalpay.com" className="text-blue-600 hover:underline">info@paxalpay.com</a>.
                        </p>
                    </section>


                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-bold mb-4">Data Security And Protection</h2>
                        <p className="mb-4">
                            We understand the need for your personal data to remain secure and private and we have implemented appropriate technical and organisational security measures to protect your personal data from loss, misuse, data breaches, modification or destruction. Only authorised personnel and third parties will have access to any personal data provided by you, which is limited to the extent they need to do their job or provide their services. While we are committed to earning and keeping your trust with these precautions, provided information is exposed to inherent risks associated with Internet usage.
                        </p>
                        <p className="mb-4">
                            If we learn of a security systems breach, then we will attempt to notify you electronically so that you can take appropriate protective steps. By using our Site or providing Personal Data to us, you agree that we can communicate with you electronically regarding security, privacy, and administrative issues relating to your use of our Site. We may also post a notice on our Site if a security breach occurs.
                        </p>
                        <p>
                            Please note that while we take reasonable steps to verify your identity before granting User’s profile access, you also play an important part in securing your own data. To protect your privacy and security, you should never share your user account’s password with anyone. The responsibility for maintaining the secrecy of your unique password and account information is yours at all times.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-bold mb-4">Retention Of Your Personal Data</h2>
                        <p>
                            We will retain your information for as long as your account is active or as needed to provide you services and to fulfil the purposes for which the data was collected.  We may keep data longer if we have a legal obligation to keep it or to maintain necessary records for legal, financial, compliance, or other reporting obligations, and to enforce our rights and agreements.                         </p>
                    </section>


                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-bold mb-4">Cookies And Similar Technologies</h2>
                        <p className="mb-4">
                            When you use our Site, we and our partners, affiliates, and/or service providers may send one or more cookies or similar technologies to your computer or other device to collect information on how you use our Site to enable us improve the quality of our services, our Site and the online experience of our visitors and users.
                        </p>
                        <p className="mb-4">
                            Once you have given your consent to use cookies, we shall store a cookie on your computer or device to remember this for next time. If you wish to withdraw consent at any time you can reset your browser to refuse all cookies or to indicate when a cookie is being sent. However, certain functionalities of our Site might not work properly if you do so.
                        </p>
                        <p className="mb-4">
                            We use the following groups of cookies:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Required cookies:</strong> These cookies are necessary to enable the basic features of our Site to function, such as allowing images to load or allowing you to select your cookie preferences.</li>
                            <li><strong>Functional cookies:</strong> These cookies allow us analyse your use of our Site to evaluate and improve our performance. They may also be used to provide a better customer experience on our Platform. For example, remembering your log-in details or providing us information about how our Platform is used.</li>
                            <li><strong>Advertising cookies:</strong> These cookies may be used to share data with advertisers so that the ads you see are more relevant to you, allow you to share certain pages with social networks, or allow you to post comments on our Platform.</li>
                        </ul>
                    </section>


                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-bold mb-4">Legal Rights Available To Data Subjects</h2>
                        <p className="mb-4">
                            Subject to applicable law, you are entitled to certain rights regarding the personal data we maintain about you. You have the right to request access to your information, obtain a copy of it as well as information about how we use it. You also have the right to request that we correct incorrect, inaccurate or out-of-date information about you. You have the right to request that we stop processing your information and/or withdraw your consent to such processing and to ask us to delete your information.
                        </p>
                        <p className="mb-4">
                            In the event that you no longer wish your data to be processed as described in this Policy, or if you wish to access, rectify, cancel or oppose such processing, please contact us at <a href="mailto:info@paxalpay.com" className="text-blue-600 hover:underline">info@paxalpay.com</a>. Subject to legal and other permissible considerations, we will make every reasonable effort to honour your request promptly or inform you if we require further information in order to fulfil your request.
                        </p>
                        <p>
                            We may not always be able to fully address your request, for example if it would impact the duty of confidentiality we owe to others, or if we are legally obliged to deal with the request in a different way.
                        </p>
                    </section>


                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-bold mb-4">Links To Other Websites</h2>
                        <p className="mb-4">
                            PaxalPay by the nature of its business connects you with different third parties. To this end, our Site will contain links to other platforms not administered by PaxalPay.
                        </p>
                        <p>
                            PaxalPay may provide your information to the third party so that we can facilitate the relationship between you and the third party. However, PaxalPay is not responsible for the privacy practices or the content of any sites to which a user is redirected from our Site. We are not responsible for the protection and privacy of any information you provide whilst visiting other websites and sites not governed by our Privacy Policy. We cannot control the content or security of such websites. We cannot be held responsible for any loss or damage incurred by a user as a result of visiting such websites. No links are intended to be, nor should be construed as, an endorsement of any kind by us of that other website.
                        </p>
                    </section>


                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-bold mb-4">Children</h2>
                        <p className="mb-4">
                            PaxalPay understands the importance of protecting children's privacy, particularly in their online interactions and as such, our Site is not directed at persons younger than 18 years of age.
                        </p>
                        <p>
                            PaxalPay therefore will not intentionally collect information about anyone under the age of 18, and requests that no such information be submitted to us.
                        </p>
                    </section>


                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-bold mb-4">Changes To This Privacy Policy</h2>
                        <p className="mb-4">
                            Please note that this Privacy Policy may be updated from time to time so please refer to this policy regularly. We will post any Privacy Policy changes at the top of this page and notify you of any material changes via the email provided at sign-up.
                        </p>
                    </section>


                    <section className="mb-8">
                        <h2 className="text-[20px] md:text-[24px] font-bold mb-4">Contact</h2>
                        <p className="mb-4">
                            Where you have suffered a breach, we advise that you inform us immediately to enable us take appropriate action within 72 hours of our receipt of your complaint. If you have any questions about this Privacy Policy or how PaxalPay handles your personal data, please contact us at <a href="mailto:info@paxalpay.com" className="text-blue-600 hover:underline">info@paxalpay.com</a>.
                        </p>
                        <p className="font-medium mt-8">
                            Your use of our site constitutes acceptance of this policy.
                        </p>
                    </section>
                </div>
            </div>

            <FeatureRibbon
                items={[
                    "Instant Settlement",
                    "Secure Transactions",
                    "24/7 Support",
                    "Real-time Rates",
                    "Zero Hidden Fees",
                    "Fast Withdrawals",
                ]}
            />
            <PeopleSection />
        </main>
    );
}
