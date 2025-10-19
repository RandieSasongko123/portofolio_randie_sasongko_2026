import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icon

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.journey"), path: "/journey" },
    // { name: t("nav.skills"), path: "/skills" },
    { name: t("nav.project"), path: "/projects" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 shadow-md transition-colors duration-300">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-6 py-4 w-full">
        <Link to="/" className="text-xl font-bold text-gray-100">
          Randie Sasongko
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "text-[#FF6500] font-semibold"
                      : "text-gray-300 hover:text-[#FF6500]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-100 focus:outline-none"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)} // Close menu after click
                className={({ isActive }) =>
                  `transition-colors duration-200 block ${
                    isActive
                      ? "text-[#FF6500] font-semibold"
                      : "text-gray-300 hover:text-[#FF6500]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;