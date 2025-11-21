"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

type Props = { children: React.ReactNode };

export default function SplashScreen({ children }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [playFinal, setPlayFinal] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [blueData, setBlueData] = useState<unknown>(null);
  const [fullData, setFullData] = useState<unknown>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/motion/logo_loading_animation_blue.json")
      .then((r) => r.json())
      .then((d) => {
        if (mounted) setBlueData(d);
      })
      .catch(() => {});
    fetch("/motion/Artboard.json")
      .then((r) => r.json())
      .then((d) => {
        if (mounted) setFullData(d);
      })
      .catch(() => {});

    const handleLoad = () => {
      setLoaded(true);
      setTimeout(() => setPlayFinal(true), 5000);
    };

    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
      }
    }
    return () => {
      mounted = false;
      if (typeof window !== "undefined") {
        window.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  return (
    <>
      {!hidden && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
          {playFinal && fullData ? (
            <Lottie
              animationData={fullData}
              loop={false}
              autoplay
              onComplete={() => setHidden(true)}
              style={{ width: 500, height: 500 }}
            />
          ) : blueData ? (
            <Lottie
              animationData={blueData}
              loop={!playFinal}
              autoplay
              style={{ width: 80, height: 80, marginTop:"-20px" }}
            />
          ) : null}
        </div>
      )}

      <div className={hidden ? "opacity-100 transition-opacity duration-700" : "opacity-0"}>{children}</div>
    </>
  );
}