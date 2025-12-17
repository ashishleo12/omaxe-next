"use client";

import Image from "next/image";
import { FormEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function EnquiryFormCard() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="w-full max-w-sm bg-[#f5fbff] border-[3px] border-[#0073c6] shadow-xl rounded-md overflow-hidden">
      {/* 🔹 Top Blue Bar */}
      <div className="bg-[#0073c6] text-white text-center px-6 py-3">
        <p className="text-[18px] md:text-[20px] font-semibold">Omaxe Amausi</p>
      </div>

      {/* 🔹 Body */}
      <div className="px-6 py-6 md:py-7">
        <div className="space-y-1 text-center">
          <p className="text-[16px] font-semibold text-gray-900">
            Retail Shops & Studio Apartments
          </p>
          <p className="text-[15px] text-gray-900 font-semibold">
            Starting from ₹ 75 Lacs* Onwards
          </p>
          <p className="mt-2 text-[14px] text-gray-700 flex items-center justify-center gap-1">
            <span>📍</span> Amausi, Lucknow
          </p>
        </div>

        {/* 🔹 Static Info Lines (no marquee) */}
        <div className="mt-4 bg-linear-to-r from-[#eaf4ff] to-[#f5fbff] text-[#0268ae] py-1 text-center text-[13px] sm:text-[14px] font-lexend font-medium border-y border-blue-100 rounded-md space-y-1">
          <p className="font-semibold text-[#135382] ">
            12% Annual Return (AR) for a 48-month term
          </p>
          <p className="text-[#0268ae]">
            9-year Lease Guarantee – Five-Star Hotel Chain
          </p>
        </div>

        {/* 🔹 Form Title */}
        <p className="mt-5 mb-3 text-center text-[16px] font-semibold text-gray-900">
          Enquire Now
        </p>

        {/* 🔹 Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Enter Full Name"
            required
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-[14px] outline-none focus:border-[#0073c6] focus:ring-1 focus:ring-[#0073c6] placeholder:text-black"
          />
          <input
            type="tel"
            placeholder="Enter Phone"
            required
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-[14px] outline-none focus:border-[#0073c6] focus:ring-1 focus:ring-[#0073c6] placeholder:text-black"
          />

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-[#0073c6] py-2.5 text-center text-[16px] font-semibold text-white hover:bg-[#005ca3] transition-colors duration-200"
          >
            Submit
          </button>

          {/* Privacy Text */}
          <div className="mt-3 flex items-start gap-2 text-[12px] text-gray-700">
            <input
              type="checkbox"
              id="privacy"
              defaultChecked
              className="mt-[2px] h-4 w-4 accent-[#0073c6]"
            />
            <label htmlFor="privacy">
              By submitting I accept{" "}
              <span className="text-[#0073c6] underline cursor-pointer">
                Privacy Policy
              </span>
              .
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* 5:3 Aspect Ratio Container */}
      <div className="relative w-full h-[300px] md:h-auto md:aspect-6/3">
        {/* Background Image */}
        <Image
          src="/Slide-1.webp"
          alt="Omaxe Amausi"
          fill
          priority
          className="object-cover object-top"
        />

        {/* Navigation Arrows */}
        <button
          type="button"
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          type="button"
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* 🧩 Overlap Form (Desktop Only) */}
        <div className="hidden lg:flex absolute top-[7%] left-[5%]">
          <EnquiryFormCard />
        </div>
      </div>

      {/* 📱 Mobile Form Below Image */}
      <div className="lg:hidden flex justify-center px-4 py-6 z-100 bg-white">
        <EnquiryFormCard />
      </div>
    </section>
  );
}
