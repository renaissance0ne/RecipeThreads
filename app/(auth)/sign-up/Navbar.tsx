'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({ href, label, isActive, onClick }: NavItemProps) => (
  <Link 
    href={href}
    onClick={onClick}
    className={`px-4 py-2 rounded-lg transition-colors ${
      isActive 
        ? 'bg-purple-300/20 text-purple-400' 
        : 'text-white hover:text-purple-300 hover:bg-black/40'
    }`}
  >
    {label}
  </Link>
);

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#explore', label: 'Explore' },
    { href: '#difference', label: 'Why Choose Us' },
    { href: '#team', label: 'Our Team' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-500/20 backdrop-blur-sm border-b border-secondary-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <Image
              src="/favicon.ico"
              alt="Ambrosia Logo"
              width={48}
              height={48}
            />
            <h1 className="text-white text-xl font-semibold">Ambrosia</h1>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4 bg-black/30 px-6 py-2 rounded-full backdrop-blur-sm">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  isActive={activeSection === item.href.slice(1)}
                  onClick={() => setActiveSection(item.href.slice(1))}
                />
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="flex items-center space-x-4">
                <Link href="/sign-in">
                  <span className="text-white hover:text-purple-300 font-medium transition-colors cursor-pointer">
                    Sign In
                  </span>
                </Link>
                <Link href="/sign-up">
                  <span className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors font-medium cursor-pointer">
                    Sign Up
                  </span>
                </Link>
              </div>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;