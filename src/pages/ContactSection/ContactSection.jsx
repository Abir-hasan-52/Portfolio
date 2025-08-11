import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#f5f5f7] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-heading font-bold text-primary-500"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-normal">
            Feel free to reach out if you want to collaborate, ask questions, or
            just say hello!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </motion.h2>
        

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              icon: <FiMail />,
              label: "Email",
              value: "abirhasan5208@gmail.com",
            },
            { icon: <FaWhatsapp />, label: "Phone", value: "+880 1639-448792" },
            {
              icon: <FiMapPin />,
              label: "Location",
              value: "Dhaka, Bangladesh",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white dark:bg-background-800 shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="text-primary-500 text-3xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-lg">{item.label}</h4>
              <p className="text-text-600">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto bg-white dark:bg-background-800 p-8 rounded-lg shadow-lg grid gap-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium text-sm sm:text-base"
          >
            <FiSend /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
