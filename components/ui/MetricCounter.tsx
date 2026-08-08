'use client';

interface MetricCounterProps {
  value: string;
  label: string;
  subtext?: string;
  className?: string;
}

export default function MetricCounter({ value, label, subtext, className = '' }: MetricCounterProps) {
  return (
    <div className={`bg-surface border border-borderColor p-6 rounded-xl space-y-2 ${className}`}>
      <div className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-accent font-tnum">
        {value}
      </div>
      <div className="font-sans font-semibold text-sm text-textPrimary uppercase tracking-wide">
        {label}
      </div>
      {subtext && (
        <div className="font-sans text-xs text-textMuted leading-relaxed">
          {subtext}
        </div>
      )}
    </div>
  );
}
