import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-[#0a0a0f] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          EXPERIENCE
          <span className="block w-20 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          A journey through my professional experiences, internships, and
          projects that shaped my skills and expertise.
        </p>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#11111a] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Company Logo */}
              <img
                src={exp.img}
                alt={exp.company}
                className="w-16 h-16 object-contain mb-4"
              />

              {/* Company & Role */}
              <h3 className="text-2xl font-semibold mb-1">{exp.company}</h3>
              <p className="text-purple-400 font-medium mb-2">{exp.role}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.date}</p>

              {/* Description */}
              <p className="text-gray-300 mb-4">{exp.desc}</p>

              {/* Skills/Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.skills?.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-purple-900 text-purple-300 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
