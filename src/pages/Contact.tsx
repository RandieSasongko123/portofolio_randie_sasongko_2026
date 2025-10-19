import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import whatsapp from "../assets/images/whatsapp.png";
import github from "../assets/images/github.png";
import gmail from "../assets/images/gmail.png";
import linkedin from "../assets/images/linkedin.png";
import vercel from "../assets/images/vercel.png";

const Contact = () => {
  const { t } = useTranslation();

  const socialMedia = [
    {
      img: instagram,
      name: t("contact.social_media.instagram.name"),
      description: t("contact.social_media.instagram.description"),
      url: t("contact.social_media.instagram.link"),
    },
    {
      img: facebook,
      name: t("contact.social_media.facebook.name"),
      description: t("contact.social_media.facebook.description"),
      url: t("contact.social_media.facebook.link"),
    },
    {
      img: whatsapp,
      name: t("contact.social_media.whatsapp.name"),
      description: t("contact.social_media.whatsapp.description"),
      url: t("contact.social_media.whatsapp.link"),
    },
    {
      img: github,
      name: t("contact.social_media.github.name"),
      description: t("contact.social_media.github.description"),
      url: t("contact.social_media.github.link"),
    },
    {
      img: vercel,
      name: t("contact.social_media.vercel.name"),
      description: t("contact.social_media.vercel.description"),
      url: t("contact.social_media.vercel.link"),
    },
    {
      img: gmail,
      name: t("contact.social_media.gmail.name"),
      description: t("contact.social_media.gmail.description"),
      url: t("contact.social_media.gmail.link"),
    },
    {
      img: linkedin,
      name: t("contact.social_media.linkedin.name"),
      description: t("contact.social_media.linkedin.description"),
      url: t("contact.social_media.linkedin.link"),
    },
  ];

  return (
    <motion.div 
      className="w-full h-200 flex items-center justify-center p-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Container utama */}
      <div className="w-full max-w-4xl flex flex-col items-center justify-center">
        {/* Kiri: Sosmed */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col items-center justify-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <motion.h1 
            className="text-white text-4xl font-bold mb-8 text-center"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t("contact.title.social_media")}
          </motion.h1>
          <div className="card-sosmed text-white w-full">
            {socialMedia.map((media, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between mb-4 p-3 bg-white/5 rounded-lg shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.4 + (index * 0.1), 
                  duration: 0.5 
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center min-w-0 flex-1">
                  <img
                    src={media.img}
                    alt={media.name}
                    className="w-8 h-8 mr-3 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base md:text-lg truncate">
                      {media.name}
                    </h3>
                    <p className="text-gray-300 text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                      {media.description}
                    </p>
                  </div>
                </div>

                <motion.a
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 px-4 py-2 bg-[#FF6500] hover:bg-[#FF8533]/30 rounded text-sm transition-colors flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;