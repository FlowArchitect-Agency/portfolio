'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StylizedAvatar from '../ui/StylizedAvatar';
import ThemeToggle from '../ui/ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Work', href: '/work' },
    { label: 'Lab', href: '/#lab' },
    { label: 'About', href: '/#about' },
    { label: 'Say Hi 👋', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-borderColor py-3.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand: Avatar + Mehdi. ✦ */}
        <Link href="/" className="group flex items-center gap-3 font-display font-bold text-base text-textPrimary">
          <StylizedAvatar size="sm" />
          <span className="group-hover:text-accent transition-colors">
            Mehdi.<span className="text-accent ml-0.5">✦</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 md:gap-8 font-sans text-xs sm:text-sm font-medium">
          {navItems.map((item) => {
            const isActive =
              item.href === '/work'
                ? pathname.startsWith('/work')
                : pathname === '/' && item.href.startsWith('/#');

            return (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors relative py-1 ${
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
            );
          })}

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
