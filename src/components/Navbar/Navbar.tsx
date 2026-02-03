import { useState } from "react";
import type { SchoolInfo } from "../../types/school";
import { NavLink } from "react-router-dom";
import { FaBars, FaPhoneAlt, FaTimes, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface NavLinkItem {
  name: string;
  path: string;
}

interface NavbarProps {
  schoolData: SchoolInfo;
}

const Navbar = ({ schoolData }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const links: NavLinkItem[] = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/program" },
    { name: "News", path: "/news" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Info Bar */}
      <div className="bg-blue-900 text-white text-xs md:text-sm flex justify-between items-center px-6 py-1">
        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-white" />
          <span>{schoolData.phone}</span>
          <MdEmail className="text-white" />
          <span>{schoolData.email}</span>
        </div>
        <div className="flex space-x-3">
          <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src={schoolData.logoUrl}
              alt={schoolData.name}
              className="h-14 w-14 rounded-full object-cover border-2 border-blue-600"
            />
            <div>
              <h1 className="font-bold text-xl md:text-2xl text-gray-800">{schoolData.name}</h1>
              <p className="text-sm md:text-base text-gray-600">{schoolData.address}</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-bold border-b-2 border-blue-600"
                        : "text-gray-700 font-medium hover:text-blue-600 transition-colors"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <NavLink
              to="/visit"
              className="ml-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-all"
            >
              Book a Visit
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-gray-800 focus:outline-none"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t shadow-inner">
            <ul className="flex flex-col px-6 py-4 space-y-3">
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 font-semibold rounded hover:bg-blue-100 ${
                        isActive ? "text-blue-600" : "text-gray-800"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <NavLink
                to="/visit"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg text-center hover:bg-blue-700 transition-all"
              >
                Book a Visit
              </NavLink>
            </ul>

            {/* Mobile Contact Info */}
            <div className="px-6 pb-4 pt-4 border-t space-y-2">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-blue-600" />
                <span className="text-gray-800 font-medium">{schoolData.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdEmail className="text-blue-600" />
                <span className="text-gray-800 font-medium">{schoolData.email}</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
