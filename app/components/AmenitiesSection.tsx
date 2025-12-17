"use client";

export default function AmenitiesSection() {
  const amenities = [
    "Star Gazing Area",
    "Anchor Place",
    "Restaurants",
    "High Speed Elevators",
    "Business Centre",
    "Car Parking",
    "Food Courts",
    "CCTV Surveillance",
  ];

  return (
    <section
      id="amenities"
      className="w-full bg-white py-10 md:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 🔹 Top Amenities Tab */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative inline-flex flex-col items-center gap-2">
            <div className="px-10 py-2 rounded-[8px] bg-[#0073c6]">
              <span className="text-white text-lg font-semibold">
                Amenities
              </span>
            </div>
            <span className="block h-[2px] w-40 bg-[#0073c6]" />
          </div>
        </div>

        {/* 🔹 Title */}
        <h2 className="text-center font-lexend text-xl md:text-2xl font-extrabold text-[#54595f] mb-8">
          Omaxe Amausi Amenities
        </h2>

        {/* 🔹 Box + Amenity Cards */}
        <div className="border border-[#e0e0e0] bg-white px-3 md:px-6 py-6 md:py-8">
          <div
            className="
              grid gap-4
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {amenities.map((item) => (
              <div
                key={item}
                className="
                  bg-[#f3f3f3]
                  rounded-[12px]
                  shadow-sm
                  px-4
                  py-3
                  flex
                  items-center
                  justify-center
                  text-center
                  text-[14px]
                  md:text-[15px]
                  font-semibold
                  text-[#555555]
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}