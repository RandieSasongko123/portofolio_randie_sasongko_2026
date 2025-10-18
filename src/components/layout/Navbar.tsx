import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const links = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.skills"), path: "/skills" },
    { name: t("nav.portfolio"), path: "/portfolio" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyPortfolio</h1>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`${
                  pathname === link.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600 hover:text-blue-500"
                } transition-colors`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
