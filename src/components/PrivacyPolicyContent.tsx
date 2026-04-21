import React from "react";

const EMAIL_INFO = "info@paxalpay.com";

export default function PrivacyPolicyContent() {
  return (
    <section className="min-h-screen pt-20 md:pt-32 bg-[#FFFCF5] -mx-[28px] w-[calc(100%+56px)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-[29px] md:text-[52px] font-bold text-[#262626] mb-4">
            Data Privacy Policy
          </h1>
          <p className="text-[#737373] text-[16px]">
            November, 2022
          </p>
        </div>

        <div className="space-y-10 text-[#262626] text-[14px] md:text-[18px] leading-relaxed">
          <section>
            <p className="mb-4">
              We at Paxalpay (along with our parents, subsidiaries, and affiliates) respect your privacy and this policy describes our privacy practices regarding our products and services.
            </p>
            <p className="mb-4">
              A lot of laws exist that govern the personal data involved in financial and digital activity. This summary explains our privacy practices based on those laws. It covers all the processing your personal information might undergo through websites and applications operated by us, as well as to our API.
            </p>
            <p className="mb-4">
              Our Data Privacy Policy explains the reason and context in which Paxalpay collects, utilizes, records, and keeps your personal data. It applies to your interactions with us and your utilization of any of our products and services.
            </p>
            <p>
              When using our business products such as the API, additional terms and conditions may legally bind you in our Merchant Service Agreement. This summarizes the terms and conditions and our data practices as it applies to everything you do relating to our products and services.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">Information You May Control</h2>
            <p className="mb-4">
              Once you create a Paxalpay Account, it implies that you have given us your information. We may retain information directly tied to your particular business or personal identity (such as your name, residential address or business, email address, telephone number, transaction data, bank details, credit and debit card numbers, and similar identification data) as well as any other information you or your users may provide. We strongly advise that you DO NOT provide any information that you do not want us to possess.
            </p>
            <p className="mb-4">
              We ask that you do not send us, and you to not disclose, any sensitive Personal Information (e.g., social security numbers, information related to racial or ethnic origin, political opinions, religion or other beliefs, health, biometrics or genetic characteristics, or criminal background) on or through our Services or otherwise to us.
            </p>
            <p className="mb-4">
              We may verify or validate the information you provide in comparison with third-party sources (such as when we process your credit or debit card for the purpose of buying cryptocurrency, or validating your identity) to secure both your integrity and ours.
            </p>
            <p className="mb-4">
              We may also obtain information from different sources (such as public databases) to verify your identity.
            </p>
            <p>
              You are required to submit accurate information, as your ability to properly use our product and our capacity to service you is dependent largely on it. If you believe your data is inaccurate, you can change your information, adjust your settings on your account or device or formally write to us using <a href={`mailto:${EMAIL_INFO}`} className="text-[#262626]">info@paxalpay.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">How We Use The Information We Collect</h2>
            <p className="mb-4">Paxalpay uses this Data Privacy Policy for any business that we do. Information we collect helps us do the following and more:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>To render our business better to you and all other users; and to assure a smooth, seamless experience in our product and with every payment we dispatch thanks to an accelerated progress of transactions.</li>
              <li>To research and development relating to the products and services we provide. We'll use information carefully to measure the usage rate of our Services. This helps us ensure our products are safe, well tested, and to see if you use it in the exact way intended, so that we can fix any discrepancies found as we deem fit.</li>
              <li>To provide tech support</li>
              <li>For marketing and communicating specific features with our users. Including phishing warning issues, messages for errors, general updates and communicating with you about your account.</li>
              <li>To manage and limit the risks.</li>
              <li>For compliance and legal concerns. This includes things like answering regulatory requests from Paxalpay partners as well as verifying your identity in order to meet our legal obligations and our commitment to security.</li>
            </ul>
            <p className="mt-4">
              Note that Paxalpay restricts access to your personal information to Paxalpay employees, sub-contractors and other partners in order to run our business, to assist you in using our products and services, and to provide the features and functionality of our platform to the fullest extent.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">How We Might Share Your Information</h2>
            <p className="mb-4">We may share your Personal Data with our trusted partners:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>Our affiliates and business partners. We may choose to share your data relating to our services with our partners and affiliates so we may smoothly fulfill our obligations with you and all other parties.</li>
              <li>Third-party service providers. We may employ companies or individuals to perform functions on our behalf. For instances: identity verification tools, databases analyzing our data, communicating with you, sending receipts, regulations/compliance, legal counsel, and risk, audits. We may share your data with them for these purposes, to the maximum extent permitted by law.</li>
              <li>Law enforcement authorities or other government entities. Where we are legally bound to do so, in instances when we reasonably believe you contravene any laws applying to our terms of service, and any other agreements with Paxalpay.</li>
              <li>To Business / merchant partners. We may share your data (some of it) mostly relating to your transaction metadata when you interact or transact with them. This happens so as to fulfill certain security protocols. Any data being shared to a business or merchant by us depends strictly on your interaction with them.</li>
            </ul>
            <p className="mt-4">
              In addition to the above, we may share Personal Data where you explicitly consent to its disclosure or direct us to share it.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">Data Transfer</h2>
            <p className="mb-4">
              Whenever you transfer your data to us, we process it in compliance with the relevant data protection laws within the limits of its requirements. When necessary we may choose to transfer your data outside your country in order to guarantee you standard service quality. We always employ standard protocols to protect our users globally. When you provide us with this information, you agree to its transfer and storage in locations where we process it. Be certain it is solely transferred when necessary and protected globally where permitted.
            </p>
            <p>
              We reserve the right to process your Personal Data wherever it is collected, subject to adequate data protection laws or an assessment strictly comparable to our compliance standard.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">Data Security And Retention</h2>
            <p className="mb-4">
              We value your trust in establishing an engagement with us. We understand that your data may be subject to compromise so we guarantee protection of your data through strict security measures. We secure your personal data from loss, unauthorized access, copying, use, modification or disclosure. Only authorized personnel and third parties will be uniquely granted access to any personal data, and this will be strictly done due to a need for that specific data and only as required by law. Please note that no method of transmission of information through cyberspace or method of physical storage is 100% fail-proof. Thus, absolute security cannot be guaranteed.
            </p>
            <p className="mb-4">
              In addition, we do not require any particular data relating to religion, political inclination, health and any other data inapplicable to providing our service. Note that when you choose to use our products, it guarantees some level of interaction with third parties when navigating, thus we cannot assure the security of your data on those platforms. Only data relating to Paxalpay services would be handled uniquely and with complete adherence to our standard compliance.
            </p>
            <p>
              Please notify us immediately of any compromise you note regarding your data related to us, or within Paxalpay. Any personal data relating to you but in cases requiring your interaction with other sources, please address your concerns with the entity possessing that required data.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">Retention Of Your Personal Data</h2>
            <p>
              We will retain your Personal Data for as long as necessary to fulfill the purposes for which it was collected, and for as long as required by applicable laws. The criteria used to determine our retention periods include among others: the length of time we have an ongoing relationship with you, whether there is a legal obligation to which we are subject, and whether retention is advisable considering our legal position.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">Choices And Similar Technologies</h2>
            <p className="mb-4">
              When you use our Site, we and our partners, affiliates, and third parties may access or collect information. Technologies like Cookies, web beacons and other similar tools may be integrated manually or generally. Do note that they help analyze usage limits, trends and track navigation or traffic flow on our platforms mostly in order to give a better standard.
            </p>
            <p className="mb-4">
              These tools gather information including Internet Protocol addresses, browser versions or standard metadata, etc. If desired, you may choose to opt out in some instances. To manually decide the extent to which you're involved, please review some available browser tools. Do know omitting the use of these features restricts interaction to our platform.
            </p>
            <p className="mb-4">We actively deploy specific tools like:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>Essential/strictly necessary cookies: We may use some cookies primarily relating to the functioning of our functions and features. Like identity and location verification, security tools, and fraud prevention measures.</li>
              <li>Functionality cookies: These cookies help us track your preferences such as location. Remember, cookies are necessary for navigating and for your experience. They help to remember you on subsequent visits.</li>
              <li>Other Analytic cookies. These analytics may be applied on our Site. This is purely to analyze the user volume or to assist in managing or determining ad conversions. They show us interactions and track performance to help improve your interaction with our Features.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">Legal Rights Provided To Data Subjects</h2>
            <p className="mb-4">
              Subject to the law, you have a variation of rights regarding your personal data. The scope of your rights may include: the right to access your personal data, rectify it or have it updated, restrict the processing of your data, or withdraw consent previously given. In instances you prefer to opt-out, you may choose to modify your preferences in the App. Alternatively you may restrict marketing content via email links we provide in our mails to you, or further contact us to effect the changes.
            </p>
            <p className="mb-4">
              Please note that exercising your rights could affect the full functionality of the product. And we may retain certain data for compliance or legal requests in retaining your data, or verifying it in keeping with our legal obligations. While you hold these privileges, Paxalpay reserves the right to decline your request, if we reasonably ascertain that our request to fulfill the request isn't legally required.
            </p>
            <p>
              You fully comprehend that at any point, your interactions, transactions or generally information relating to our services, or via other related means, that we reasonably believe requires compliance, we may retain such data.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">Links To Other Websites</h2>
            <p className="mb-4">
              Our Platform may contain links to websites owned by third parties. Please note that we are not responsible for the privacy practices of such websites.
            </p>
            <p>
              Note that linking out your operations by interacting or using services available on other platforms means you are to respect their privacy choices. Paxalpay strongly suggests that our users familiarizes themselves with those pages or platforms before visiting. There are requirements by those providers upon receiving personal or non-personal data relating to individuals via any linked website. Paxalpay will not normally be liable for any related data usage incidents. However, in any likelihood you notice any breach as they relate strictly to our interactions and with our products, do direct us immediately via the appropriate channels as soon as reasonably possible.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">Children</h2>
            <p className="mb-4">
              Paxalpay understands the importance of protecting children's privacy. Children are therefore strictly advised not to be registered on or utilize any Paxalpay products or services below 18.
            </p>
            <p>
              Paxalpay platforms and apps are not intended for use by persons under 18. Anyone utilizing any of Paxalpay's products below 18 is therefore operating with fraudulent information, and as such if it comes to our notice, the information will be destroyed.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">Changes To This Privacy Policy</h2>
            <p>
              From time to time, Paxalpay reserves the right to update this privacy policy globally or otherwise. We will normally directly reflect any newly introduced or adjusted feature for your clarity and notice. You understand that this page is solely responsible to communicate the updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[18px] md:text-[23px] font-bold mb-4">Contact</h2>
            <p className="mb-4">
              If you have any questions relating to anything on the privacy statement, our information or our general practice as a user across our service platforms or with partners, please reach out to us at <a href={`mailto:${EMAIL_INFO}`} className="text-[#262626]">info@paxalpay.com</a>.
            </p>
            <p>
              You could also direct correspondence to our support channel.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
