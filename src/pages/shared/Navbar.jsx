import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { NavLink, useLocation } from "react-router";
import { Link as ScrollLink } from "react-scroll";
import {
  FiBook,
  FiFolder,
  FiHome,
  FiPhone,
  FiSettings,
  FiUser,
  FiMenu,
  FiX,
  FiDownload,
} from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationLinks = [
    {
      type: "scroll",
      to: "home",
      icon: FiHome,
      label: "Home",
      activeColor: "text-blue-600",
      hoverColor: "hover:text-blue-600",
    },
    {
      type: "scroll",
      to: "about",
      icon: FiUser,
      label: "About",
      activeColor: "text-green-600",
      hoverColor: "hover:text-green-600",
    },
    {
      type: "scroll",
      to: "skills",
      icon: FiSettings,
      label: "Skills",
      activeColor: "text-purple-600",
      hoverColor: "hover:text-purple-600",
    },
    {
      type: "route",
      to: "education",
      icon: FiBook,
      label: "Education",
      activeColor: "text-orange-600",
      hoverColor: "hover:text-orange-600",
    },
    {
      type: "scroll",
      to: "projects",
      icon: FiFolder,
      label: "Projects",
      activeColor: "text-indigo-600",
      hoverColor: "hover:text-indigo-600",
    },
    {
      type: "scroll",
      to: "contact",
      icon: FiPhone,
      label: "Contact",
      activeColor: "text-pink-600",
      hoverColor: "hover:text-pink-600",
    },
  ];

  const NavLinkItem = ({ link, isMobile = false }) => {
    const Icon = link.icon;

    if (link.type === "scroll" && location.pathname === "/") {
      return (
        <li className={isMobile ? "w-full" : ""}>
          <ScrollLink
            to={link.to}
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            onClick={isMobile ? closeMenu : undefined}
            className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 group relative overflow-hidden cursor-pointer text-gray-600 ${link.hoverColor} ${
              isMobile ? "w-full justify-start" : ""
            }`}
            activeClass={`${link.activeColor} font-semibold`}
          >
            <Icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">{link.label}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </ScrollLink>
        </li>
      );
    }

    return (
      <li className={isMobile ? "w-full" : ""}>
        <NavLink
          to={link.to}
          onClick={isMobile ? closeMenu : undefined}
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 group relative overflow-hidden ${
              isActive
                ? `${link.activeColor} bg-gray-100 font-semibold shadow-sm`
                : `text-gray-600 ${link.hoverColor} hover:bg-gray-50`
            } ${isMobile ? "w-full justify-start" : ""}`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && !isMobile && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-current"></div>
              )}
              <Icon
                className={`text-lg transition-transform duration-300 ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`}
              />
              <span className="font-medium">{link.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </>
          )}
        </NavLink>
      </li>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/90 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-4">
            <Logo />
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            <ul className="flex items-center space-x-1">
              {navigationLinks.map((link) => (
                <NavLinkItem key={link.to} link={link} />
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="/resume.pdf"
              download
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
            >
              <FiDownload className="text-sm group-hover:animate-bounce" />
              <span className="font-medium">Resume</span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="sm:hidden p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              <FiDownload className="text-lg" />
            </a>

            <button
              onClick={handleMenuToggle}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="pt-4 border-t border-gray-200">
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <NavLinkItem key={link.to} link={link} isMobile={true} />
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <a
                href="/resume.pdf"
                download
                onClick={closeMenu}
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
              >
                <FiDownload className="text-lg group-hover:animate-bounce" />
                <span className="font-medium">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
