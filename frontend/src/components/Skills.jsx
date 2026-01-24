import React from 'react';
import { FaCode, FaLayerGroup, FaDatabase, FaTools } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Languages",
    icon: <FaCode className="text-blue-500" />,
    skills: ["Javascript", "PHP", "Python", "Kotlin", "HTML5", "CSS"]
  },
  {
    title: "Frameworks & Libs",
    icon: <FaLayerGroup className="text-cyan-500" />,
    skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Databases",
    icon: <FaDatabase className="text-blue-600" />,
    skills: ["MongoDB", "MySQL"]
  },
  {
    title: "Tools & Cloud",
    icon: <FaTools className="text-indigo-500" />,
    skills: ["AWS", "Git & GitHub", "Postman", "VS Code"]
  }
];

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-neutral-800 dark:from-white dark:to-gray-100 text-white dark:text-neutral-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent">
            Technical Toolkit
          </span>
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => (
            <div 
              key={i}
              className="bg-neutral-800/50 dark:bg-white/50 backdrop-blur-md border border-neutral-700 dark:border-gray-200 p-6 rounded-3xl shadow-xl hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl p-2 bg-neutral-700 dark:bg-gray-100 rounded-xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-xs font-semibold bg-neutral-700/50 dark:bg-gray-200/50 border border-neutral-600 dark:border-gray-300 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400 dark:hover:text-blue-600 transition-all cursor-default"
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
}