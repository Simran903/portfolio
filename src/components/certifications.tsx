import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "The Complete 2024 Web Development Bootcamp",
    issuer: "Udemy",
    date: "April 2024",
    link: "https://www.udemy.com/certificate/UC-343a103d-ebef-4191-93d7-90b3312301e6/",
  },
  {
    title: "Programming in C++: A Hands-on Introduction",
    issuer: "Coursera",
    date: "July 24, 2022",
    link: "https://www.coursera.org/account/accomplishments/specialization/R98BX4CTW9WZ",
  },
  {
    title: "Crash Course on Python",
    issuer: "Coursera",
    date: "February 5, 2022",
    link: "https://www.coursera.org/account/accomplishments/verify/3B8GD4ESLC85",
  },
];

const Certifications: React.FC = () => {
  return (
    <div className="text-white px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Certifications</h1>
      <div className="space-y-4 sm:space-y-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-surface-a10 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            {/* Title and Date */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h2 className="text-lg sm:text-xl font-semibold">{cert.title}</h2>
              <p className="text-gray-500 text-sm mt-2 sm:mt-0">{cert.date}</p>
            </div>
            {/* Issuer */}
            <p className="text-gray-400 mt-2 sm:mt-4">{cert.issuer}</p>
            <a
              href={cert.link}
              aria-label="Live Link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-a10 mt-4 sm:mt-6 hover:text-primary-a10/80 transition"
            >
              <FaExternalLinkAlt className="inline-block" />
              <span>View Certification</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
