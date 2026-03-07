"use client";

import { ChevronDown, Leaf, Menu, X } from "lucide-react";
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
    { label: "Services", href: "#services", active: false, hasDropdown: true },
    { label: "Page", href: "#", active: false, hasDropdown: true },
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
      <div className="site-container flex items-center justify-between h-[80px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <Leaf size={28} className="text-primary" fill="#009dab" />
          <span
            className={`font-heading font-bold text-xl tracking-tight transition-colors duration-300 ${
              scrolled ? "text-white" : "text-white"
            }`}
          >
            Concretize
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${
                item.active
                  ? "text-primary"
                  : scrolled
                    ? "text-white/70 hover:text-primary"
                    : "text-white/70 hover:text-primary"
              }`}
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown size={10} strokeWidth={2.5} />
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className={`hidden lg:inline-flex items-center px-7 py-3 font-heading font-semibold text-sm rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-primary text-white hover:bg-primary-dark"
              : "bg-dark text-white border border-white/10 hover:bg-primary hover:text-white"
          }`}
        >
          Talk to Our Team
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-colors duration-300 ${
            scrolled ? "text-white" : "text-white"
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
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-sm font-medium border-b transition-colors ${
                scrolled
                  ? `border-dark/5 ${item.active ? "text-primary" : "text-white/70 hover:text-primary"}`
                  : `border-white/5 ${item.active ? "text-primary" : "text-white/70 hover:text-primary"}`
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`mt-4 inline-flex items-center px-7 py-3 font-heading font-semibold text-sm rounded-full border ${
              scrolled
                ? "bg-primary text-white border-primary"
                : "bg-dark text-white border-white/10"
            }`}
          >
            Talk to Our Team
          </a>
        </div>
      )}
    </nav>
  );
}
