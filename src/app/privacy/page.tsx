import type { Metadata } from "next";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy - Paxalpay",
  description:
    "How Paxalpay collects, uses, and protects your personal data. Read our full privacy policy.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PrivacyPolicyContent />
    </main>
  );
}
