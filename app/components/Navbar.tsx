"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Latihan Soal", href: "/practice" },
    { label: "Progress", href: "/dashboard" },
    { label: "Tentang Kami", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex item-center gap-2">
          <span className="text-2xl font-bold text-indigo-400">日</span>
          <span className="text-lg font-semibold text-white">
            JLPT<span className="text-indigo-400">Practice</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <Link
          href="/practice"
          className="hidden md:inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          Mulai Test
        </Link>

        {/* Hamburger - Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu  */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-slate-300 hover:text-indigo-400 py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/practice"
            onClick={() => setIsOpen(false)}
            className="block bg-indigo-500 text-white text-sm font-semibold text-center px-5 py-2.5 rounded-lg mt-2"
          >
            Mulai Test
          </Link>
        </div>
      )}
    </header>
  );
}
