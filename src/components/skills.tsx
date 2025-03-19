import React from "react";

const skills = [
  "NextJS",
  "React",
  "NodeJS",
  "MongoDB",
  "Javascript",
  "Typescript",
  "Python",
  "PostgreSQL",
  "Prisma",
  "AWS",
  "Github",
  "Figma"
];

const Skills: React.FC = () => {
  return (
    <div className="text-white px-6 sm:px-12 lg:px-24 py-16 mx-auto flex flex-col justify-center max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Skills</h1>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-surface-a10 text-primary-a10 hover:bg-primary-a10/10 px-4 py-2 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;