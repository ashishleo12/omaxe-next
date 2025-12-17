"use client";

export default function ConnectivitySection() {
  return (
    <section
      id="connectivity"
      className="w-full bg-white py-10 md:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 🔹 Top Connectivity Tab */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative inline-flex flex-col items-center gap-2">
            <div className="px-10 py-2 rounded-[8px] bg-[#0073c6]">
              <span className="text-white text-lg font-semibold">
                Connectivity Highlights
              </span>
            </div>
            <span className="block h-[2px] w-40 bg-[#0073c6]" />
          </div>
        </div>

        {/* 🔹 Title */}
        <h2 className="text-center text-xl md:text-2xl font-extrabold text-[#54595f] mb-6 font-lexend">
          Omaxe Amausi Highlights
        </h2>

        {/* 🔹 Description */}
        <p className="max-w-7xl mx-auto text-left text-[14px] md:text-base leading-9 text-[#333333] mb-8">
          Based in Amausi in Uttar Pradesh, Omaxe Amausi is well-served by various
          modes of public transportation, including buses, Lucknow Metro and taxis.
          Amausi Metro Station and Amausi Airport, is within a convenient distance.
        </p>

        {/* 🔹 Connectivity Table */}
        <div className="overflow-x-auto">
          <div className="min-w-full border border-[#e0e0e0]">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-b md:border-b border-r border-[#e0e0e0] px-6 py-4 text-center text-[14px] md:text-[15px] font-semibold text-[#54595f]">
                Amar Shaheed Path - 2 mins
              </div>
              <div className="border-b border-[#e0e0e0] px-6 py-4 text-center text-[14px] md:text-[15px] font-semibold text-[#54595f]">
                Lucknow Airport - 2 mins
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-b md:border-b border-r border-[#e0e0e0] px-6 py-4 text-center text-[14px] md:text-[15px] font-semibold text-[#54595f]">
                Kanpur–Lucknow Highway - 2 mins
              </div>
              <div className="border-b border-[#e0e0e0] px-6 py-4 text-center text-[14px] md:text-[15px] font-semibold text-[#54595f]">
                Lucknow Ring Road - 10 mins
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-r border-[#e0e0e0] px-6 py-4 text-center text-[14px] md:text-[15px] font-semibold text-[#54595f]">
                Amausi Metro Station - 2 mins
              </div>
              <div className="px-6 py-4 text-center text-[14px] md:text-[15px] font-semibold text-[#54595f]">
                Phoenix United Mall - 5 mins
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}