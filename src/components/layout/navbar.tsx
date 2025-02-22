import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Services',  icon: <ChevronDown className="h-5 w-5  font-bold" /> },
  { label: 'Industries',  icon: <ChevronDown className="h-5 w-5 font-bold" /> },
  { label: 'Insight', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about'},
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <nav className="sticky w-full bg-white backdrop-blur-sm z-50 shadow">
      <div className="px-4 sm:px-6 xl:px-16 py-2 flex justify-between w-full items-center">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center overflow-hidden">
              <img src={logo} alt="Logo" className="h-16 w-36 object-cover" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:block">
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href || '#'}
                  className="flex items-center text-[var(--color-primary)] uppercase hover:text-[var(--color-primary)] text-md transition-colors duration-300 font-extralight "
                >
                  {item.label} {item.icon}
                </Link>
              ))}
              <Link
                to="/contact-us"
                className="bg-[var(--color-primary)] text-white uppercase hover:text-[var(--color-primary)] text-md transition-colors duration-300 font-extralight px-4 py-2  flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-[var(--color-primary)]" />
              ) : (
                <Menu className="h-6 w-6 text-[var(--color-primary)]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden">
          <div className="px-4 py-4 flex flex-col gap-4 sm:px-3 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href || '#'}
                className="flex items-center text-[var(--color-primary)] uppercase hover:text-[var(--color-primary)] text-md transition-colors duration-300 font-extralight"
                onClick={() => setIsOpen(false)}
              >
                {item.label} {item.icon}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
