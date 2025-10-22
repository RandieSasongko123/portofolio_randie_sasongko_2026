import { useTranslation } from "react-i18next";
// import running from "../assets/icons/running.gif";
import hourGlass from "../assets/icons/hourglass.gif";

const Journey = () => {
  const { t } = useTranslation();

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      <h1 className="text-4xl font-bold mb-4 text-center text-white">Journey</h1>

      {/* Pemberitahuan Progress */}
      <div className="flex flex-col items-center justify-center">
        <img src={hourGlass} alt={t("about.altGif")} className="w-8 h-8 md:w-10 md:h-10" />
        <p className="text-lg font-semibold text-white">On Progress...</p>
      </div>
    </section>
    // <div className="journey">
    //   <br />
    //   <div className="experience-section">
    //     <h1 className="text-white text-3xl font-bold text-center">Experience</h1>
    //     <div className="flex items-center justify-center w-full overflow-x-auto py-8">
    //       {/* CARD 1 */}
    //       <div className="flex flex-col items-center relative">
    //         <div className="experience-card w-64 h-48 bg-white/5 rounded-2xl flex flex-col items-center text-center flex-shrink-0 backdrop-blur-sm border border-white/10 p-4">
    //           <h1 className="font-bold text-white">Asisten Dosen</h1>
    //           <p className="text-gray-300 text-sm mt-2 text-justify">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
    //             dolore.
    //           </p>
    //           <img
    //             src={running}
    //             alt={t("about.altGif")}
    //             className="w-8 h-8 md:w-10 md:h-10 mt-4"
    //           />
    //         </div>
    //         {/* Titik + garis */}
    //         <div className="flex items-center mt-4 w-full">
    //           <span className="bg-white w-3 h-3 rounded-full z-10"></span>
    //           <div className="h-0.5 bg-white/30 flex-1"></div>
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-center relative">
    //         <div className="experience-card w-64 h-48 bg-white/5 rounded-2xl flex flex-col items-center text-center flex-shrink-0 backdrop-blur-sm border border-white/10 p-4">
    //           <h1 className="font-bold text-white">Asisten Dosen</h1>
    //           <p className="text-gray-300 text-sm mt-2 text-justify">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
    //             dolore.
    //           </p>
    //           <img
    //             src={running}
    //             alt={t("about.altGif")}
    //             className="w-8 h-8 md:w-10 md:h-10 mt-4"
    //           />
    //         </div>
    //         {/* Titik + garis */}
    //         <div className="flex items-center mt-4 w-full">
    //           <span className="bg-white w-3 h-3 rounded-full z-10"></span>
    //           <div className="h-0.5 bg-white/30 flex-1"></div>
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-center relative">
    //         <div className="experience-card w-64 h-48 bg-white/5 rounded-2xl flex flex-col items-center text-center flex-shrink-0 backdrop-blur-sm border border-white/10 p-4">
    //           <h1 className="font-bold text-white">Asisten Dosen</h1>
    //           <p className="text-gray-300 text-sm mt-2 text-justify">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
    //             dolore.
    //           </p>
    //           <img
    //             src={running}
    //             alt={t("about.altGif")}
    //             className="w-8 h-8 md:w-10 md:h-10 mt-4"
    //           />
    //         </div>
    //         {/* Titik + garis */}
    //         <div className="flex items-center mt-4 w-full">
    //           <span className="bg-white w-3 h-3 rounded-full z-10"></span>
    //           <div className="h-0.5 bg-white/30 flex-1"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <br />
    //   <div className="experience-section">
    //     <h1 className="text-white text-3xl font-bold text-center">Education</h1>
    //   </div>
    // </div>

  );
};

export default Journey;
