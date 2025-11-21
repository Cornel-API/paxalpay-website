import Image from "next/image";
import StoreButton from "./StoreButton";

export default function Hero() {
  return (
    <section className="relative h-[960px] pt-12 pb-0 overflow-hidden background-[#FCF7F1] ">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-center font-[800] text-[52px] text-[#262626]">
          Turn your crypto into
          <br className="hidden md:block" /> spendable balance
        </h1>
        <p className="mt-4 text-[20px] font-[500] font-medium text-[#525252]">
          Deposit BTC, ETH, USDT and more — we convert it instantly into a<br/>
          local spendable balance in your currency.
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2 w-full max-w-[360px]">
          <StoreButton platform="google" className="w-full justify-center" />
          <StoreButton platform="apple" className="w-full justify-center" />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-screen md:left-0 md:right-0 md:w-auto md:translate-x-0 flex justify-center">
        <Image
          src="/hero_image.png"
          alt="App preview"
          width={735}
          height={986}
          className="w-[900px] h-auto md:w-[735px] origin-bottom scale-[1.2] md:scale-100"
        />
      </div>

      <div className="absolute bottom-0 flex mb-4 items-center gap-2 text-[20px] font-[400] text-[#262626] hidden md:block">
        <Image src="/cbn_logo.svg" alt="CBN" width={30} height={36} />
        <span>Licensed by the CBN</span>
      </div>

      <div className="absolute right-3 mb-4 bottom-0 text-right hidden md:block">
        <div className="text-[16px] font-medium font-[500] text-[#525252]">Trusted by</div>
        <div className="text-[23px] font-bold font-[700] text-[#262626]">10,000+ users</div>
      </div>
    </section>
  );
}