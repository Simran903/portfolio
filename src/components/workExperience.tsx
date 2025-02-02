import React from "react";

const WorkExperience: React.FC = () => {
  return (
    <div
      id="work"
      className="text-white px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 lg:py-20 max-w-4xl mx-auto"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10">Work Experience</h1>
      <div className="bg-surface-a10 rounded-lg p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-xl transition-shadow">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h2 className="text-xl font-semibold mb-2 sm:mb-0">Nebula DefTech</h2>
          <div className="text-left sm:text-right">
            <p className="text-gray-400 text-sm">Remote</p>
            <p className="text-gray-400 text-sm">
              December 2024 - March 2025
            </p>
          </div>
        </div>

        {/* Role */}
        <h3 className="text-base sm:text-lg font-semibold mt-4">Frontend Developer Intern</h3>

        {/* Responsibilities */}
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2 text-sm tracking-wider leading-relaxed">
          <li>
            Accomplished seamless frontend development by deploying multiple platforms with optimized UI.
          </li>
          <li>Accomplished efficient data handling by integrating APIs and contributing to Firebase backend.</li>
          <li>
            Accomplished scalable UI by utilizing Next.js, Tailwind, and TypeScript for performance and design consistency.
          </li>
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {["React", "NextJS", "Firebase", "REST API"].map((tech, index) => (
            <span
              key={index}
              className="bg-primary-a10/10 text-primary-a10 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;