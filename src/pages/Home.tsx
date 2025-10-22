import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profilePhoto from "../assets/images/photo_profile.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 px-4 md:px-8 py-8 md:py-16 h-auto md:h-[90vh]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Kiri: Text Section */}
      <motion.div
        className="w-full md:w-1/2 max-w-[900px]"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <h1 className="font-bold text-3xl md:text-4xl text-white">
          {t("home.greeting")}
        </h1>
        <h3 className="font-bold text-2xl md:text-3xl mt-2 text-fill">
          {t("about.position")}
        </h3>
        <p className="text-base md:text-lg text-justify text-white mt-4 md:mt-6">
          {t("home.description")}
        </p>

        <Link
          to="/contact"
          className="
            inline-block
            mt-6 md:mt-8
            px-6 md:px-8 py-2 md:py-3
            border-2
            rounded-md
            bg-[#FF6500]
            text-white
            border-[#FF6500]
            font-medium
            transition-all duration-300
            hover:bg-transparent
            hover:text-[#FF6500]
            hover:border-[#FF6500]
            cursor-pointer
            text-base md:text-lg
          "
        >
          {t("home.letsTalk")}
        </Link>
      </motion.div>

      {/* Kanan: Gambar */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <div className="w-48 md:w-64 lg:w-80 border-b-4 border-[#FF6500] rounded-lg overflow-hidden">
          <img
            src={profilePhoto}
            alt="photo_profile"
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
