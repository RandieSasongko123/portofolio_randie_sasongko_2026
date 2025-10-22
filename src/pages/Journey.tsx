import { useTranslation } from "react-i18next";
import { motion, easeInOut, type Variants } from "framer-motion";
import running from "../assets/icons/running.gif";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

interface JourneyData {
  experiences: Experience[];
  educations: Education[];
}

const Journey = () => {
  const { t } = useTranslation();

  const journeyData = t("journey", { returnObjects: true }) as JourneyData;
  const experiencesList = journeyData.experiences || [];
  const educationsList = journeyData.educations || [];

  // ✨ Framer Motion Variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: easeInOut,
      },
    }),
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: easeInOut } },
  };

  return (
    <motion.div
      className="journey px-4 sm:px-6 lg:px-8 py-8"
      initial="hidden"
      animate="visible"
    >
      {/* Experience Section */}
      <motion.div
        className="experience-section mb-16"
        variants={fadeIn}
      >
        <h1 className="text-white text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          {t("journey.subtitle-1")}
        </h1>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6500] to-cyan-400"></div>

          <div className="space-y-8 md:space-y-12">
            {experiencesList.map((exp: Experience, index: number) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                custom={index}
                variants={fadeUp}
              >
                <motion.div
                  className={`w-full md:w-96 lg:w-[500px] bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 p-6
                    transform transition-all duration-300 hover:scale-105 hover:border-[#FF6500]/30 hover:shadow-lg hover:shadow-[#FF6500]/10
                    ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                  whileHover={{ scale: 1.03, borderColor: "#FF6500", transition: { duration: 0.3 } }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <h2 className="text-white font-bold text-xl sm:text-2xl">
                      {exp.title}
                    </h2>
                    <span className="text-[#FF6500] text-sm font-medium px-3 py-1 bg-[#FF6500]/10 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base mb-3 leading-relaxed text-justify">
                    {exp.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-cyan-400 text-sm font-medium">{exp.company}</p>
                    <img
                      src={running}
                      alt={t("about.altGif")}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                </motion.div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-6 h-6 bg-[#FF6500] rounded-full border-4 border-gray-900 z-10 flex-shrink-0"></div>

                {/* Mobile timeline */}
                <div className="md:hidden flex items-center w-full justify-between mt-4">
                  <div className="w-3 h-3 bg-[#FF6500] rounded-full"></div>
                  <div className="h-0.5 bg-white/30 flex-1 mx-4"></div>
                  <div className="w-3 h-3 bg-[#FF6500] rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        className="education-section"
        variants={fadeIn}
      >
        <h1 className="text-white text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          {t("journey.subtitle-2")}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {educationsList.map((edu: Education, index: number) => (
            <motion.div
              key={index}
              className="bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 p-6 transform transition-all duration-300 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/10"
              custom={index}
              variants={fadeUp}
              whileHover={{
                scale: 1.03,
                borderColor: "#00FFFF",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <h2 className="text-white font-bold text-xl">{edu.degree}</h2>
                <span className="text-cyan-400 text-sm font-medium px-3 py-1 bg-cyan-400/10 rounded-full whitespace-nowrap">
                  {edu.period}
                </span>
              </div>

              <p className="text-gray-300 text-sm mb-3 font-medium">{edu.school}</p>
              <p className="text-gray-300 text-sm leading-relaxed text-justify">{edu.description}</p>

              <div className="flex justify-end mt-4">
                <motion.div
                  className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: easeInOut }}
                >
                  <span className="text-white text-xs font-bold">✓</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Journey;
