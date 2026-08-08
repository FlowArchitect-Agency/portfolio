'use client';

import { useState, useEffect } from 'react';

interface ChapterItem {
  id: string;
  number: string;
  title: string;
}

export default function StickyChapterNav({ chapters }: { chapters: ChapterItem[] }) {
  const [activeId, setActiveId] = useState<string>(chapters[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = chapters.length - 1; i >= 0; i--) {
        const section = document.getElementById(chapters[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(chapters[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [chapters]);

  return (
    <nav aria-label="Chapter Table of Contents" className="sticky top-28 hidden lg:block select-none">
      <div className="font-mono text-[10px] text-textMuted uppercase tracking-widest mb-4">
        CHAPTERS
      </div>
      <ul className="space-y-2 border-l border-borderColor pl-3 text-xs">
        {chapters.map((ch) => {
          const isActive = activeId === ch.id;
          return (
            <li key={ch.id}>
              <a
                href={`#${ch.id}`}
                className={`group flex items-center gap-2.5 transition-colors py-1 ${
                  isActive
                    ? 'text-accent font-semibold'
                    : 'text-textMuted hover:text-textPrimary'
                }`}
              >
                <span
                  className={`font-tnum font-mono text-[11px] ${
                    isActive ? 'text-accent' : 'text-textMuted group-hover:text-textSecondary'
                  }`}
                >
                  {ch.number}
                </span>
                <span className="truncate max-w-[170px]">{ch.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
