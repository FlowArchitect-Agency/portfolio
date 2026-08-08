'use client';

interface StatusBadgeProps {
  idCode: string;
  status?: string;
  className?: string;
}

export default function StatusBadge({ idCode, status = 'ACTIVE', className = '' }: StatusBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-3 font-mono text-xs tracking-wider uppercase bg-surface/80 border border-borderMuted px-3 py-1.5 rounded-sm select-none ${className}`}>
      <span className="text-darkText/70">
        <span className="text-mutedText">ID:</span> {idCode}
      </span>
      <span className="w-1 h-1 rounded-full bg-borderMuted" />
      <span className="inline-flex items-center gap-1.5 text-accent font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="text-mutedText">STATUS /</span> {status}
      </span>
    </div>
  );
}
