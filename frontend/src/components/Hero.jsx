import Typewriter from 'typewriter-effect';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

export default function Hero() {
  return (
    <section 
      id="home"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-neutral-900 to-neutral-800 dark:from-white dark:to-gray-100 text-white dark:text-neutral-900 transition-colors duration-500 px-6"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-5xl mt-[-20px] md:mt-[-40px]">
        
        {/* Profile Picture Container */}
        <div className="relative mb-8">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-40 animate-pulse"></div>
          <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-neutral-800 dark:border-white overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
            <img 
              src="/Me.jpeg" 
              alt="Mohit Gupta" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name Section */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            Hi, I’m <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent">
              Mohit Gupta
            </span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-xl md:text-3xl font-medium">
            <span>I'm a</span> 
            <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent font-bold">
              <Typewriter
                options={{
                  strings: ["Computer Engineer", "Full-Stack Developer", "Android App Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </div>
        </div>

        {/* Buttons & Socials Container */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Main CTA Button */}
            <a 
              href="#projects" 
              className="px-10 py-4 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-bold rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300 shadow-xl text-lg flex items-center justify-center"
            >
              View My Work
            </a>

            {/* Resume Button - Professional Outline Style */}
            <a 
              href="/Mohit Gupta Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-white dark:border-neutral-900 text-white dark:text-neutral-900 font-bold rounded-full hover:bg-white hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-xl"
            >
              <FaDownload className="text-sm" />
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-10 text-4xl mt-2">
            <a 
              href="https://www.linkedin.com/in/mohit-gupta-9237b9263" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-500 hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/Momoz-17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}