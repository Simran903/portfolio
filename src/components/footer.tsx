"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);

  // Toggle visibility of the scroll-to-top arrow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="text-white py-6 mx-auto max-w-4xl">
      <hr className="border-gray-700 mb-6" />
      <div className="flex flex-col items-center space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/Simran903"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-a10"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/itssimran903"
            aria-label="X"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-a10"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/simran09/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-a10"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Scroll-to-top arrow */}
        {showArrow && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 text-white rounded-full shadow-lg bg-primary-a10 hover:bg-primary-a10/10"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;