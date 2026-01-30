import schoollogo from '../../assets/school logo.jpg'
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
 

  return (
    <div className="bg-gray-100">
      {/* Top Info Bar */}
      <div className="bg-blue-900 text-white text-sm flex justify-between items-center px-6 py-2">
        <p className="font-bold mx-9">An exclusive college</p>
        <div className="flex space-x-4">
          <NavLink to="#" className="font-bold hover:text-gray-300">Facebook</NavLink>
          <NavLink to="#" className="font-bold hover:text-gray-300">Twitter</NavLink>
          <NavLink to="#" className="font-bold hover:text-gray-300">YouTube</NavLink>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo and School Name*/}
          <div className="flex items-center space-x-4">
            <img
              src={schoollogo}
              alt="School Logo"
              className="h-14 w-14 rounded-full"
            />
            <div>
              <h1 className="font-bold text-xl text-gray-800">Buddha English Boarding School</h1>
              <p className="text-red-600 font-bold text-sm">Gramthan-6, Morang, Nepal</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhone className="h-5 w-5" />
              <div>
                <p className="text-gray-800 font-bold text-sm">+97700000</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail className="h-5 w-5" />
              <p className="text-gray-800 font-bold text-sm">mail@BuddhaSchool.edu.np</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="bg-gray-100">
          <div className="container mx-auto px-6">
            <ul className="flex flex-wrap justify-center md:justify-evenly space-x-6 py-4 text-gray-700 font-medium">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Programs", path: "/program" },
                { name: "News", path: "/news" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact ", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                        isActive ? "text-blue-600 font-bold after:w-full" : "hover:text-blue-600"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

              <li>
                <NavLink
                  to="/apply"
                  className={({ isActive }) =>
                    `relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                      isActive ? "text-blue-600 font-bold after:w-full" : "text-blue-600 hover:text-blue-800 font-bold"
                    }`
                  }
                >
                  Apply Now
                </NavLink>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
