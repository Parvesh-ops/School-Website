import { Link, useLocation } from "react-router-dom";
import { Home, ChevronRight, Info, Image, Phone, Newspaper, BookOpen, Building2 } from "lucide-react";
import type { JSX } from "react";
import { useTheme } from "../../context/ThemeContext";

const nameMap: Record<string, string> = {
  about: "About Us",
  program: "Programs",
  gallery: "Gallery",
  contact: "Contact",
  news: "News",
  visit: "Book a Visit",
};

const iconMap: Record<string, JSX.Element> = {
  about: <Info size={15} />,
  program: <BookOpen size={15} />,
  gallery: <Image size={15} />,
  contact: <Phone size={15} />,
  news: <Newspaper size={15} />,
  visit: <Building2 size={15} />, 
};

const Breadcrumbs = () => {
  const { darkMode } = useTheme();
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  // Hide breadcrumbs on Home page
  if (segments.length === 0) return null;

  return (
    <nav
      className={`px-4 py-2  transition-colors duration-300 ${
        darkMode ? "bg-black" : "bg-gray-200"
      }`}
    >
      <ul className={`flex items-center text-l font-semibold transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        {/* Home */}
        <li className="flex items-center gap-2 transform transition-all duration-200 hover:scale-105 hover:text-blue-400">
          <Home size={16} className={darkMode ? "text-gray-300" : "text-gray-700"} />
          <Link to="/" className={darkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}>
            Home
          </Link>
        </li>

        {segments.map((seg, index) => {
          const path = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;
          const label = nameMap[seg] ?? seg;

          return (
            <li key={path} className="flex items-center gap-2 ml-2 animate-fadeIn">
              <ChevronRight
                size={16}
                className={`transition-colors duration-300 ${darkMode ? "text-gray-500" : "text-gray-400"}`}
              />
              <span className="flex items-center gap-1 transition-all duration-300">
                {iconMap[seg]}
                {isLast ? (
                  <span className={`font-semibold capitalize transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-800"}`}>
                    {label}
                  </span>
                ) : (
                  <Link
                    to={path}
                    className={`capitalize transform transition-all duration-300 hover:scale-105 ${
                      darkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {label}
                  </Link>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
