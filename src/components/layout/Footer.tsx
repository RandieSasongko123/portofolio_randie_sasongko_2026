import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); // simpan preferensi user
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Randie Sasongko. All rights reserved.</p>

      {/* Language switcher */}
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={() => changeLanguage("en")}
          className={`hover:text-white ${
            i18n.language === "en" ? "font-semibold text-white" : ""
          }`}
        >
          🇬🇧 English
        </button>
        <button
          onClick={() => changeLanguage("id")}
          className={`hover:text-white ${
            i18n.language === "id" ? "font-semibold text-white" : ""
          }`}
        >
          🇮🇩 Indonesia
        </button>
        {/* <button
          onClick={() => changeLanguage("zh")}
          className={`hover:text-white ${
            i18n.language === "zh" ? "font-semibold text-white" : ""
          }`}
        >
          🇨🇳 中文
        </button> */}
      </div>
    </footer>
  );
};

export default Footer;
