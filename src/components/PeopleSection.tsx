import Image from "next/image";
import FadeIn from "./animations/FadeIn";

export default function PeopleSection() {
  return (
    <section className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden">
      <div className="relative w-full h-[976px] pt-30">
        <Image src="/people.png" alt="Real people using Paxalpay" fill className="object-cover" priority />

        <div className="absolute inset-0 h-full flex flex-col justify-between md:flex-row md:items-end md:justify-between md:pb-18 px-[16px] md:px-[28px] pb-8 gap-6">
          <div className="max-w-[520px] text-white">
            <FadeIn>
              <h2 className=" font-bold text-[32px] mt-8 md:text-[52px] leading-tight">
                A better money
                <br className="hidden md:block" /> experience, built for
                <br className="hidden md:block" /> real people.
              </h2>
            </FadeIn>
          </div>

          <div className="md:text-right w-full md:w-auto mt-auto md:mt-0">
            <FadeIn delay={0.2} direction="left">
              <div className="text-[18px]  font-bold text-[#D2E25E] mb-2 text-left md:text-left">Scan or Tap to download</div>
              <div className="flex items-center justify-center md:justify-end gap-4">
                <div className="h-[210px] w-[210px] rounded-[12px] bg-white/10 backdrop-blur-md shadow flex items-center justify-center">
                  <Image src="/apple.svg" alt="App Store" width={38} height={38} />
                </div>
                <div className="h-[210px] w-[210px] rounded-[12px] bg-white/10 backdrop-blur-md shadow flex items-center justify-center ">
                  <Image src="/playstore.svg" alt="Google Play" width={38} height={38} />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}