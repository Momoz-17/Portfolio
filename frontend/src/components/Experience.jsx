import React from 'react';
import { FaCalendarAlt, FaFileAlt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-neutral-800 dark:from-white dark:to-gray-100 text-white dark:text-neutral-900 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight">
          <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-neutral-800/80 dark:bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-neutral-700 dark:border-gray-200 shadow-2xl">
            
            {/* Title and Date Row */}
            <div className="flex justify-between items-center gap-2 mb-4">
              <div className="flex-1">
                <h3 className="text-lg md:text-2xl font-bold text-blue-400 dark:text-blue-600 truncate">
                  Android Developer Intern
                </h3>
                <p className="text-sm md:text-xl font-semibold opacity-90">Compozent</p>
              </div>
              
              <div className="shrink-0 flex items-center gap-1.5 bg-neutral-700/50 dark:bg-gray-200/50 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-medium border border-neutral-600 dark:border-gray-300">
                <FaCalendarAlt className="text-blue-400" />
                <span className="whitespace-nowrap">Dec '24 — Jan '25</span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-4 space-y-3 text-sm md:text-base text-neutral-300 dark:text-neutral-700">
              <p>During this internship, I focused on deepening my expertise in mobile app architecture.</p>
              <ul className="list-disc list-inside space-y-2 ml-1">
                <li>Developed a functional <span className="text-blue-400 dark:text-blue-600">Messenger App</span></li>
                <li>Integrated <span className="text-blue-400 dark:text-blue-600">Firebase Auth</span> & Database</li>
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-neutral-700/50 dark:border-gray-200/50">
              {["Kotlin", "Firebase", "Android Studio"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 dark:text-blue-700 text-[10px] font-bold rounded uppercase">
                  {tech}
                </span>
              ))}
            </div>            

            {/* ACTION BUTTONS (The Links you asked for) */}
            <div className="mt-8 flex flex-wrap gap-4">
              {/* Internship Letter Link */}
              <a 
                href="/compozent internship.jpeg"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:-translate-y-1"
              >
                <FaFileAlt />
                <span>Internship Letter</span>
              </a>

              {/* GitHub Project Link */}
              <a 
                href="https://github.com/Momoz-17/App-in-Kotlin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 dark:bg-gray-200 dark:hover:bg-gray-300 text-white dark:text-neutral-900 text-sm font-bold rounded-xl transition-all shadow-lg hover:-translate-y-1"
              >
                <FaGithub />
                <span>View Project</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;