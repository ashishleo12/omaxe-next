"use client";

export default function LocationSection() {
  return (
    <section id="location" className="w-full bg-white py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 🔹 Top Location Tab */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative inline-flex flex-col items-center gap-2">
            <div className="px-10 py-2 rounded-[8px] bg-[#0073c6]">
              <span className="text-white text-lg font-semibold">Location</span>
            </div>
            <span className="block h-[2px] w-40 bg-[#0073c6]" />
          </div>
        </div>

        {/* 🔹 Title */}
        <h2 className="text-center text-xl md:text-2xl font-extrabold text-[#54595f] mb-8 font-lexend">
          Omaxe Amausi Location
        </h2>

        {/* 🔹 List + Map */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">
          {/* Left Points */}
          <div className="w-full md:w-1/4">
            <ul className="list-disc pl-6 space-y-3 text-[15px] md:text-[16px] leading-8 text-[#333333]">
              <li>
                Lucknow Airport - <span className="font-semibold">2 Min.</span>
              </li>
              <li>
                Amar Shaheed Path - <span className="font-semibold">2 Min.</span>
              </li>
              <li>
                Kanpur–Lucknow Highway -{" "}
                <span className="font-semibold">2 Min.</span>
              </li>
              <li>
                Amausi Metro Station -{" "}
                <span className="font-semibold">2 Min.</span>
              </li>
              <li>
                Phoenix United Mall -{" "}
                <span className="font-semibold">5 Min.</span>
              </li>
              <li>
                Lucknow Ring Road -{" "}
                <span className="font-semibold">10 Min.</span>
              </li>
            </ul>
          </div>

          {/* Right Map */}
          <div className="w-full md:w-3/4">
            <div className="w-full border border-[#e0e0e0] rounded-lg overflow-hidden">
              <div className="relative w-full pb-[56.25%]">
                {/* 16:9 ratio */}
                <iframe
                  title="Demo Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.407202898052!2d77.2065329!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3b6a6d65b3%3A0x2e6d0f0f8f01e6a8!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1733736400000!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}