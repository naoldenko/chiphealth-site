'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-[#685a4e] border-b-2 border-[#685a4e] dark:border-white">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#685a4e] dark:text-white">Chip Health</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-[#685a4e] dark:text-white dark:hover:text-[#e6ded6] font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/questionnaire" 
              className="text-gray-700 hover:text-[#685a4e] dark:text-white dark:hover:text-[#e6ded6] font-medium transition-colors"
            >
              Find a Therapist
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#685a4e] dark:text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#685a4e] dark:text-white dark:hover:text-[#e6ded6] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/questionnaire" 
                className="text-gray-700 hover:text-[#685a4e] dark:text-white dark:hover:text-[#e6ded6] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Find a Therapist
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 