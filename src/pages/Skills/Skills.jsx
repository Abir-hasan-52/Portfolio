import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaPalette,
  FaTools,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiDaisyui,
//   SiVisualstudiocode,
 
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiPostman,
} from "react-icons/si";
 
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FaPalette,
      color: "from-blue-500 to-purple-500",
      skills: [
        {
          name: "HTML5",
          icon: FaHtml5,
          color: "text-orange-500",
          levelText: "Good",
        },
        {
          name: "CSS3",
          icon: FaCss3Alt,
          color: "text-blue-400",
          levelText: "Good",
        },
        {
          name: "JavaScript",
          icon: FaJs,
          color: "text-yellow-500",
          levelText: "Intermediate",
        },
        {
          name: "React",
          icon: FaReact,
          color: "text-blue-500",
          levelText: "Intermediate",
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "text-cyan-500",
          levelText: "Good",
        },
        {
          name: "DaisyUI",
          icon: SiDaisyui,
          color: "text-green-400",
          levelText: "Good",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: FaServer,
      color: "from-green-500 to-emerald-500",
      skills: [
        {
          name: "Node.js",
          icon: FaNodeJs,
          color: "text-green-600",
          levelText: "Learning",
        },
        {
          name: "Express.js",
          icon: SiExpress,
          color: "text-gray-600",
          levelText: "Learning",
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
          color: "text-green-500",
          levelText: "Basic",
        },
        {
          name: "Firebase",
          icon: SiFirebase,
          color: "text-yellow-500",
          levelText: "Learning",
        },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: FaTools,
      color: "from-orange-500 to-red-500",
      skills: [
        {
          name: "VS Code",
          icon: VscVscode,
          color: "text-blue-600",
          levelText: "Good",
        },
        {
          name: "Git",
          icon: FaGitAlt,
          color: "text-orange-600",
          levelText: "Learning",
        },
        {
          name: "Figma",
          icon: SiFigma,
          color: "text-purple-500",
          levelText: "Basic",
        },
        {
          name: "Postman",
          icon: SiPostman,
          color: "text-orange-500",
          levelText: "Learning",
        },
        {
          name: "Vercel",
          icon: SiVercel,
          color: "text-black",
          levelText: "Good",
        },
        {
          name: "Netlify",
          icon: SiNetlify,
          color: "text-teal-500",
          levelText: "Good",
        },
      ],
    },
    {
      title: "Currently Learning",
      icon: FaLaptopCode,
      color: "from-purple-500 to-pink-500",
      skills: [
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "text-gray-800",
          levelText: "Learning",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#f5f5f7] border-b border-gray-200 relative overflow-hidden"
      id="skills"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies I work with and the skills I'm
            continuously developing
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="space-y-8 sm:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border border-white/20"
              variants={itemVariants}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                <div
                  className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white`}
                >
                  <category.icon className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {category.skills.length} skill
                    {category.skills.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.5,
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    {/* Skill Item */}
                    <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl group-hover:bg-white group-hover:shadow-xl transition-all duration-300 text-center">
                      {/* Skill Icon */}
                      <div className="mb-3 sm:mb-4">
                        <skill.icon
                          className={`text-4xl sm:text-5xl ${skill.color} mx-auto group-hover:scale-110 transition-transform duration-300`}
                        />
                      </div>

                      {/* Skill Name */}
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">
                        {skill.name}
                      </h4>

                      {/* Skill Level Badge */}
                      <span className="inline-block text-xs sm:text-sm text-gray-500 bg-gray-200 group-hover:bg-blue-100 group-hover:text-blue-600 px-3 py-1 rounded-full transition-all duration-300">
                        {skill.levelText}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg border border-white/20 max-w-4xl mx-auto">
            <FaCode className="text-3xl sm:text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Always Learning
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              As a passionate developer, I'm constantly expanding my skill set
              and staying updated with the latest technologies. My goal is to
              become a well-rounded full-stack developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://github.com/Abir-hasan-52"
                className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCode className="text-sm" />
                <span>View My Projects</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 rounded-2xl font-medium hover:shadow-lg border border-gray-200 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Connect</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
