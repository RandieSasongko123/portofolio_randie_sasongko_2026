import { useTranslation } from "react-i18next";
import hourGlass from "../assets/icons/hourglass.gif";

const Journey = () => {
  const { t } = useTranslation();

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      <h1 className="text-4xl font-bold mb-4 text-center text-white">Journey</h1>

      {/* Pemberitahuan Progress */}
      <div className="flex flex-col items-center justify-center">
        <img src={hourGlass} alt={t("about.altGif")} className="w-8 h-8 md:w-10 md:h-10" />
        <p className="text-lg font-semibold text-white">On Progress...</p>
      </div>
    </section>
  );
};

export default Journey;
