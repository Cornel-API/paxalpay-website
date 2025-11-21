import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AutoTabs from "@/components/AutoTabs";
import SupportSection from "@/components/SupportSection";
import PeopleSection from "@/components/PeopleSection";
import FeaturesStrip from "@/components/FeaturesStrip";
import FAQSection from "@/components/FAQSection";
import SpiralSection from "@/components/SpiralSection";

export default function Home() {
  return (
    <main>
      <div className="-mx-[28px] md:mx-0">
        <Hero />
      </div>
      <About />
      <AutoTabs />
      <SupportSection />
      <PeopleSection />
      <FeaturesStrip />
      <FAQSection />
      <SpiralSection />
      <section className="relative left-1/2 -translate-x-1/2 w-screen py-16 flex justify-center bg-[#1D78D3]">
        <div className="relative w-full max-w-[1024px] h-[352px]">
          <Image src="/logo_big.svg" alt="Paxalpay" fill className="object-contain" />
        </div>
      </section>
    </main>
  );
}
