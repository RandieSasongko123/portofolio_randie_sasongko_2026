import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h1 className="text-4xl font-bold mb-4 text-center">
        {t("contact.title")}
      </h1>
    </section>
  );
};

export default Contact;