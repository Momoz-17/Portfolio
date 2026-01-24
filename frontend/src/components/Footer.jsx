import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 pt-16 pb-8 px-6 transition-colors duration-500">
      {/* Decorative Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Back to Top Button */}
        <button 
          onClick={scrollToTop}
          className="mb-8 p-3 bg-neutral-800 dark:bg-gray-200 rounded-full hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="group-hover:-translate-y-1 transition-transform" />
        </button>

        {/* Name / Logo Branding */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent">MOHIT GUPTA</span>
          </h2>
          <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-1 uppercase tracking-widest">
            Computer Engineer & Developer
          </p>
        </div>

        {/* Social Icons Quick Access */}
        <div className="flex gap-6 mb-8 text-neutral-400 dark:text-neutral-500">
          <a href="https://github.com/Momoz-17" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/mohit-gupta-9237b9263" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <FaLinkedin size={22} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohitvijaygupta17@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <FaEnvelope size={22} />
          </a>
        </div>

        {/* Copyright */}
        <div className="w-full pt-8 border-t border-neutral-800 dark:border-gray-200 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} <span className="font-semibold text-neutral-300 dark:text-neutral-700">Mohit Gupta</span>. 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}