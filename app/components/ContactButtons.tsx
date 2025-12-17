"use client";

import Link from "next/link";
import { MdAddIcCall } from "react-icons/md";

export default function ContactButtons() {
  return (<></>)
  return (
    <>
      {/* 🔹 Floating Call Button */}
      <Link
        href="tel:+919999999999"
        className="
          fixed bottom-5 right-5 z-50
          flex items-center gap-2
          bg-[#0073c6] hover:bg-[#005fa3]
          text-white font-semibold
          px-4 py-2.5
          rounded-full shadow-lg
          transition-all duration-300
          hover:scale-105
          active:scale-95
          max-w-[1920px]
        "
        aria-label="Call us for enquiry"
      >
        <MdAddIcCall className="w-5 h-5" />
        <span className="text-sm md:text-base">Enquiry Now</span>
      </Link>
    </>
  );
}