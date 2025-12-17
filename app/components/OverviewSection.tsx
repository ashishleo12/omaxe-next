"use client";

import Image from "next/image";

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="w-full z-10 bg-white py-10 md:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 🔹 Top Overview Tab */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative inline-flex flex-col items-center gap-2">
            <div className="px-10 py-2 rounded-[8px] bg-[#0073c6]">
              <span className="text-white text-lg font-semibold">
                Overview
              </span>
            </div>
            <span className="block h-[2px] w-40 bg-[#0073c6]" />
          </div>
        </div>

        {/* 🔹 Title */}
        <h2 className="text-center text-xl md:text-2xl font-extrabold text-[#54595f] mb-8 font-lexend">
          Omaxe BeTogether Centre Point Amausi
        </h2>

        {/* 🔹 Content + Image (Equal width) */}
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8">
          {/* Left Text (50%) */}
          <div className="w-full lg:w-1/2 text-[16px] leading-8 text-[#333333] space-y-4">
            <p>
              Omaxe Amausi – BeTogether Centre Point is a new commercial project
              by Omaxe Group located in Amausi, Lucknow. It offers premium retail
              shops and modern studio apartments ideal for business owners and
              investors.
            </p>
            <p>
              Situated near the Lucknow International Airport, the project enjoys
              excellent location and connectivity to all major parts of the city.
              The retail shops are ideal for brands, showrooms and food outlets,
              ensuring high visibility and heavy footfall. The studio apartments
              are designed for modern professionals who want to live close to work
              and city life.
            </p>
            <p>
              This is a perfect opportunity for investors and business owners
              looking for a promising commercial space in Lucknow. Omaxe Amausi is
              not just a place to shop or live — it&apos;s a smart investment for a
              bright future in the city&apos;s growing commercial hub.
            </p>
          </div>

          {/* Right Image (50%) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full border border-[#000000] rounded-md overflow-hidden">
              <Image
                src="/Overview.webp"
                alt="Omaxe Amausi Overview"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}