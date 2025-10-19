import { useTranslation } from "react-i18next";
import html from "../assets/images/html.png";
import css from "../assets/images/css-3.png";
import javascript from "../assets/images/js.png";
import java from "../assets/images/js.png";
import tailwind from "../assets/images/tailwind-css-icon.png";
import bootstrap from "../assets/images/bootstrap.png";
import flutter from "../assets/images/flutter.png";
import reactjs from "../assets/images/react.png";
import laravel from "../assets/images/laravel.png";
import dart from "../assets/images/dart.png";
// import vue from "../assets/images/vue.png";
// import randieSasongko from "../assets/images/photo_profile.png";
// import vetencode from "../assets/images/vetencode.jpg";
// import compere from "../assets/images/compere.jpg";
// import dicker from "../assets/images/dicker.jpg";
// import penerimaanMahasiswa from "../assets/images/penerimaan_mahasiswa.jpg";
import hourGlass from "../assets/icons/hourglass.gif";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const { t } = useTranslation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState(1); // 1 = ke kanan, -1 = ke kiri

  // Draggable
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const mouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    isDown = true;
    sliderRef.current.classList.add("cursor-grabbing");
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const mouseLeave = () => {
    if (!sliderRef.current) return;
    isDown = false;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const mouseUp = () => {
    if (!sliderRef.current) return;
    isDown = false;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Auto-scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      if (!slider) return;

      // Jika mentok kanan atau kiri, balik arah
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        setDirection(-1);
      } else if (slider.scrollLeft <= 0) {
        setDirection(1);
      }

      slider.scrollLeft += direction; // scroll 1px tiap interval
    }, 20); // semakin kecil semakin cepat

    return () => clearInterval(interval);
  }, [direction]);

  const skills = [
    {
      img: html,
      name: t("projects.skills.html.name"),
      description: t("projects.skills.html.description"),
      url: t("projects.skills.html.link"),
    },
    {
      img: css,
      name: t("projects.skills.css.name"),
      description: t("projects.skills.css.description"),
      url: t("projects.skills.css.link"),
    },
    {
      img: javascript,
      name: t("projects.skills.javascript.name"),
      description: t("projects.skills.javascript.description"),
      url: t("projects.skills.javascript.link"),
    },
    {
      img: dart,
      name: t("projects.skills.dart.name"),
      description: t("projects.skills.dart.description"),
      url: t("projects.skills.dart.link"),
    },
    {
      img: bootstrap,
      name: t("projects.skills.bootstrap.name"),
      description: t("projects.skills.bootstrap.description"),
      url: t("projects.skills.bootstrap.link"),
    },
    {
      img: tailwind,
      name: t("projects.skills.tailwind.name"),
      description: t("projects.skills.tailwind.description"),
      url: t("projects.skills.tailwind.link"),
    },
    {
      img: flutter,
      name: t("projects.skills.flutter.name"),
      description: t("projects.skills.flutter.description"),
      url: t("projects.skills.flutter.link"),
    },
    {
      img: laravel,
      name: t("projects.skills.laravel.name"),
      description: t("projects.skills.laravel.description"),
      url: t("projects.skills.laravel.link"),
    },
    {
      img: reactjs,
      name: t("projects.skills.reactjs.name"),
      description: t("projects.skills.reactjs.description"),
      url: t("projects.skills.reactjs.link"),
    },
    {
      img: java,
      name: t("projects.skills.java.name"),
      description: t("projects.skills.java.description"),
      url: t("projects.skills.java.link"),
    },
  ];

  return (
    <motion.div
      className="px-4 md:px-8 lg:px-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Skills Section */}
      <motion.div
        className="skill-section mb-12"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <br /><br />
        <motion.h1
          className="text-4xl text-white font-bold mb-6 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("projects.title.skills")}
        </motion.h1>

        <motion.div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden py-4 cursor-grab scrollbar-hide overflow-y-hidden"
          onMouseDown={mouseDown}
          onMouseLeave={mouseLeave}
          onMouseUp={mouseUp}
          onMouseMove={mouseMove}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="w-100 card-skill px-6 py-4 bg-white/10 rounded-2xl flex flex-col items-center text-justify flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + (index * 0.1),
                duration: 0.5
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.img
                src={skill.img}
                alt={skill.name}
                className="w-12 h-12 mb-3 flex-shrink-0"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              />
              <p className="text-white font-bold text-lg py-2">{skill.name}</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {skill.description}
              </p>
              <motion.a
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mt-4 px-4 py-2 bg-[#FF6500] hover:bg-[#FF8533]/30 rounded text-sm transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("projects.skills.button")}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <section
        className="flex flex-col items-center justify-center text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500"
      >
        <h1 className="text-4xl font-bold mb-4 text-center text-white">Project</h1>

        {/* Pemberitahuan Progress */}
        <div className="flex flex-col items-center justify-center">
          <img src={hourGlass} alt={t("about.altGif")} className="w-8 h-8 md:w-10 md:h-10" />
          <p className="text-lg font-semibold text-white">On Progress...</p>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
