import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Logo and Copyright Section */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
              <Logo />
              <div className="text-gray-600">
                <p className="text-sm md:text-base">
                  © {currentYear} All rights reserved
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  Crafted with ❤️ for amazing experiences
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="Follow on Twitter"
              >
                <FaTwitter className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
              </a>

              <a
                href="https://linkedin.com/in/ah-abir"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="Connect on LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-blue-700 transition-colors duration-300" />
              </a>

              <a
                href="https://github.com/Abir-hasan-52"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="View GitHub Profile"
              >
                <FaGithub className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
              </a>

              <a
                href="https://facebook.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="Follow on Instagram"
              >
                <FaFacebook className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-pink-500 transition-colors duration-300" />
              </a>

              <a
                href="mailto:abirhasan5208@gmail.com"
                className="group p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="Send Email"
              >
                <FaEnvelope className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-green-500 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Bottom Section - Optional Portfolio Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
              <Link
                to="/"
                className="hover:text-gray-700 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="hover:text-gray-700 transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                 to="/contact"
                className="hover:text-gray-700 transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                to="/skills"
                className="hover:text-gray-700 transition-colors duration-300"
              >
                Skill
              </Link>
            </div>

            {/* Back to Top Button - Optional */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group flex items-center space-x-2 px-4 py-2 text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                <span>Back to top</span>
                <svg
                  className="w-3 h-3 group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
