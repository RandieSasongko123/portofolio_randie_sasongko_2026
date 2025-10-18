import { Link, NavLink } from "react-router-dom";
// import { useTheme } from "../../hooks/useTheme";
// import { MoonIcon, SunIcon } from "flowbite-react";

const Navbar = () => {
  // const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Journey", path: "/journey" },
    { name: "Skills", path: "/skills" },
    { name: "Project", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow-md transition-colors duration-300">
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
                        ? "text-blue-400 font-semibold"
                        : "text-gray-300 hover:text-blue-400"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Dark/Light Mode toggle */}
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <SunIcon className="text-yellow-400" />
            ) : (
              <MoonIcon className="text-gray-700" />
            )}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
