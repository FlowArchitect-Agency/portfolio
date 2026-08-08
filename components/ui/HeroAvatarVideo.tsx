"use client";

export default function HeroAvatarVideo() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[60%] md:w-[50%] flex items-center justify-end overflow-hidden select-none">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-contain object-right opacity-90 transition-opacity duration-300"
      >
        <source src="/avatar-tennis.webm" type="video/webm" />
        <source src="/avatar-tennis-fallback.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
