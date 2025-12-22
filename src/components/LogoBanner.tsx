"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function LogoBanner() {
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        fetch("/motion/paxalpay_wide.json")
            .then((r) => r.json())
            .then((data) => setAnimationData(data))
            .catch((error) => console.error("Error loading animation:", error));
    }, []);

    return (
        <footer className="fixed bottom-0 left-0 w-full h-[500px] z-0 flex justify-center items-center bg-[#1D78D3]">
            <div className="relative w-full max-w-[2200px] h-[1550px] translate-y-[5%]">
                {animationData && (
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        autoplay={true}
                        className="w-full h-full"
                    />
                )}
            </div>
        </footer>
    );
}
