"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

type Props = { children: React.ReactNode };

export default function SplashScreen({ children }: Props) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Check if user has seen the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (hasSeenSplash) {
      // Skip splash screen for reloads in the same session
      setHidden(true);
      return;
    }

    let mounted = true;
    fetch("/motion/paxalpay_vertical.json")
      .then((r) => r.json())
      .then((d) => {
        if (mounted) setAnimationData(d);
      })
      .catch((e) => console.error("Error loading splash animation:", e));

    return () => {
      mounted = false;
    };
  }, []);

  // Mark splash as seen when animation completes
  const handleAnimationComplete = () => {
    setHidden(true);
    sessionStorage.setItem("hasSeenSplash", "true");
  };

  return (
    <>
      {!hidden && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
          {animationData && (
            <Lottie
              animationData={animationData}
              loop={false}
              autoplay
              onComplete={handleAnimationComplete}
              style={{ width: "100%", maxWidth: 500 }}
            />
          )}
        </div>
      )}

      <div className={hidden ? "opacity-100 transition-opacity duration-700" : "opacity-0"}>{children}</div>
    </>
  );
}