import { useEffect, useState } from "react";
import { X } from "lucide-react";

const WelcomeToast = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasShown = localStorage.getItem("welcome_shown");
    if (!hasShown) {
      setVisible(true);
      localStorage.setItem("welcome_shown", "true");
    }

    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="
        fixed top-15 right-5 z-[9999] text-white
        px-4 py-3 rounded-xl shadow-lg
        backdrop-blur-md flex items-center gap-3
        animate-slide-in
      "
    >
      <span className="text-sm sm:text-base font-medium">
        👋 Selamat datang di portofolio saya!
      </span>
      <button
        onClick={() => setVisible(false)}
        className="hover:text-white/80 transition"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default WelcomeToast;
