import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import darkLogo from "../../assets/black.png"

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Go to home page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll
  };

  return (
    <motion.div
      className="flex items-center space-x-3 cursor-pointer select-none"
      onClick={handleClick}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Logo Image */}
      <motion.img
        src={darkLogo}
        alt="Logo"
        className="w-12 h-12 object-contain"
        whileHover={{ rotate: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      />

      {/* Professional Name */}
      <h2 className="text-2xl font-bold tracking-wide text-gray-900">
        ABIR
      </h2>
    </motion.div>
  );
};

export default Logo;
