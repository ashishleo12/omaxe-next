"use client";

import Image from "next/image";

export default function PriceSection() {
  const rows = [
    {
      config: "Retail Shops",
      carpet: "On Request",
      price: "On Request",
    },
    {
      config: "Studio Apartments",
      carpet: "On Request",
      price: "On Request",
    },
  ];

  return (
    <section id="price" className="w-full bg-white py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 🔹 Top Price Tab */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative inline-flex flex-col items-center gap-2">
            <div className="px-10 py-2 rounded-[8px] bg-[#0073c6]">
              <span className="text-white text-lg font-semibold">
                Price Plan
              </span>
            </div>
            <span className="block h-[2px] w-40 bg-[#0073c6]" />
          </div>
        </div>

        {/* 🔹 Title */}
        <h2 className="text-center text-xl md:text-2xl font-extrabold text-[#54595f] mb-8 font-lexend">
          Omaxe Amausi Price
        </h2>

        {/* 🔹 Table + Image (row on lg) */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Table */}
          <div className="w-full lg:w-[60%]">
            <div className="overflow-x-auto">
              <table className="min-w-full border border-[#e0e0e0] text-[14px] md:text-[15px]">
                <thead className="bg-[#f9f9f9] text-black">
                  <tr>
                    <th className="border border-[#e0e0e0] px-4 py-3 text-left font-semibold">
                      Configuration
                    </th>
                    <th className="border border-[#e0e0e0] px-4 py-3 text-left font-semibold">
                      Carpet Area (sq.ft.)
                    </th>
                    <th className="border border-[#e0e0e0] px-4 py-3 text-left font-semibold">
                      Price
                    </th>
                    <th className="border border-[#e0e0e0] px-4 py-3 text-left font-semibold">
                      &nbsp;
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.config} className="bg-white">
                      <td className="border border-[#e0e0e0] px-4 py-3 font-semibold text-[#333333]">
                        {row.config}
                      </td>
                      <td className="border border-[#e0e0e0] px-4 py-3">
                        <button className="inline-block rounded-md bg-[#0073c6] px-4 py-1.5 md:text-sm text-xs font-semibold text-white hover:bg-[#005fa3] transition-colors duration-200">
                          {row.carpet}
                        </button>
                      </td>
                      <td className="border border-[#e0e0e0] px-4 py-3">
                        <button className="inline-block rounded-md bg-[#0073c6] px-4 py-1.5 md:text-sm text-xs font-semibold text-white hover:bg-[#005fa3] transition-colors duration-200">
                          {row.price}
                        </button>
                      </td>
                      <td className="border border-[#e0e0e0] px-4 py-3">
                        <button className="inline-block rounded-md bg-[#0073c6] px-4 py-1.5 md:text-sm text-xs font-semibold text-white hover:bg-[#005fa3] transition-colors duration-200">
                          Price Breakup
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[40%] flex flex-col items-center">
            <div className="w-full max-w-md border border-[#e0e0e0]">
              <Image
                src="/Price.jpeg"
                alt="Price Sheet"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="mt-3 text-center text-base md:text-base text-[#333333]">
              Complete Costing Details
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}