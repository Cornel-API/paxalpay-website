import Image from "next/image";

type FeatureRibbonProps = {
  items: string[];
  iconSrc?: string;
  className?: string;
};

export default function FeatureRibbon({ items, iconSrc = "/flag.svg", className }: FeatureRibbonProps) {
  return (
    <div className={("relative left-1/2 -translate-x-1/2 w-screen overflow-hidden " + (className ?? "")).trim()}>
      <div className="bg-black px-2 py-4">
        <div className="overflow-hidden">
          <div className="marquee-left flex">
            <ul className="flex items-center gap-8">
              {items.map((f) => (
                <li key={f} className="flex items-center gap-2 whitespace-nowrap">
                  <Image src={iconSrc} alt="flag" width={20} height={20} />
                  <span className="text-[12px] md:text-[18px] font-medium text-[#D2E25E]">{f}</span>
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-8">
              {items.map((f, i) => (
                <li key={`${f}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
                  <Image src={iconSrc} alt="flag" width={18} height={18} />
                  <span className="text-[12px] md:text-[18px] font-medium text-[#D2E25E]">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}