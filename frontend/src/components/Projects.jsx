import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaLock, FaAndroid, FaRobot, FaWallet, FaShieldAlt, FaUsers, FaHandHoldingHeart } from 'react-icons/fa';

const projects = [
  {
    title: "Cryptography: Communication Privacy",
    desc: "A secure web chat application using AES encryption and SHA-256 authentication. Messages are stored encrypted, ensuring privacy for participants.",
    tech: ["PHP", "JavaScript", "XAMPP", "AES", "SHA-256"],
    link: "https://github.com/Momoz-17/3rd-year-project",
    icon: <FaLock className="text-blue-500" />
  },
  {
    title: "Android Chat App",
    desc: "A real-time messaging application featuring one-to-one messaging, live synchronization, and secure Firebase authentication.",
    tech: ["Kotlin", "Firebase", "Android Studio"],
    link: "https://github.com/Momoz-17/App-in-Kotlin",
    icon: <FaAndroid className="text-green-500" />
  },
  {
    title: "Email Spam Detection",
    desc: "A machine learning mini-project designed to classify and detect spam emails with high accuracy.",
    tech: ["Python", "Machine Learning", "NLP"],
    link: "https://github.com/Momoz-17/Machine-Learning-mini-project",
    icon: <FaRobot className="text-purple-500" />
  },
  {
    title: "Finance Tracker",
    desc: "A personal finance management tool designed to track income, expenses, and budgets with intuitive data visualizations.",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/Momoz-17/Finance-Tracker",
    icon: <FaWallet className="text-amber-500" />
  },
  {
    title: "Silent Complain System",
    desc: "A secure and anonymous platform for submitting complaints and feedback safely without revealing user identity.",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/Momoz-17/Silent-Complain-System",
    icon: <FaShieldAlt className="text-red-500" />
  },
  {
    title: "Connection Building",
    desc: "A professional networking platform focused on linking individuals, sharing ideas, and creating meaningful career relationships.",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/Momoz-17/Connection-Building",
    icon: <FaUsers className="text-cyan-500" />
  },
  {
    title: "Local Helper",
    desc: "A community-focused application designed to bridge the gap between local service providers and residents in need of assistance.",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/Momoz-17/Local-Helper",
    icon: <FaHandHoldingHeart className="text-rose-500" />
  }
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="py-20 px-6 bg-gradient-to-b from-neutral-800 to-neutral-900 dark:from-gray-100 dark:to-white text-white dark:text-neutral-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="group relative bg-neutral-800/50 dark:bg-white/50 backdrop-blur-md border border-neutral-700 dark:border-gray-200 p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl bg-neutral-700 dark:bg-gray-200 p-3 rounded-2xl">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold leading-tight">{p.title}</h3>
              </div>

              {/* Description */}
              <p className="text-neutral-400 dark:text-neutral-600 mb-6 text-sm md:text-base leading-relaxed h-24 overflow-hidden">
                {p.desc}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tech.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 dark:text-blue-600 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-sm text-blue-400 dark:text-blue-600 hover:text-blue-300 dark:hover:text-blue-800 transition-colors"
              >
                <FaGithub className="text-lg" />
                View on GitHub
                <FaExternalLinkAlt className="text-xs ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}