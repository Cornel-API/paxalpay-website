import Image from "next/image";

export default function LicenseSection() {
    return (
        <section className="py-12 md:py-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                    <Image
                        src="/cbn_logo.svg"
                        alt="Central Bank of Nigeria"
                        width={80}
                        height={96}
                        className="w-[60px] h-[72px] md:w-[80px] md:h-[96px]"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-[#262626] font-bold text-[px] md:text-[26px] md:text-[28px]">
                        Fully Licensed & Regulated by the
                        <br className="hidden md:block" /> Central Bank of Nigeria (CBN)
                    </h2>
                    <p className="mt-2 text-[#525252] font-medium text-[14px] md:text-[18px]">
                        Secure. Compliant. Transparent.
                    </p>
                </div>
            </div>
        </section>
    );
}
