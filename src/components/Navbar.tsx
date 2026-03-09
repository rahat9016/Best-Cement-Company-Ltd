"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", active: true },
    { label: "About Us", href: "#about", active: false },
    { label: "Career", href: "#career", active: false },
    { label: "Services", href: "#services", active: false },
    { label: "Projects", href: "#projects", active: false },
    { label: "Contact Us", href: "#contact", active: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-[60px] sm:h-[70px] lg:h-[80px]">
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center shrink-0 rounded-lg transition-all duration-300 ${
            scrolled ? "bg-primary px-3 py-1.5" : ""
          }`}
        >
          <Image
            src="/images/best-cement-logo.png"
            alt="Best Cement Company Ltd"
            width={180}
            height={60}
            className="h-[40px] sm:h-[50px] lg:h-[55px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm xl:text-base font-medium transition-colors duration-300 flex items-center gap-1 ${
                item.active
                  ? "text-primary"
                  : scrolled
                    ? "text-dark/70 hover:text-primary"
                    : "text-white/70 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="#contact"
          className={`hidden lg:inline-flex items-center px-5 xl:px-7 py-2.5 xl:py-3 font-heading font-semibold text-sm rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-primary text-white hover:bg-primary-dark"
              : "bg-primary text-white hover:bg-primary-dark"
          }`}
        >
          Talk to Our Team
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-colors duration-300 ${
            scrolled ? "text-dark" : "text-white"
          }`}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`lg:hidden backdrop-blur-md border-t px-6 pb-6 pt-2 ${
            scrolled
              ? "bg-white/95 border-dark/5"
              : "bg-dark/95 border-white/5"
          }`}
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-sm font-medium border-b transition-colors ${
                scrolled
                  ? `border-dark/5 ${item.active ? "text-primary" : "text-dark/70 hover:text-primary"}`
                  : `border-white/5 ${item.active ? "text-primary" : "text-white/70 hover:text-primary"}`
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex items-center px-7 py-3 font-heading font-semibold text-sm rounded-full border bg-primary text-white border-primary"
          >
            Talk to Our Team
          </Link>
        </div>
      )}
    </nav>
  );
}
