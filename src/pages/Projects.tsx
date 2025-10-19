import { useTranslation } from "react-i18next";
import html from "../assets/images/html.png";
import css from "../assets/images/css-3.png";
import javascript from "../assets/images/js.png";
import java from "../assets/images/java.png";
import tailwind from "../assets/images/tailwind-css-icon.png";
import bootstrap from "../assets/images/bootstrap.png";
import flutter from "../assets/images/flutter.png";
import reactjs from "../assets/images/react.png";
import laravel from "../assets/images/laravel.png";
import dart from "../assets/images/dart.png";
import vue from "../assets/images/vue.png";
import vetencode from "../assets/images/vetencode.jpg";
import compere from "../assets/images/compere.jpg";
import randieSasongko from "../assets/images/photo_profile.png";
import dicker from "../assets/images/dicker.jpg";
import ninjabocil from "../assets/images/ninja_bocil.jpg";
import portofolio1 from "../assets/images/portofolio.jpg";
import mobileninjabocil from "../assets/images/aplikasi_ninja_bocil.png";
import crudinjabocil from "../assets/images/crud.jpg";
import androidstudio from "../assets/images/android-studio.png";
import php from "../assets/images/php.png";
import vite from "../assets/images/vite.png";
import python from "../assets/images/python.png";
import mysql from "../assets/images/mysql.png";
import go from "../assets/images/go.png";
import api from "../assets/images/api.png";
import penerimaanMahasiswa from "../assets/images/penerimaan_mahasiswa.jpg";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const techImages: Record<string, string> = {
  ninjabocil,
  portofolio1,
  mobileninjabocil,
  crudinjabocil,
  html,
  css,
  javascript,
  dart,
  flutter,
  vue,
  python,
  vite,
  mysql,
  go,
  reactjs,
  api,
  php,
  laravel,
  java,
  androidstudio
};

const projectImages: Record<string, string> = {
  penerimaanMahasiswa,
  vetencode,
  compere,
  dicker,
  crudinjabocil,
  mobileninjabocil,
  portofolio1,
  ninjabocil
};

