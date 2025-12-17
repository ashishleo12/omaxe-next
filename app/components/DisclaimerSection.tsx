"use client";

import Link from "next/link";

export default function DisclaimerSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm leading-6 text-[#333333]">
          <span className="font-semibold">Disclaimer:</span>{" "}
          The content on this website is for information purposes only and does
          not constitute an offer to avail of any service. Prices mentioned are
          subject to change without notice and properties mentioned are subject
          to availability. Images are for representation purposes only. We may
          also send updates to the mobile number/email id registered with us.
        </p>

        <div className="mt-2 text-center">
          <Link
            href="#privacy-policy"
            className="text-[#0073c6] text-[13px] font-semibold hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
}