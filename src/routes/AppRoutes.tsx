import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "../components/layout/Footer";
import chisaBackground from "../assets/images/chisa_background.jpg";
import Journey from "../pages/Journey";

const AppRoutes = () => {
  return (
    <Router>
      {/* Background wrapper */}
      <div
        className="w-screen min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(8, 28, 41,1), rgba(8, 28, 41,0.95)), url(${chisaBackground})`,
        }}
      >
        {/* Main content wrapper */}
        <div className="flex flex-col min-h-screen bg-transparent text-gray-900">
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
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
