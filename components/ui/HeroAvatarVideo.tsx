"use client";

/**
 * HeroAvatarVideo.tsx — v2 (Positioning Fix)
 *
 * Shifting container right + narrower width so the figure clears the text block
 * without overlapping "Mehdi Mechkak. Applied AI Engineer."
 */

export default function HeroAvatarVideo() {
  return (
    <div className="absolute inset-y-0 right-0 z-0 w-[85%] translate-x-[8%] md:w-[70%] md:translate-x-[6%] overflow-hidden select-none">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover object-center"
      >
        <source src="/So_I_attached_the_pictures_he-nobg.mp4" type="video/mp4" />
        <source src="/avatar-tennis.webm" type="video/webm" />
        <source src="/avatar-tennis-fallback.mp4" type="video/mp4" />
      </video>

      {/* Legibility scrim: subtle gradient toward text side */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FAFAF7] via-[#FAFAF7]/50 to-transparent md:from-[#FAFAF7] md:via-[#FAFAF7]/25 md:to-transparent" />
    </div>
  );
}
