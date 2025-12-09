"use client";

import Image from "next/image";
import Link from "next/link";

export default function EnquirySection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-8 md:py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-8">
        {/* Left Illustration */}
        <div className="flex justify-center md:justify-start w-full md:w-1/3">
          <Image
            src="/Enquiry.webp" 
            alt="Contact Illustration"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Right Text + Button */}
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-[#333333] text-[16px] md:text-[18px] leading-relaxed mb-4">
            Your Perfect Commercial Space Awaits! Contact Us To Know More About{" "}
            <span className="font-semibold">Omaxe Amausi Project.</span>
          </p>

          <Link
            href="#enquiry-form" 
            className="inline-block bg-[#0073c6] text-white text-[15px] md:text-[16px] font-semibold px-6 py-2 rounded-md hover:bg-[#005fa3] transition-colors duration-200"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  );
}