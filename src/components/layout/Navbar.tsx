import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
// import { useTheme } from "../../hooks/useTheme";
// import { MoonIcon, SunIcon } from "flowbite-react";

const Navbar = () => {
  // const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.journey"), path: "/journey" },
    { name: t("nav.skills"), path: "/skills" },
    { name: t("nav.project"), path: "/projects" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-md transition-colors duration-300">
      {/* Container untuk max-width */}
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-6 py-4 w-full">
        <Link
          to="/"
          className="text-xl font-bold text-gray-100"
        >
          Randie Sasongko
        </Link>

        <div className="flex items-center gap-6">
          {/* Nav items */}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
