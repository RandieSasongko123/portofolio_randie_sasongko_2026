import { useTranslation } from "react-i18next";
import { motion, easeInOut, type Variants } from "framer-motion";
import profilePhoto from "../assets/images/photo_profile.png";
import vetencode from "../assets/images/vetencode.jpg";
import compere from "../assets/images/compere.jpg";
import dicker from "../assets/images/dicker.jpg";
import penerimaanMahasiswa from "../assets/images/penerimaan_mahasiswa.jpg";
import { FaLock, FaGlobe, FaReact, FaMobileAlt, FaHtml5, FaCss3, FaJs, FaArrowRight } from "react-icons/fa";
import aboutGif from "../assets/icons/information.gif";

const About = () => {
  const { t } = useTranslation();

  const imageContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const imageItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  const projects = [
    {
      img: vetencode,
      name: t("about.projects.vetencode.name"),
      description: t("about.projects.vetencode.description"),
      status: "private",
      tech: ["Flutter", "Dart"],
      url: "https://example.com/vetencode",
    },
    {
      img: compere,
      name: t("about.projects.compere.name"),
      description: t("about.projects.compere.description"),
      status: "public",
      tech: ["React", "Tailwind CSS"],
      url: "https://github.com/RandieSasongko/tugas-akhir-informatika-umdp",
    },
    {
      img: dicker,
      name: t("about.projects.dicker.name"),
      description: t("about.projects.dicker.description"),
      status: "public",
      tech: ["HTML", "CSS", "JS"],
      url: "https://github.com/RandieSasongko123/DickerHospital.github.io.git",
    },
    {
      img: penerimaanMahasiswa,
      name: t("about.projects.mahasiswa.name"),
      description: t("about.projects.mahasiswa.description"),
      status: "public",
      tech: ["React", "Bootstrap"],
      url: "https://github.com/RandieSasongko123/penerimaan-mahasiswa.git",
    },
  ];

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "react":
        return <FaReact className="text-blue-400" />;
      case "flutter":
      case "dart":
        return <FaMobileAlt className="text-purple-400" />;
      case "html":
      case "html5":
        return <FaHtml5 className="text-orange-500" />;
      case "css":
        return <FaCss3 className="text-blue-600" />;
      case "js":
      case "javascript":
        return <FaJs className="text-yellow-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative px-4 md:px-8 py-8 md:py-16 max-w-[1500px] mx-auto">
      {/* Section atas */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Teks */}
        <motion.div
          className="w-full md:w-1/2 max-w-[900px]"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="font-bold text-3xl md:text-4xl flex items-center gap-3 text-white">
            {t("about.title")} <span className="text-[#FF6500]">{t("about.me")}</span>
            <img src={aboutGif} alt={t("about.altGif")} className="w-8 h-8 md:w-10 md:h-10" />
          </h1>
          <h3 className="font-bold text-2xl md:text-3xl mt-2 text-fill-image">
            {t("about.position")}
          </h3>
          <p className="text-base md:text-lg text-justify mt-4 text-white">
            {t("about.description1")}
          </p>
          <p className="text-base md:text-lg text-justify mt-4 text-white">
            {t("about.description2")}
          </p>
        </motion.div>

        {/* Gambar profile */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="w-48 md:w-64 lg:w-80 border-b-4 border-[#FF6500] rounded-lg overflow-hidden box-profile">
            <img
              src={profilePhoto}
              alt="photo_profile"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Section projects */}
      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
        variants={imageContainer}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => {
          const isPrivate = project.status === "private";
          const content = (
            <motion.div
              className={`box relative group w-72 h-44 border-[4px] border-[#1097C8] overflow-hidden shadow-md ${
                isPrivate ? "cursor-not-allowed opacity-70 box" : "cursor-pointer box"
              }`}
              variants={imageItem}
              whileHover={!isPrivate ? { scale: 1.05, boxShadow: "0px 0px 12px #1097C8" } : {}}
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center px-2">
                <p className="text-white text-lg md:text-xl font-semibold mb-2">
                  {project.name}
                </p>

                {/* Status */}
                <div className="flex items-center gap-2 text-sm mb-1">
                  {isPrivate ? (
                    <>
                      <FaLock className="text-red-400" />
                      <span className="text-gray-300 font-medium">Private</span>
                    </>
                  ) : (
                    <>
                      <FaGlobe className="text-green-400" />
                      <span className="text-gray-300 font-medium">Public</span>
                    </>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-2 text-sm mb-1">
                  {project.tech.map((t) => (
                    <span key={t} className="flex items-center gap-1 text-gray-200">
                      {getTechIcon(t)} {t}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                {!isPrivate && (
                  <FaArrowRight className="text-white mt-2 animate-bounce" />
                )}
              </div>
            </motion.div>
          );

          return isPrivate ? (
            <div key={index}>{content}</div>
          ) : (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          );
        })}
      </motion.div>
    </div>
  );
};

export default About;
