'use client';

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Certificate'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="group flex items-center space-x-2">
              <div className="relative">
                <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-violet-500 group-hover:to-indigo-600">
                  Nile.dev
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
            <a
              href="tel:0959562191"
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 transition-all duration-300 text-sm font-medium shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40"
            >
              <span>095-956-2191</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200"
            >
              <span className="sr-only">Toggle menu</span>
              <Menu className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-950/95 backdrop-blur-lg rounded-b-2xl shadow-xl`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
              >
                {item}
              </a>
            ))}
            <a
              href="tel:0959562191"
              className="flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
            >
              <span>095-956-2191</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;