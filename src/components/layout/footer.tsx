import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 w-screen">
      <div className="w-full mx-auto px-4 sm:px-6 xl:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-thin text-white mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`#${item.toLowerCase()}`}
                    className="text-sm hover:text-[var(--color-primary)] font-extralight transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-thin text-white mb-4 uppercase">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing'].map((service) => (
                <li key={service}>
                  <Link
                    to={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm hover:text-[var(--color-primary)] transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-thin text-white mb-4 uppercase">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing'].map((service) => (
                <li key={service}>
                  <Link
                    to={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm hover:text-[var(--color-primary)] transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-thin text-white mb-4 uppercase">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing'].map((service) => (
                <li key={service}>
                  <Link
                    to={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm hover:text-[var(--color-primary)] transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-md  text-white mb-4 uppercase font-thin">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[var(--color-primary)]" />
                <span className="text-sm">123 Business Street, Suite 100, City, Country</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[var(--color-primary)]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[var(--color-primary)]" />
                <span className="text-sm">contact@portfolio.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} Quasar Technology. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link to="#" className="hover:text-[var(--color-primary)] transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-[var(--color-primary)] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
