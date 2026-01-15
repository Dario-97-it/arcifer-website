import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Header Component - Dripping Palette Design
 * Navigation bar with logo and links to main sections
 * Mobile-responsive with hamburger menu
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/logo-arcifer.png"
            alt="Arcifer Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold text-xl hidden sm:inline text-slate-900">
            Arcifer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-slate-700 hover:text-[#E63946] transition-colors font-medium">
            Home
          </Link>
          <Link href="/chi-siamo" className="text-slate-700 hover:text-[#E63946] transition-colors font-medium">
            Chi Siamo
          </Link>
          <a
            href="tel:+39095741480"
            className="btn-arcifer text-sm"
          >
            Chiama Ora
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-slate-900" />
          ) : (
            <Menu className="w-6 h-6 text-slate-900" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-3">
          <Link
            href="/"
            className="block text-slate-700 hover:text-[#E63946] transition-colors font-medium py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/chi-siamo"
            className="block text-slate-700 hover:text-[#E63946] transition-colors font-medium py-2"
            onClick={() => setIsOpen(false)}
          >
            Chi Siamo
          </Link>
          <a
            href="tel:+39095741480"
            className="block btn-arcifer text-center text-sm"
          >
            Chiama Ora
          </a>
        </nav>
      )}
    </header>
  );
}
