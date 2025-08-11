import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "RoktoSheba - Blood Donation Platform",
      description:
        "A full-stack platform that connects blood donors with recipients efficiently. It includes user authentication, donation request handling, and an admin dashboard for management. Integrated with Stripe for seamless payment support.",
      image:
        "https://i.ibb.co.com/chZ5hH5q/Screenshot-2025-08-11-135642.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"," Tailwind CSS", "Express"],
      liveUrl: "https://roktosheba-f14d4.web.app/",
      githubUrl: "https://github.com/Abir-hasan-52/RoktoSheba-client-side-",
      featured: true,
    },
    {
      id: 2,
      title: "TradeLinker - B2B Wholesale Platform",
      description:
        "An end-to-end wholesale marketplace connecting suppliers and buyers. It supports product listing, category filtering, secure user authentication, and real-time order management with a clean and responsive UI",
      image:
        "https://i.ibb.co.com/LzPRY9gF/Screenshot-2025-08-11-141618.png",
      technologies: ["React", "Express", "JWT", "MongoDB"],
      liveUrl: "https://trade-linker-60a0f.web.app/",
      githubUrl: "https://github.com/Abir-hasan-52/TradeLinker-client-side",
      featured: false,
    },
    {
      id: 3,
      title: "Recipe Book - Your Personal Cooking Companion",
      description:
        "A user-friendly web app for browsing, saving, and sharing recipes. Users can explore diverse cuisines, create personalized recipe collections, and rate their favorite dishes.",
      image:
        "https://i.ibb.co.com/FLQr8mvz/recipe-book-app-62bc2-web-app-1.png",
      technologies: ["React", "MongoDB", "Note.js", "Express", "Tailwind CSS"],
      liveUrl: "https://recipe-book-app-62bc2.web.app/",
      githubUrl: "https://github.com/Abir-hasan-52/Recipe-Book-client-side",
      featured: false,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const overlayVariants = {
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const arrowVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const techTagVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };
  const handleClick = () => {
    window.open("https://github.com/Abir-hasan-52", "_blank");
   
  };
  return (
    <section className="py-20 px-6 bg-[#f5f5f7] border-b border-gray-200 min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A showcase of my recent work, featuring modern web applications
            built with cutting-edge technologies
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                project.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
              whileInView={{
                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  className="absolute top-4 left-4 z-10"
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.span
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    Featured
                  </motion.span>
                </motion.div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  variants={imageVariants}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0"
                  variants={overlayVariants}
                />

                {/* Hover Actions */}
                <motion.div
                  className="absolute top-4 right-4 flex gap-2 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={project.liveUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255,255,255,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    aria-label="View live project"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255,255,255,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    aria-label="View GitHub repository"
                  >
                    <Github size={16} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  whileHover={{ color: "#2563eb" }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 mb-4 leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium cursor-pointer"
                      variants={techTagVariants}
                      whileHover="hover"
                      custom={techIndex}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-600 font-medium group/link"
                    whileHover={{ color: "#1d4ed8" }}
                    transition={{ duration: 0.2 }}
                  >
                    View Live
                    <motion.div variants={arrowVariants}>
                      <ArrowRight size={16} />
                    </motion.div>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 font-medium"
                    whileHover={{ color: "#374151" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden"
            onClick={handleClick}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span className="relative z-10">
              View All Projects
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div variants={arrowVariants} className="inline-block ml-2">
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
