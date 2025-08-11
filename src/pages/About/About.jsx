import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode,
  FaLightbulb,
  FaHeart
} from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#f5f5f7] border-b border-gray-200 relative overflow-hidden" id="about">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100/50 rounded-full blur-3xl"></div>
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
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            
            {/* Main Story */}
            <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-4">
                <FaHeart className="text-red-500 text-xl" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">My Journey</h3>
              </div>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Hi, I'm <strong className="text-gray-900">ABTR HASAN</strong> - a passionate beginner in web development who loves turning creative ideas into functional web applications. My journey into programming started with curiosity and has grown into a genuine passion for creating digital experiences.
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                As someone new to the development field, I'm constantly learning and experimenting with the MERN stack. Every line of code I write teaches me something new, and I find joy in solving problems and building projects that make a difference.
              </p>
            </motion.div>

            {/* What I'm Learning */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="flex items-center space-x-3">
                <FaLightbulb className="text-yellow-500 text-xl" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">What I'm Working On</h3>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-2xl border border-blue-100">
                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Building interactive web applications with React</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    <span>Exploring Next.js for full-stack development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Learning backend development with Node.js & Express</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Working with MongoDB for database management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    <span>Creating beautiful UIs with Tailwind CSS & DaisyUI</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Goals */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="flex items-center space-x-3">
                <FaCode className="text-blue-600 text-xl" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">My Goals</h3>
              </div>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                I'm eager to grow as a full-stack developer and contribute to meaningful projects. My goal is to continuously learn, build amazing web applications, and eventually collaborate with experienced developers who can help me improve my skills.
              </p>
            </motion.div>

            {/* Personal Touch */}
            <motion.div 
              className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100"
              variants={itemVariants}
            >
              <p className="text-sm sm:text-base text-gray-600 italic">
                "When I'm not coding, you'll find me exploring new technologies, watching programming tutorials, reading tech blogs, or working on personal projects. I believe that every expert was once a beginner, and I'm excited about the journey ahead!"
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://i.ibb.co.com/C5Dy0WJD/1674161393535.jpg"
                  alt="ABTR HASAN - Web Developer"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;