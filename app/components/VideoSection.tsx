"use client";

import React from "react";

const VideoSection: React.FC = () => {
  // Apne actual video paths yahan daal dena
  const desktopVideo = "/videos/desk1.mp4";
  const phoneVideos = [
    {
      src: "/videos/1.mp4",
      label: "Instagram Reel 1",
      description: "Mobile walkthrough preview",
    },
    {
      src: "/videos/2.mp4",
      label: "Instagram Reel 2",
      description: "Engagement & highlights",
    },
  ];

  return (
    <section className="w-full bg-[#f5fbff] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Heading */}
        <div className="mb-10 text-center space-y-2">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#c7e4ff] bg-white px-4 py-1 text-xs md:text-sm uppercase tracking-[0.15em] text-[#0268ae]">
            <span className="text-[10px]">●</span> Overview
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003366] font-lexend">
            Watch the Project in Action
          </h2>
        </div>

        {/* Layout: phones side-side, desktop center on large screens */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:justify-center">
          {/* LEFT PHONE (only on lg as side) */}
          <div className="hidden lg:flex flex-col items-center">
            <PhoneMockup video={phoneVideos[0]} align="left" />
          </div>

          {/* CENTER DESKTOP */}
          <div className="w-full max-w-3xl">
            <DesktopMockup desktopVideo={desktopVideo} />
          </div>

          {/* RIGHT PHONE (only on lg as side) */}
          <div className="hidden lg:flex flex-col items-center">
            <PhoneMockup video={phoneVideos[1]} align="right" />
          </div>
        </div>

        {/* Phones on mobile/tab (stacked under desktop) */}
        <div className="mt-10 flex flex-col items-center gap-6 lg:hidden">
          {phoneVideos.map((video, index) => (
            <PhoneMockup key={video.src} video={video} align={index === 0 ? "left" : "right"} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

/* -------------------- Desktop Mockup Component -------------------- */

type DesktopMockupProps = {
  desktopVideo: string;
};

const DesktopMockup: React.FC<DesktopMockupProps> = ({ desktopVideo }) => {
  return (
    <div className="relative">
      {/* Soft blue glow */}
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-linear-to-tr from-[#cde9ff] via-transparent to-[#cde9ff] blur-2xl" />

      <div className="relative overflow-hidden rounded-3xl border border-[#c7e4ff] bg-white shadow-[0_22px_45px_rgba(15,23,42,0.18)]">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-[#dbeafe] bg-[#eaf4ff]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f97373]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
        </div>

        {/* Desktop video */}
        <div className="relative aspect-video bg-black">
          <video
            src={desktopVideo}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>

        {/* Caption */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-[#dbeafe] bg-[#f8fbff] text-xs md:text-sm text-[#1f2933]">
          <div>
            <p className="text-[11px] md:text-xs text-[#6b7280]">
              Full Overview
            </p>
          </div>
          <span className="rounded-full border border-[#bfdbfe] bg-white px-3 py-1 text-[11px] uppercase tracking-wide text-[#0369a1]">
            HD Preview
          </span>
        </div>
      </div>
    </div>
  );
};

/* -------------------- Phone Mockup Component -------------------- */

type PhoneVideo = {
  src: string;
  label: string;
  description: string;
};

type PhoneMockupProps = {
  video: PhoneVideo;
  align?: "left" | "right";
};

const PhoneMockup: React.FC<PhoneMockupProps> = ({ video, align = "left" }) => {
  return (
    <div
      className={`relative ${
        align === "left" ? "lg:-translate-y-2" : "lg:translate-y-2"
      }`}
    >
      {/* Soft blue glow */}
      <div className="pointer-events-none absolute -inset-3 rounded-[2.2rem] bg-linear-to-b from-[#dbeafe] via-transparent to-[#bfdbfe] blur-xl" />

      {/* Phone frame */}
      <div className="relative rounded-4xl border border-[#bfdbfe] bg-white shadow-[0_18px_38px_rgba(15,23,42,0.25)] p-1 max-w-[230px] w-[70vw] sm:w-[55vw] md:w-[40vw] lg:w-[230px]">
        {/* Top notch */}
        <div className="absolute left-1/2 top-2 flex -translate-x-1/2 items-center justify-center">
          <div className="h-5 w-20 rounded-full bg-[#0f172a] flex items-center justify-center">
            <span className="mr-2 h-2 w-2 rounded-full bg-slate-400" />
            <span className="h-1.5 w-10 rounded-full bg-slate-500" />
          </div>
        </div>

        {/* Side buttons (decoration) */}
        <div className="absolute left-0 top-16 h-10 w-[2px] rounded-r-full bg-[#cbd5f5]" />
        <div className="absolute right-0 top-24 h-8 w-[2px] rounded-l-full bg-[#cbd5f5]" />

        {/* Video area */}
        <div className="mt-4 overflow-hidden rounded-[1.6rem] bg-black">
          <video
            src={video.src}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
      </div>

      {/* Caption */}
      <div className="mt-3 text-center text-xs text-[#4b5563]">
        <p className="font-medium text-[#003366]">{video.label}</p>
        <p className="text-[11px] text-[#6b7280]">{video.description}</p>
      </div>
    </div>
  );
};
