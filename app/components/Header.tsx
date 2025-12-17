"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { Span } from "next/dist/trace";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Overview",
    "Amenities",
    "Gallery",
    "Floor Plans",
    "Location",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white">
      {/* 🔹 Marquee Section (Top Bar) */}
      <div className="w-full bg-[#0268ae] text-white overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-2 text-sm">
          <span className="mx-6 flex items-center gap-8">
            {/* 🔸 First Message */}
            <span className="flex items-center gap-2">
              <span className="text-yellow-400 text-lg">⭐</span>
              <span className="font-lexend font-semibold">
                12% Annual Return (AR) for a 48-month term, or an &apos;OC
              </span>
            </span>

            {/* 🔸 Second Message */}
            <span className="flex items-center gap-2">
              <span className="text-yellow-400 text-lg">⭐</span>
              <span className="font-lexend text-[15px] opacity-90">
                9-year Lease Guarantee from a Renowned Five-Star Hotel Chain.
              </span>
            </span>
          </span>
        </div>
      </div>

      {/* 🔹 Main Header Section */}
      <div className="mx-auto max-w-7xl flex items-center justify-between py-4 px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.webp"
            alt="Omaxe Logo"
            width={200}
            height={120}
            priority
          />
        </div>

        {/* Right Side: Nav + Brochure + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden min-[968px]:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[14px] font-lexend font-semibold text-black hover:text-[#0268ae] transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Brochure Button */}
          <Link
            href="#brochure"
            className="flex items-center gap-2 border border-[#0268ae] rounded-md px-4 py-1 text-[14px] font-lexend font-semibold text-black hover:bg-[#0268ae] hover:text-white transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Brochure
          </Link>

          {/* Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="min-[968px]:hidden inline-flex items-center justify-center p-2"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="min-[968px]:hidden border-t border-gray-200">
          <nav className="max-w-[1280px] mx-auto flex flex-col gap-2 py-3 px-4">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setIsOpen(false)}
                className="text-[14px] font-lexend font-semibold text-black hover:text-[#0268ae] transition-colors duration-200 py-1"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
