import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AutoTabs from "@/components/AutoTabs";
import SupportSection from "@/components/SupportSection";
import PeopleSection from "@/components/PeopleSection";
import FeaturesStrip from "@/components/FeaturesStrip";
import FAQSection from "@/components/FAQSection";
import SpiralSection from "@/components/SpiralSection";
import LicenseSection from "@/components/LicenseSection";
import ThreeTapsSection from "@/components/ThreeTapsSection";
import ExchangeRatesSection from "@/components/ExchangeRatesSection";
import LogoBanner from "@/components/LogoBanner";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  return (
    <SplashScreen>
      <main className="-mr-[28px]">
        <div className="-mx-[10px] md:mx-0">
          <Hero />
        </div>
        <LicenseSection />
        <FeaturesStrip />
        <ThreeTapsSection />
        {/* <About /> */}

        <AutoTabs />
        <ExchangeRatesSection />
        <SupportSection />
        <PeopleSection />
        <FAQSection />
        <SpiralSection />
        <LogoBanner />
      </main>
    </SplashScreen>
  );
}
