"use client";

/**
 * HeroAvatarVideo.tsx — Keyed background video layer for the hero
 *
 * Positioned on the right side of the hero container with smooth fallback support.
 */

export default function HeroAvatarVideo() {
  return (
    <div className="absolute inset-y-0 right-0 z-0 w-[85%] translate-x-[5%] md:w-[65%] md:translate-x-[2%] overflow-hidden select-none pointer-events-none">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover object-center"
      >
        <source src="/avatar-tennis.webm" type="video/webm" />
        <source src="/avatar-tennis-fallback.mp4" type="video/mp4" />
      </video>

      {/* Legibility scrim: subtle light gradient toward text side */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FAFAF7] via-[#FAFAF7]/60 to-transparent md:from-[#FAFAF7] md:via-[#FAFAF7]/30 md:to-transparent" />
    </div>
  );
}
