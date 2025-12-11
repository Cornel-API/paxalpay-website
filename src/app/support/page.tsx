import type { Metadata } from "next";
import FeatureRibbon from "@/components/FeatureRibbon";
import PeopleSection from "@/components/PeopleSection";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

export const metadata: Metadata = {
    title: "Data Privacy Policy - Paxalpay",
    description: "Paxalpay Data Privacy Policy",
};

export default function SupportPage() {
    return (
        <main>
            <PrivacyPolicyContent />

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

