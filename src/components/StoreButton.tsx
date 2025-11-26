import Image from "next/image";

type StoreButtonProps = {
  platform: "google" | "apple";
  href?: string;
  className?: string;
};

export default function StoreButton({ platform, href = "#", className }: StoreButtonProps) {
  const isGoogle = platform === "google";
  const iconSrc = isGoogle ? "/playstore.svg" : "/apple.svg";
  const alt = isGoogle ? "Get it on Google Play" : "Download on the App Store";
  const topLine = isGoogle ? "Get it on" : "Download on the";
  const bottomLine = isGoogle ? "Google Play" : "App Store";

  return (
    <a href={href} className={("inline-flex items-center rounded-[16px] bg-black px-3 py-2 text-white " + (className ?? "")).trim()}>
      <Image src={iconSrc} alt={alt} width={24} height={24} />
      <span className="ml-2 leading-tight ">
        <span className="block text-[7px] text-[#D2E25E]">{topLine}</span>
        <span className="block text-[16px] text-[#D2E25E]">{bottomLine}</span>
      </span>
    </a>
  );
}