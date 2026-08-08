'use client';

import { useState } from 'react';
import { ExternalLink, RefreshCw, Smartphone } from 'lucide-react';

interface PhoneMockupProps {
  demoUrl: string;
  title?: string;
}

export default function PhoneMockup({ demoUrl, title = 'Polylingual Live Agent' }: PhoneMockupProps) {
  const [key, setKey] = useState(0);

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div className="w-full my-8 flex flex-col items-center">
      {/* Device Header Bar */}
      <div className="w-full max-w-[420px] bg-surfaceElevated border border-borderColor border-b-0 rounded-t-2xl px-4 py-2.5 flex items-center justify-between font-mono text-[11px] text-textMuted select-none">
        <div className="flex items-center gap-2">
          <Smartphone className="w-3.5 h-3.5 text-accent" />
          <span className="text-textSecondary font-medium">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            title="Reload Demo"
            className="hover:text-textPrimary transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in new tab"
            className="hover:text-accent transition-colors flex items-center gap-1"
          >
            <span>OPEN</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Device Chassis (3D tilt effect on hover) */}
      <div className="w-full max-w-[420px] h-[680px] bg-[#000000] border-2 border-borderColor rounded-b-3xl p-3 shadow-2xl relative transition-transform duration-500 ease-out hover:scale-[1.01] hover:-rotate-1 group">
        {/* Speaker / Notch Pill */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black border border-white/10 rounded-full z-20 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-accent/40" />
        </div>

        {/* Screen Bezel & Interactive Iframe Container */}
        <div className="w-full h-full rounded-[22px] overflow-hidden bg-surface relative z-10 border border-white/5">
          <iframe
            key={key}
            src={demoUrl}
            title={title}
            className="w-full h-full border-0"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>
      </div>

      {/* Caption instruction */}
      <p className="mt-3 font-mono text-[11px] text-textMuted uppercase tracking-wider">
        [INTERACTIVE DEMO // TILT & SCROLL TO TEST LIVE AGENT]
      </p>
    </div>
  );
}
