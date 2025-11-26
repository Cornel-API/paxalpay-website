import Image from "next/image";
import FadeIn from "./animations/FadeIn";

export default function LogoBanner() {
    return (
        <section className="relative left-1/2 -translate-x-1/2 w-screen py-16 flex justify-center bg-[#1D78D3]">
            <FadeIn className="relative w-full max-w-[1024px] h-[352px]" fullWidth>
                <Image src="/logo_big.svg" alt="Paxalpay" fill className="object-contain" />
            </FadeIn>
        </section>
    );
}
