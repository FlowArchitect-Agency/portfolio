"use client";

/**
 * HeroAvatarVideo.tsx — Keyed background video layer for the hero
 *
 * Positioned on the right side of the hero container with smooth fallback support.
 */

export default function HeroAvatarVideo() {
  return (
    <div className="absolute inset-y-0 right-0 z-0 w-full md:w-[65%] lg:w-[60%] h-full overflow-hidden select-none pointer-events-none flex items-center justify-end">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="h-full w-full object-cover object-center md:object-contain md:object-right"
      >
        <source src="/So_I_attached_the_pictures_he-nobg.mp4" type="video/mp4" />
        <source src="/avatar-tennis-fallback.mp4" type="video/mp4" />
      </video>

      {/* Legibility scrim */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FAFAF7] via-[#FAFAF7]/40 to-transparent md:from-[#FAFAF7] md:via-[#FAFAF7]/20 to-transparent" />
    </div>
  );
}
