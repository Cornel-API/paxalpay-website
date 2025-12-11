import Image from "next/image";


export default function PeopleSection() {
  return (
    <section className="relative -mx-[28px] w-[calc(100%+56px)] overflow-hidden">
      <div className="relative w-full h-[976px] pt-30">
        <Image src="/people.png" alt="Real people using Paxalpay" fill className="object-cover" priority />

        <div className="absolute inset-0 h-full flex flex-col justify-between md:items-end md:pb-18 px-[16px] md:px-[28px] pb-8 pt-12 md:pt-24">
          <div className="max-w-[520px] text-white md:text-left">
            <h2 className="font-bold text-[32px] md:text-[52px] leading-tight">
              A better money
              <br className="hidden md:block" /> experience, built for
              <br className="hidden md:block" /> real people.
            </h2>
          </div>

          <div className="w-full md:w-auto">
            <div className="text-[18px] font-bold text-[#D2E25E] mb-2 text-left">Scan to download</div>
            <div className="flex items-center gap-4">
              <div className="h-[210px] w-[210px] rounded-[18px] bg-white/20 backdrop-blur-md shadow-lg flex items-center justify-center border border-white/10">
                <Image src="/qrcode_apple.svg" alt="App Store QR" width={160} height={160} className="w-[160px] h-[160px]" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Image src="/apple.svg" alt="Apple Logo" width={32} height={32} />
                </div>
              </div>
              <div className="h-[210px] w-[210px] rounded-[18px] bg-white/20 backdrop-blur-md shadow-lg flex items-center justify-center border border-white/10">
                <Image src="/qrcode_google.svg" alt="Google Play QR" width={160} height={160} className="w-[160px] h-[160px]" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Image src="/playstore.svg" alt="Play Store Logo" width={32} height={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}