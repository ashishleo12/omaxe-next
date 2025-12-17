"use client";

export default function AboutDeveloper() {
  return (
    <section
      id="about-developer"
      className="w-full bg-white py-10 md:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 🔹 Top About Developer Tab */}
        <div className="flex flex-col items-left mb-4">
          <div className="relative inline-flex flex-col items-center gap-2">
            <div className="px-10 py-2 rounded-[8px] bg-[#0073c6]">
              <span className="text-white text-lg font-semibold">
                About Developer
              </span>
            </div>
            <span className="block h-[2px] w-40 bg-[#0073c6]" />
          </div>
        </div>

        {/* 🔹 Title */}
        <h2 className="text-center text-xl md:text-2xl font-extrabold text-[#54595f] mb-6 font-lexend">
          Omaxe Group
        </h2>

        {/* 🔹 Description */}
        <p className="mx-auto text-[15px] md:text-[16px] leading-8 text-[#333333]">
          Omaxe Group is one of India’s leading real estate developers, known for
          its quality work and innovative ideas. With years of experience, the
          company has developed many residential, commercial, and mixed-use
          projects across the country. Omaxe is committed to creating safe,
          green, and well-designed spaces that make life better for people. The
          company always aims to keep its customers satisfied and believes in
          building strong, long-lasting relationships with them.
        </p>
      </div>
    </section>
  );
}