const Projects = () => {
  const { t } = useTranslation();
  const projectsData = t("projects.projects", { returnObjects: true });
  const projectList = Object.values(projectsData).map((project: any) => ({
    ...project,
    tech: Object.values(project.tech || {}),
  }));

  const sliderRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState(1); // 1 = ke kanan, -1 = ke kiri
  const [selected, setSelected] = useState("mobile");

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
      <motion.div
        className="project-section"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <motion.h1
          className="text-4xl text-white font-bold mb-6 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {t("projects.title.projects")}
        </motion.h1>
        <div className="flex justify-between">
          <div className="option-project h-auto flex flex-col items-center justify-center w-20 mr-10 space-y-10 sticky top-44 self-start z-20 mt-20">
            {/* Tombol Mobile */}
            <button
              onClick={() => setSelected("mobile")}
              className={`
                rotate-270 relative overflow-hidden group px-6 py-3 rounded-xl font-semibold transition-all duration-300 ease-out
                whitespace-nowrap text-sm mb-8
                ${selected === "mobile"
                  ? "bg-[#FF6500]/10 text-[#FF6500] border border-[#FF6500]/30 shadow-lg shadow-[#FF6500]/20"
                  : "bg-gray-800/50 text-gray-300 border border-gray-600/30 hover:bg-gray-700/50 hover:text-white hover:border-gray-400/50"
                }
              `}
            >
              {/* Animated background effect */}
              <span className={`
                absolute inset-0 bg-gradient-to-r from-[#FF6500]/0 via-[#FF6500]/10 to-[#FF6500]/0 
                transition-all duration-500 ease-out
                ${selected === "mobile"
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
                }
              `}></span>

              {/* Glow effect */}
              <span className={`
                    absolute inset-0 rounded-xl bg-[#FF6500]/5 blur-md transition-opacity duration-300
                    ${selected === "mobile" ? "opacity-100" : "opacity-0"}
                  `}></span>

              {/* Button content */}
              <span className="relative flex items-center justify-center gap-2">
                {/* Icon */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>

                Mobile Application

                {/* Active indicator dot */}
                <span className={`
                  w-2 h-2 bg-[#FF6500] rounded-full transition-all duration-300
                  ${selected === "mobile" ? "opacity-100 scale-100" : "opacity-0 scale-50"}
                `}></span>
              </span>

              {/* Bottom border animation */}
              <span className={`
                absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FF6500] to-[#FF6500]/70
                transition-all duration-300 ease-out
                ${selected === "mobile"
                  ? "left-0 w-full"
                  : "group-hover:left-0 group-hover:w-full"
                }
              `}></span>
            </button>

            <br /><br /><br /><br /><br /><br /><br />

            {/* Tombol Website */}
            <button
              onClick={() => setSelected("website")}
              className={`
                rotate-270 relative overflow-hidden group px-6 py-3 rounded-xl font-semibold transition-all duration-300 ease-out
                whitespace-nowrap text-sm mb-8
                ${selected === "website"
                  ? "bg-[#FF6500]/10 text-[#FF6500] border border-[#FF6500]/30 shadow-lg shadow-[#FF6500]/20"
                  : "bg-gray-800/50 text-gray-300 border border-gray-600/30 hover:bg-gray-700/50 hover:text-white hover:border-gray-400/50"
                }
              `}
            >
              {/* Animated background effect */}
              <span className={`
                  absolute inset-0 bg-gradient-to-r from-[#FF6500]/0 via-[#FF6500]/10 to-[#FF6500]/0 
                  transition-all duration-500 ease-out
                  ${selected === "website"
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
                }
                `}></span>

              {/* Glow effect */}
              <span className={`
                absolute inset-0 rounded-xl bg-[#FF6500]/5 blur-md transition-opacity duration-300
                ${selected === "website" ? "opacity-100" : "opacity-0"}
              `}></span>

              {/* Button content */}
              <span className="relative flex items-center justify-center gap-2">
                {/* Icon */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <rect x="3" y="4" width="18" height="12" rx="1.5" ry="1.5" />
                    <path d="M8 20h8" />
                    <path d="M12 16v4" />
                  </svg>
                </svg>

                Web Application

                {/* Active indicator dot */}
                <span className={`
                  w-2 h-2 bg-[#FF6500] rounded-full transition-all duration-300
                  ${selected === "website" ? "opacity-100 scale-100" : "opacity-0 scale-50"}
                `}></span>
              </span>

              {/* Bottom border animation */}
              <span className={`
                  absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FF6500] to-cyan-400 
                  transition-all duration-300 ease-out
                  ${selected === "website"
                  ? "left-0 w-full"
                  : "group-hover:left-0 group-hover:w-full"
                }
              `}></span>
            </button>
          </div>

          {/* Section Project */}
          <div className="space-y-12">
          {projectList
            .filter((project: any) => project.typeapp === selected)
            .map((project: any, index: number) => (
          <div
            key={index}
            className="w-full card-project bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-white/10"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Image Section */}
              <div className="flex-1">
                <div className="relative group">
                  <img
                    src={
                      projectImages[project.photo] || projectImages.vetencode
                    }
                    alt={project.name}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#FF6500]/20"
                  />
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center pb-4">
                    <button className="bg-[#FF6500] hover:bg-[#FF6500]/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      {t("projects.view")}
                    </button>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="teach-part bg-white/5 rounded-2xl mt-4 p-4 backdrop-blur-sm border border-white/10">
                  <p className="text-xs text-gray-400 mb-2 font-medium">
                    {t("projects.techstack")}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    {project.tech.map((tech: any, i: number) => (
                      <img
                        key={i}
                        src={techImages[tech.photo]}
                        alt={tech.name}
                        title={tech.name}
                        className="w-6 h-6 hover:scale-110 transition-transform"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Info Section */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#FF6500] to-cyan-400 bg-clip-text text-transparent mb-3">
                    {project.name}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base text-justify">
                    {project.description}
                  </p>

                  {/* Contributor */}
                  {project.contributor && (
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={randieSasongko}
                        alt={
                          project.contributor.randie?.name || "Contributor"
                        }
                        className="w-8 h-8 rounded-full border border-white/10"
                      />
                      <p className="text-sm text-gray-400">
                        By{" "}
                        <span className="text-white font-medium">
                          {project.contributor.randie?.name}
                        </span>
                      </p>
                    </div>
                  )}

                  {/* Project Status */}
                  <p
                    className={`text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6 ${
                      project.status === "public"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status === "public" ? "Public" : "Private"}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#FF6500] hover:bg-[#FF6500]/90 text-white px-4 sm:px-5 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#FF6500]/25 text-sm sm:text-base"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    {t("projects.button.demo")}
                  </a>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 sm:px-5 py-2.5 rounded-lg font-medium transition-all duration-200 border border-white/20 text-sm sm:text-base"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    {t("projects.button.code")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


        </div>
        {/* Bisa isi projek di sini */}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
