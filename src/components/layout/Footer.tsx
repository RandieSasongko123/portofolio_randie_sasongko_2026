import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); // simpan preferensi user
  };

  return (
    <footer
      className="
        bg-gray-900 text-gray-300
        transition-colors duration-500
        py-6
      "
    >
      {/* Container agar rapi dan center */}
      <div className="max-w-[1500px] mx-auto w-full px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">Randie Sasongko</span>. All rights reserved.
        </p>

        {/* Language Switcher */}
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={() => changeLanguage("en")}
            className={`transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
              i18n.language === "en"
                ? "font-semibold text-blue-600 dark:text-blue-400"
                : ""
            }`}
          >
            🇬🇧 English
          </button>

          <button
            onClick={() => changeLanguage("id")}
            className={`transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
              i18n.language === "id"
                ? "font-semibold text-blue-600 dark:text-blue-400"
                : ""
            }`}
          >
            🇮🇩 Indonesia
          </button>

          {/* Jika mau aktifkan Chinese */}
          {/* <button
            onClick={() => changeLanguage("zh")}
            className={`transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
              i18n.language === "zh"
                ? "font-semibold text-blue-600 dark:text-blue-400"
                : ""
            }`}
          >
            🇨🇳 中文
          </button> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
