"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function EnquiryForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${name}! We’ll contact you soon at ${phone}.`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-100 flex items-center justify-center">
          {/* 🔹 Animated Modal Box */}
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="relative bg-white w-[95%] max-w-lg rounded-lg shadow-xl p-6 md:p-8 z-50"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              ✕
            </button>

            {/* Header */}
            <h2 className="text-center text-2xl font-semibold text-[#0073c6] mb-4">
              Enquire Now
            </h2>

            {/* Logo */}
            <div className="flex justify-center mb-2">
              <Image
                src="/logo.webp"
                alt="Logo"
                width={100}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </div>

            <div className="text-center text-[15px] mb-4 font-medium">
              <p className="text-red-600 font-semibold mb-2">
                Register Here For Pre-Launch Offers!
              </p>
              {/* 🔹 Static Info Lines (no marquee) */}
              <div className="mt-4 bg-linear-to-r from-[#eaf4ff] to-[#f5fbff] text-[#0268ae] py-1 text-center text-[13px] sm:text-[14px] font-lexend font-medium border-y border-blue-100 rounded-md space-y-1">
                <p className="font-semibold text-[#135382] ">
                  12% Annual Return (AR) for a 48-month term
                </p>
                <p className="text-[#0268ae]">
                  9-year Lease Guarantee – Five-Star Hotel Chain
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:border-transparent placeholder:text-black "
                  placeholder="Enter your full name"
                  aria-label="Full Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-black placeholder:text-black"
                  placeholder="Enter your phone number"
                  aria-label="Phone Number"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0073c6] text-white py-2 rounded-md font-semibold hover:bg-[#005ea3] transition-all"
              >
                Submit
              </button>

              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="accent-[#0073c6]"
                />
                <p>
                  By submitting, I accept{" "}
                  <a
                    href="#"
                    className="text-[#0073c6] hover:underline font-medium"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </form>

            {/* Side Buttons (like Omaxe) */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="border rounded-md py-2 text-sm hover:bg-gray-50 cursor-pointer">
                📞 <br />
                <span className="font-medium text-[#0073c6]">
                  Instant Call Back
                </span>
              </div>
              <div className="border rounded-md py-2 text-sm hover:bg-gray-50 cursor-pointer">
                🚗 <br />
                <span className="font-medium text-[#0073c6]">
                  Free Site Visit
                </span>
              </div>
              <div className="border rounded-md py-2 text-sm hover:bg-gray-50 cursor-pointer">
                💰 <br />
                <span className="font-medium text-[#0073c6]">
                  Unmatched Price
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
