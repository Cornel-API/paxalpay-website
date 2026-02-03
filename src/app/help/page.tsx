import type { Metadata } from "next";
import Link from "next/link";
import IntercomMessenger from "@/components/IntercomMessenger";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Contact Support - Paxalpay",
  description:
    "Get help from Paxalpay. Chat with our support team or browse FAQs.",
};

export default function HelpPage() {
  return (
    <main className="min-h-[60vh] pb-16">
      <IntercomMessenger />

      <section className="py-12 md:py-16">
        <div className="max-w-2xl">
          <h1 className="text-[#262626] font-bold text-[28px] md:text-[36px] leading-tight">
            Contact support
          </h1>
          <p className="mt-3 text-[#525252] font-medium text-[15px] md:text-[18px] leading-7">
            The chat opens automatically. You can also tap the Intercom icon in the
            bottom-right corner anytime to talk to our team.
          </p>
          <p className="mt-4 text-[#737373] text-[14px] md:text-[16px]">
            If the chat doesn’t appear, make sure your browser allows scripts and
            that{" "}
            <strong>paxalpay.com</strong> is allowed in your Intercom/Messenger
            settings.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-200 pt-8">
        <h2 className="text-[#262626] font-bold text-[20px] md:text-[24px] mb-4">
          Quick links
        </h2>
        <ul className="space-y-2 text-[15px] md:text-[17px]">
          <li>
            <Link
              href="/features"
              className="text-blue-600 hover:underline font-medium"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/rates"
              className="text-blue-600 hover:underline font-medium"
            >
              Rates
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className="text-blue-600 hover:underline font-medium"
            >
              Privacy policy
            </Link>
          </li>
        </ul>
      </section>

      <div className="mt-16">
        <FAQSection />
      </div>
    </main>
  );
}
