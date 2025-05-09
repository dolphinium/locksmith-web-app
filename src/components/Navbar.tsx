"use client"; // Required for state and event handlers
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#services", label: "Hizmetlerimiz" },
    { href: "/#about", label: "Hakkımızda" },
    { href: "/#gallery", label: "Galeri" },
    { href: "/#location", label: "Konumumuz" },
    { href: "/#contact", label: "İletişim" },
  ];

  return (
    <nav className="bg-[var(--background)] p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[var(--accent-green)] hover:text-green-700 transition-colors">
          Anahtarcı Osman
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[var(--foreground)] hover:text-[var(--accent-green)] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[var(--foreground)] hover:text-[var(--accent-green)] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 space-y-2 pb-3 border-t border-neutral-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-[var(--foreground)] hover:text-[var(--accent-green)] hover:bg-neutral-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
