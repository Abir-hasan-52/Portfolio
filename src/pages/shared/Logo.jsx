import React from "react";
import blackLogo from "../../assets/black.png";
import whiteLogo from "../../assets/white.png";

const Logo = () => {
  // jodi background dark (theme black) hoy, tahole white logo
  // ekhane ami assume korchi data-theme="dark" set kora ache body ba root e
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";

  return (
    <div>
      <img
        src={isDark ? whiteLogo :blackLogo  }
        alt="Logo"
        className="w-10 h-10 object-contain"
      />
    </div>
  );
};

export default Logo;
