import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Education Cards */}
      <div className="flex flex-col gap-10">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105"
          >
            {/* Logo */}
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-[#8245ec] bg-white flex justify-center items-center">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <h4 className="text-md text-gray-300">{edu.school}</h4>
              <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
              <p className="mt-4 text-gray-400 font-bold">{edu.grade}</p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
