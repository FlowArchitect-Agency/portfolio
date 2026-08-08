'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ui/ThemeToggle';
import MagneticButton from '../ui/MagneticButton';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Work', href: '/work' },
    { label: 'Lab', href: '/#lab' },
    { label: 'About', href: '/#about' },
    { label: 'Say Hi 👋', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-borderColor py-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between">
        {/* Minimal Text Logo: ✦ Mehdi. */}
        <MagneticButton strength={0.15}>
          <Link href="/" className="font-display font-bold text-xl text-textPrimary tracking-tight flex items-center gap-1.5 select-none">
            <span className="text-accent font-bold text-lg">✦</span>
            <span>Mehdi.</span>
          </Link>
        </MagneticButton>

        {/* Navigation Links with Magnetic Hover */}
        <nav className="flex items-center gap-6 md:gap-10 font-sans text-sm font-medium">
          {navItems.map((item) => {
            const isActive =
              item.href === '/work'
                ? pathname.startsWith('/work')
                : pathname === '/' && item.href.startsWith('/#');

            return (
              <MagneticButton key={item.label} strength={0.2}>
                <a
                  href={item.href}
                  className={`transition-colors relative py-1 block ${
                    isActive
                      ? 'text-accent font-semibold'
                      : 'text-textSecondary hover:text-textPrimary'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
                  )}
                </a>
              </MagneticButton>
            );
          })}

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
