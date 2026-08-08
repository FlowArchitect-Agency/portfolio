'use client';

import Image from 'next/image';

interface StylizedAvatarProps {
  size?: 'sm' | 'lg';
  className?: string;
}

export default function StylizedAvatar({ size = 'sm', className = '' }: StylizedAvatarProps) {
  const isSmall = size === 'sm';
  const dimension = isSmall ? 32 : 120;

  return (
    <div
      className={`relative inline-block rounded-full select-none shrink-0 ${
        isSmall ? 'w-8 h-8' : 'w-28 h-28 md:w-32 md:h-32'
      } ${className}`}
    >
      {/* Accent Ring */}
      <div className="absolute -inset-1 rounded-full border border-accent/60 bg-accent/10 animate-pulse-subtle pointer-events-none" />

      {/* Container Frame */}
      <div className="relative w-full h-full rounded-full overflow-hidden border border-borderColor bg-surface flex items-center justify-center">
        {/* High-Contrast Stylized Image */}
        <Image
          src="/avatar-photos/photo_1_2026-08-08_17-50-18.jpg"
          alt="Mehdi Mechkak"
          width={dimension}
          height={dimension}
          className="object-cover object-center grayscale contrast-125 brightness-95 hover:grayscale-0 transition-all duration-500"
          priority
        />
        {/* Subtle Accent Tint Overlay */}
        <div className="absolute inset-0 bg-accent/10 mix-blend-color pointer-events-none" />
      </div>

      {/* Live Status Indicator Dot */}
      <span
        className={`absolute bottom-0 right-0 rounded-full bg-accent border-2 border-background shadow-sm ${
          isSmall ? 'w-2.5 h-2.5' : 'w-4 h-4'
        }`}
        title="Available in Paris, France"
      />
    </div>
  );
}
