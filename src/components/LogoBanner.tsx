"use client";
import Image from "next/image";

export default function LogoBanner() {
    return (
        <footer className="fixed bottom-0 left-0 w-full h-[500px] z-0 flex justify-center items-center bg-[#1D78D3]">
            <div className="relative w-full max-w-[1314px] h-[497px] translate-y-[15%]">
                <Image src="/logo_big.svg" alt="Paxalpay" fill className="object-contain" />
            </div>
        </footer>
    );
}
