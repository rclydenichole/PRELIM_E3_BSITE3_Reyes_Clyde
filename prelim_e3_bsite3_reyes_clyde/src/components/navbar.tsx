'use client';

import Link from 'next/link';
import { UserCircle, Home, Menu, X, Handshake, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
    }
  }, []);
    

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Home className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">Lyceum of Alabang</span>
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-2">

            <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-700 transition"
            >
                {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>

            <Link href="/profile" className="p-2 rounded-full hover:bg-gray-700 transition">
              <UserCircle className="h-6 w-6" />
            </Link>
            <Link href="/settings" className="p-2 rounded-full hover:bg-gray-700 transition">
              <Handshake className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>

            <div className="flex space-x-2 px-3 py-2">
                <button
                    onClick={toggleDarkMode}
                    className="flex p-2 rounded-full hover:bg-gray-700 transition"
                    >
                        {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                        <span className="ml-2">Dark Mode</span>
                </button>
            </div>   
          <div className="flex space-x-2 px-3 py-2">
            <Link href="/about" className="flex p-2 rounded-full hover:bg-gray-700 transition">
              <UserCircle className="h-6 w-6" />
              <span className="ml-2">About Us</span>
            </Link>
          </div>
          <div className="flex space-x-2 px-3 py-2">
            <Link href="/contact" className="flex p-2 rounded-full hover:bg-gray-700 transition">
              <Handshake className="h-6 w-6" />
              <span className="ml-2">Contact Us</span>
            </Link>
          </div>
        </div>
    </nav>
  );
}