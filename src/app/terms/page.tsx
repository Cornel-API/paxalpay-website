import type { Metadata } from "next";
import TermsContent from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Terms and Conditions - Paxalpay",
  description:
    "Terms and conditions governing your use of Paxalpay's platform and services.",
};

export default function TermsPage() {
  return (
    <main>
      <TermsContent />
    </main>
  );
}
