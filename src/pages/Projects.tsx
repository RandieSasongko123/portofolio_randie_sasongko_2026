import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      className="
        min-h-screen flex flex-col items-center justify-center
        bg-white text-gray-900
        dark:bg-gray-900 dark:text-gray-100
        transition-colors duration-500
      "
    >
      <h1 className="text-4xl font-bold mb-4 text-center">
        {t("projects.title")}
      </h1>
    </section>
  );
};

export default Projects;