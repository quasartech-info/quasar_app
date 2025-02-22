import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
}
const navItems: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/portfolio' },
  { label: 'Insight', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <nav className="sticky w-full bg-white backdrop-blur-sm z-50 shadow ">
      <div className="  px-4 sm:px-6 xl:px-16 py-2  flex justify-between w-full items-center">
        <div className="flex items-center justify-between h-16   w-full">
          <div className="flex items-center">
            <Link to="/" className="flex items-center  overflow-hidden">
              <img src={logo} alt="Logo" className="h-16 w-36 object-cover" />
            </Link>
          </div>
          
          <div className="hidden xl:block ">
            <div className=" flex items-center space-x-12 ">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-[var(--color-primary)] uppercase hover:text-[var(--color-primary)] text-md transition-colors duration-300 font-extralight"
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact-us" className="bg-[var(--color-primary)] text-white p uppercase hover:text-[var(--color-primary)] text-md transition-colors duration-300 font-extralight px-3 py-3 flex items-center justify-center">
  Contact Us
</Link>
            </div>
          </div>
          
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6 text-[var(--color-primary)]"  /> : <Menu className="h-6 w-6 text-[var(--color-primary)] " />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="xl:hidden ">
          <div className="px-4 py-4  flex flex-col gap-4 sm:px-3 bg-white ">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-[var(--color-primary)] uppercase hover:text-[var(--color-primary)] text-md transition-colors duration-300 font-extralight"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}