"use client";

/**
 * HeroAvatarVideo.tsx — v2
 *
 * Full background video layer of the hero — filling the entire hero container
 * with the headline text sitting on top via z-index.
 */

export default function HeroAvatarVideo() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden select-none">
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

      {/* Legibility scrim: subtle gradient darkens toward text side */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B0B0E] via-[#0B0B0E]/75 to-transparent md:from-[#0B0B0E] md:via-[#0B0B0E]/50 md:to-transparent" />
    </div>
  );
}
