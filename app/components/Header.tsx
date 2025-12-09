"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white py-1">
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
          {/* Desktop Navigation (>= 968px) */}
          <nav className="hidden min-[968px]:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[14px] font-lexend font-semibold text-black hover:text-[# CC6633] transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Brochure Button - Always Visible */}
          <Link
            href="#brochure"
            className="flex items-center gap-2 border border-[#0268ae] rounded-md px-4 py-1 text-[14px] font-lexend font-semibold text-black hover:bg-[#0268ae] hover:text-white transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Brochure
          </Link>

          {/* Hamburger Button (< 968px only, sirf NavItems ke liye) */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="min-[968px]:hidden inline-flex items-center justify-center p-2"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (NavItems only) */}
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