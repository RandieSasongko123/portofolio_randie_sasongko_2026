import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profilePhoto from "../assets/images/photo_profile.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="h-180 flex justify-between items-center gap-8"
      initial={{ opacity: 0, y: 40 }}   // posisi awal (fade & turun sedikit)
      animate={{ opacity: 1, y: 0 }}    // posisi akhir (fade in & naik ke posisi)
      exit={{ opacity: 0, y: -40 }}     // animasi saat meninggalkan halaman
      transition={{ duration: 0.8, ease: "easeOut" }} // durasi & easing
    >
      {/* Kiri: Text Section */}
      <motion.div
        className="max-w-[900px]"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <h1 className="font-bold text-4xl text-white">{t("home.greeting")}</h1>
        <h3 className="text-[#FF6500] font-bold text-3xl">{t("home.position")}</h3>
        <br />
        <p className="text-lg text-justify text-white">
        {t("home.description")}
        </p>
        <br />
        <Link
          to="/contact"
          className="
            px-8 py-2
            border-2
            rounded-md
            bg-[#FF6500]
            text-[#081C29]
            border-[#FF6500]
            font-medium
            transition-all duration-300
            hover:bg-transparent
            hover:text-[#FF6500]
            hover:border-[#FF6500]
            cursor-pointer
            text-lg
          "
        >
          {t("home.letsTalk")}
        </Link>
      </motion.div>

      {/* Kanan: Gambar dengan animasi muncul dari kanan */}
      <motion.div
        className="w-100 border-b-[3px] border-[#FF6500] px-6"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <img src={profilePhoto} alt="photo_profile" />
      </motion.div>
    </motion.div>
  );
};

export default Home;
