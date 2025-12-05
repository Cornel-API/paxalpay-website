import Header from "../../components/Header";
import FeaturesHeroSection from "../../components/FeaturesHeroSection";
import FeaturesTabsSection from "../../components/FeaturesTabsSection";
import FeatureRibbon from "../../components/FeatureRibbon";
import Footer from "../../components/Footer";
import PeopleSection from "@/components/PeopleSection";


export default function FeaturesPage() {
    return (
        <main>

            <FeaturesHeroSection />
            <FeaturesTabsSection />
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
            <PeopleSection />
            <Footer />

        </main>
    );
}
