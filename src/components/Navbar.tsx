import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section: string) => {
    console.log(`Navigating to ${section}`);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-emerald" />
            <span className="text-xl font-bold text-emerald tracking-wide">
              EDEN CLICKS EVENTS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-emerald transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-emerald transition-colors duration-300 font-medium"
            >
              About Us
            </a>
            <a
              href="/events"
              className="text-gray-700 hover:text-emerald transition-colors duration-300 font-medium"
            >
              Events
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-emerald transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-emerald"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald hover:bg-gray-50 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="/about"
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald hover:bg-gray-50 transition-colors duration-300"
              >
                About Us
              </a>
              <a
                href="/events"
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald hover:bg-gray-50 transition-colors duration-300"
              >
                Events
              </a>
              <a
                href="/contact"
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald hover:bg-gray-50 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;