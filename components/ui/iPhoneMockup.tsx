'use client';

import { useState } from 'react';
import { ExternalLink, RefreshCw, Smartphone } from 'lucide-react';

interface IphoneMockupProps {
  demoUrl: string;
  title?: string;
}

export default function IphoneMockup({ demoUrl, title = 'Polylingual Live Agent' }: IphoneMockupProps) {
  const [key, setKey] = useState(0);

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div className="w-full my-12 flex flex-col items-center select-none">
      {/* Control Bar */}
      <div className="w-full max-w-[380px] sm:max-w-[420px] bg-surfaceElevated border border-borderColor border-b-0 rounded-t-2xl px-5 py-3 flex items-center justify-between font-mono text-xs text-textMuted select-none">
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-accent" />
          <span className="text-textSecondary font-medium">{title}</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleRefresh}
            title="Reload Demo"
            className="hover:text-textPrimary transition-colors flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="text-[10px]">RELOAD</span>
          </button>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in new window"
            className="hover:text-accent transition-colors flex items-center gap-1 font-semibold"
          >
            <span>FULLSCREEN</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Realistic CSS iPhone Frame */}
      <div className="w-full max-w-[380px] sm:max-w-[420px] h-[720px] bg-[#0E0E11] border-[10px] border-[#1C1C22] rounded-[48px] p-2.5 shadow-2xl relative transition-transform duration-500 ease-out hover:scale-[1.01] hover:-rotate-1 group ring-1 ring-white/10">
        {/* Dynamic Island Notch Pill */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#000000] rounded-full z-30 flex items-center justify-between px-3 border border-white/10 shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-accent/60 animate-pulse" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#111115]" />
        </div>

        {/* Home Bar Indicator Bottom */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-30 pointer-events-none" />

        {/* Screen Bezel & Interactive Scrollable Iframe Container */}
        <div className="w-full h-full rounded-[38px] overflow-hidden bg-background relative z-10 border border-white/5">
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

      {/* Interactive Guidance Label */}
      <p className="mt-4 font-mono text-xs text-textMuted uppercase tracking-widest flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        [INTERACTIVE IPHONE DEMO // SCROLL & CLICK TO TEST REAL-TIME CASE ANALYSIS]
      </p>
    </div>
  );
}
