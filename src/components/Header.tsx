"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };

type HeaderProps = {
  navItems?: NavItem[];
  className?: string;
  showDownload?: boolean;
};

export default function Header({
  navItems = [
    { label: "Features", href: "/features" },
    { label: "Rates", href: "/rates" },
    { label: "Support", href: "/#support" },
  ],
  className,
  showDownload = true,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [showQRDropdown, setShowQRDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowQRDropdown(false);
      }
    };

    if (showQRDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showQRDropdown]);

  const isActive = (href: string) => {
    if (href === "/rates") {
      return pathname === "/rates";
    }
    if (href === "/features") {
      return pathname === "/features";
    }
    return false;
  };

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 bg-white/0 backdrop-blur " +
        (className ?? "")
      }
    >
      <div className="flex w-full items-center justify-between px-[28px] pr-[18px] md:pr-[28px] py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2" aria-label="Home">
            <Image src="/logo.svg" alt="Paxalpay logo" width={112} height={28} priority />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-16 font-medium text-zinc-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-zinc-900 transition-colors ${isActive(item.href) ? "text-blue-600 font-semibold" : ""
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {showDownload && (
            <div className="relative">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowQRDropdown(!showQRDropdown);
                }}
                className="hidden md:flex items-center gap-2 rounded-[16px] bg-white text-[#262626] px-4 py-4 text-[15px] font-bold cursor-pointer"
              >
                <Image src="/boxes.svg" alt="Download app" width={24} height={24} />
                Download App
              </Link>

              {/* QR Code Dropdown */}
              {showQRDropdown && (
                <div ref={dropdownRef} className="fixed left-0 right-0 top-0 bg-[#D2E25E] shadow-2xl z-50">
                  <div className="px-[28px] py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
                    {/* Left side - Text */}
                    <div>
                      <h3 className="text-[#262626] font-bold text-[32px] md:text-[40px] leading-tight">
                        A better money experience, built for real people.
                      </h3>
                    </div>

                    {/* Right side - QR Codes */}
                    <div className="flex flex-col items-center md:items-end gap-4">
                      <p className="text-[#262626] text-[18px] font-semibold">Scan to download</p>
                      <div className="flex items-center gap-6">
                        {/* Apple QR Code */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-[150px] h-[150px] bg-white rounded-[12px] p-3 flex items-center justify-center">
                            <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                              <Image src="/apple.svg" alt="App Store QR" width={40} height={40} />
                            </div>
                          </div>
                        </div>

                        {/* Google Play QR Code */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-[150px] h-[150px] bg-white rounded-[12px] p-3 flex items-center justify-center">
                            <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                              <Image src="/playstore.svg" alt="Google Play QR" width={40} height={40} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <button
            type="button"
            className="md:hidden inline-flex -ml-[28px] h-10 w-10 items-center justify-center rounded-lg border border-black/10"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 5l10 10M15 5l-10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-2 py-2 text-sm font-medium transition-colors ${isActive(item.href)
                    ? "text-blue-600"
                    : "text-zinc-700 hover:bg-zinc-50"
                    }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {showDownload && (
                <div className="md:text-right w-full md:w-auto mt-2">
                  <div className="text-[18px]  font-bold text-[#D2E25E] mb-2 text-left md:text-left">Scan or Tap to download</div>
                  <div className="flex items-center justify-center md:justify-end gap-4">
                    <div className="h-[210px] w-[210px] rounded-[12px] bg-white/10 backdrop-blur-md shadow flex items-center justify-center">
                      <Image src="/apple.svg" alt="App Store" width={38} height={38} />
                    </div>
                    <div className="h-[210px] w-[210px] rounded-[12px] bg-white/10 backdrop-blur-md shadow flex items-center justify-center">
                      <Image src="/playstore.svg" alt="Google Play" width={38} height={38} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}