import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "../components/layout/Footer";
// import chisaBackground from "../assets/images/chisa_background.jpg";
import liveWallpaper from "../assets/video/live-wallpaper.mp4";
import Journey from "../pages/Journey";
import AudioController from "../components/AudioController";
// import WelcomeToast from "../components/WelcomeToast";

const AppRoutes = () => {
  return (
    <Router>
      {/* Background wrapper dengan video */}
      <div className="w-screen min-h-screen relative">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={liveWallpaper} type="video/mp4" />
        </video>

        {/* Overlay gradient */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(30, 62, 98, 0.6))`
          }}
        ></div>

        {/* Main content wrapper */}
        <div className="relative z-10 flex flex-col min-h-screen bg-transparent text-gray-900">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1 w-full flex justify-center px-4">
            <div className="w-full max-w-[1500px]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/journey" element={<Journey />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </main>

          {/* Footer */}
          <Footer />

          {/* 🎧 Floating Audio Controller */}
          <AudioController />

          {/* <WelcomeToast /> */}
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;