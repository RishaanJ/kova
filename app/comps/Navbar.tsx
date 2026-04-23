
"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

type NavLink = {
  label: string;
  href: string;
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { label: "How It Works", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-white/80 backdrop-blur-lg border-b border-gray-200"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="z-50 flex items-center">
          <Image src="/logotransp.png" alt="Kova Logo" width={120} height={40} className="h-8 w-auto" />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#cta-final"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-black text-white text-sm font-semibold hover:opacity-90 transition"
        >
          Get Started
          <span>→</span>
        </a>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1 z-50"
        >
          <span
            className={`w-6 h-[2px] bg-gray-900 transition-transform ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-gray-900 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-gray-900 transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-gray-800 hover:text-black transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#cta-final"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-6 py-3 rounded-xl bg-black text-white font-semibold"
          >
            Get Started →
          </a>
        </div>
      </div>
    </nav>
  );
}