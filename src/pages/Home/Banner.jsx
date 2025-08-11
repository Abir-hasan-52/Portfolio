import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

const Banner = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      href: "https://linkedin.com/in/ah-abir",
      icon: FaLinkedinIn,
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      href: "https://github.com/Abir-hasan-52",
      icon: FaGithub,
      label: "GitHub",
      color: "hover:bg-gray-800",
    },
    {
      href: "https://facebook.com/yourhandle",
      icon: FaFacebookF,
      label: "Facebook",
      color: "hover:bg-blue-700",
    },
    {
      href: "mailto:abirhasan5208@gmail.com",
      icon: FaEnvelope,
      label: "Email",
      color: "hover:bg-red-500",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen bg-[#f5f5f7]   relative overflow-hidden pt-16 md:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-blue-200/30 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-32 sm:top-40 right-4 sm:right-20 w-8 h-8 sm:w-16 sm:h-16 bg-purple-200/30 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 sm:bottom-40 left-4 sm:left-20 w-6 h-6 sm:w-12 sm:h-12 bg-pink-200/30 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="min-h-screen flex items-center py-8 sm:py-12">
          <motion.div
            className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-sm border border-white/20"
                variants={itemVariants}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600 text-xs sm:text-sm font-medium">
                  Available for work
                </span>
              </motion.div>

              {/* Greeting */}
              <motion.div
                className="space-y-2 sm:space-y-4"
                variants={itemVariants}
              >
                <h1 className="text-lg sm:text-2xl md:text-3xl text-gray-700 font-light">
                  Hello, I'm
                </h1>

                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
                  ABIR HASAN
                </h2>
              </motion.div>

              {/* Animated Role */}
              <motion.div
                className="h-6 sm:h-8 overflow-hidden"
                variants={itemVariants}
              >
                <motion.p
                  key={currentRole}
                  className="text-base sm:text-xl md:text-2xl text-gray-600 font-medium"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  I am a {roles[currentRole]}
                </motion.p>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-sm sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
                variants={itemVariants}
              >
                I build modern web applications using React, Node.js, Express,
                and MongoDB. Passionate about creating seamless user
                experiences.
              </motion.p>

              {/* Social Links */}
              <motion.div
                className="flex justify-center lg:justify-start items-center gap-3 sm:gap-4"
                variants={itemVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/80 ${social.color} hover:text-white rounded-xl transition-all duration-300 shadow-md`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="text-sm sm:text-lg" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 items-center"
                variants={itemVariants}
              >
                <motion.a
                    href="/resume.pdf"
                    download
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium text-sm sm:text-base"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="text-sm sm:text-lg" />
                  <span>Download Resume</span>
                </motion.a>

                <motion.a
                    href="https://github.com/Abir-hasan-52"
                 
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-2xl border border-gray-200 font-medium text-sm sm:text-base"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Projects</span>
                  <motion.div whileHover={{ x: 5 }}>
                    <FaArrowRight className="text-xs sm:text-sm" />
                  </motion.div>
                </motion.a>
              </motion.div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center order-1 lg:order-2">
              <motion.div className="relative" variants={imageVariants}>
                {/* Rotating rings */}
                <motion.div
                  className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-2 w-60 h-60 sm:w-76 sm:h-76 md:w-92 md:h-92 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-15"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Profile image */}
                <motion.div
                  className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-white shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://i.ibb.co.com/C5Dy0WJD/1674161393535.jpg"
                    alt="ABTR HASAN - MERN Stack Developer"
                    className="w-full h-full object-cover rounded-full"
                  />

                  {/* Tech badges */}
                  <motion.div
                    className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-blue-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    React
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-green-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    Node.js
                  </motion.div>
                  <motion.div
                    className="absolute top-1/4 -left-3 sm:-left-6 bg-purple-600 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs font-semibold shadow-lg"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  >
                    MongoDB
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Banner;
