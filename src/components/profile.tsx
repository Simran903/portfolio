import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ProfileCard: React.FC = () => {
  return (
    <div id="home" className="flex flex-col items-center justify-center text-white relative h-[80vh]">
      {/* Profile Content */}
      <div className="flex flex-col items-center text-center md:text-left space-y-6 px-6 mt-6 md:mt-0">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Simran</h1>
          <p className="text-lg text-gray-400 mt-2">
            Transforming ideas into <span className="text-primary-a10 font-semibold">reality</span>
          </p>
          <p className="mt-4 text-gray-300 text-base sm:text-lg lg:text-xl">
            Creating modern, responsive, and scalable front-end solutions.
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex md:absolute md:top-1/2 md:left-4 md:transform md:-translate-y-1/2 md:flex-col md:space-y-6 md:text-2xl text-xl space-x-6 md:space-x-0 mt-4 md:mt-0">
        <a href="https://github.com/Simran903" aria-label="Github" className="hover:text-primary-a10 transition">
          <FaGithub />
        </a>
        <a href="https://x.com/itssimran903" aria-label="Twitter" className="hover:text-primary-a10 transition">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/simran09/" aria-label="LinkedIn" className="hover:text-primary-a10 transition">
          <FaLinkedin />
        </a>
        <a href="mailto: itssimran903@gmail.com" aria-label="Gmail" className="hover:text-primary-a10 transition">
          <SiGmail />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
