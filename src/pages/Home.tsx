import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">{t("home.title")}</h1>
      <p className="text-lg text-gray-600">{t("home.subtitle")}</p>
    </section>
  );
};

export default Home;
