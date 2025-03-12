"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { TbDatabaseSearch } from "react-icons/tb";
import { SiDatabricks } from "react-icons/si";
import { BiHelpCircle } from "react-icons/bi";
import { LuContactRound, LuUserRound } from "react-icons/lu";

const NavLink = ({ href, icon: Icon, children }) => (
  <Link
    href={href}
    className="hover:text-gray-300 flex items-center transition-colors gap-2"
  >
    <Icon /> {children}
  </Link>
);

const MLink = ({ href, icon: Icon, children }) => (
  <Link
    href={href}
    className="hover:text-gray-300 flex items-center justify-center transition-colors gap-2"
  >
    <Icon /> {children}
  </Link>
);

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-tr from-blue-600 to-purple-600 text-gray-50 font-semibold shadow-lg py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center justify-center w-full md:w-auto">
            <Image
              src="/images/dblogo.png"
              alt="trevoDB"
              width={150}
              height={150}
              className="w-32 sm:w-24 lg:w-[150px] h-auto object-contain"
            />
          </div>
          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NavLink href="/" icon={AiOutlineHome}>Home</NavLink>
            <NavLink href="/search" icon={TbDatabaseSearch}>Search</NavLink>
            <NavLink href="/datasets" icon={SiDatabricks}>Datasets</NavLink>
            <NavLink href="/help" icon={BiHelpCircle}>Help</NavLink>
            <NavLink href="/contact" icon={LuContactRound}>Contact</NavLink>
            <button className="bg-blue-100 text-gray-800 border border-gray-300 px-4 py-2 flex items-center gap-2 rounded-md hover:bg-purple-100 transition-colors">
              <LuUserRound /> Login
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-50 hover:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-full rounded-md shadow-md justify-center">
                <MLink href="/" icon={AiOutlineHome}>Home</MLink>
                <MLink href="/search" icon={TbDatabaseSearch}>Search</MLink>
                <MLink href="/datasets" icon={SiDatabricks}>Datasets</MLink>
                <MLink href="/help" icon={BiHelpCircle}>Help</MLink>
                <MLink href="/contact" icon={LuContactRound}>Contact</MLink>
              </div>
              <button className="bg-blue-100 text-gray-800 border border-gray-300 px-4 py-2 flex items-center gap-2 rounded-md hover:bg-purple-100 transition-colors">
                <LuUserRound /> Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
