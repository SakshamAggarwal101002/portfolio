// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-5 py-10 justify-center">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-5 sm:px-8 py-6 sm:py-8 mb-10 w-full sm:w-[48%] lg:w-[45%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6 text-center">
            {category.title}
          </h3>

          {/* Skills Grid */}
          <div className="w-full">
            {/* ✅ Adjusted grid columns for better spacing */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
              {category.skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={1000}
                  scale={1.03}
                  transitionSpeed={1000}
                  gyroscope
                >
                  <div className="w-full">
                    <div
                      className="flex flex-col items-center justify-center gap-2
                                 bg-transparent border-2 border-gray-700 rounded-3xl
                                 px-2 py-3 w-full h-full"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0"
                      />
                      <span
                        className="
                          text-xs sm:text-sm text-gray-300 font-medium text-center
                          whitespace-normal break-words max-w-full px-1
                        "
                      >
                        {skill.name.split('_').join(' ')} {/* Convert underscores to spaces */}
                      </span>
                    </div>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;