import React from 'react';
import { FaAward, FaExternalLinkAlt, FaPython, FaAws, FaCode } from 'react-icons/fa';

const certificates = [
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    icon: <FaAws className="text-orange-500" />,
    link: "/AWS batch.pdf", // Replace with your certificate link or PDF path
    color: "from-orange-500/20 to-transparent"
  },
  {
    title: "Full Stack Developer Bootcamp",
    issuer: "GeeksforGeeks",
    icon: <FaCode className="text-green-500" />,
    link: "/Full stack.pdf", // Replace with your certificate link or PDF path
    color: "from-green-500/20 to-transparent"
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    icon: <FaPython className="text-blue-500" />,
    link: "Python for Data Science.pdf", // Replace with your certificate link or PDF path
    color: "from-blue-500/20 to-transparent"
  }
];

const Certificates = () => {
  return (
    <section 
      id="certificates" 
      className="py-20 px-6 bg-gradient-to-b from-neutral-800 to-neutral-900 dark:from-gray-100 dark:to-white text-white dark:text-neutral-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <div 
              key={i}
              className="group relative overflow-hidden bg-neutral-800/50 dark:bg-white/50 backdrop-blur-md border border-neutral-700 dark:border-gray-200 p-8 rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Subtle background glow based on the brand color */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                {/* Icon & Award Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className="text-4xl p-3 bg-neutral-700 dark:bg-gray-100 rounded-2xl shadow-inner">
                    {cert.icon}
                  </div>
                  <FaAward className="text-blue-500 text-2xl opacity-50" />
                </div>

                {/* Title & Issuer */}
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-blue-400 dark:text-blue-600 font-medium mb-8">
                  {cert.issuer}
                </p>

                {/* Professional Button */}
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-700 dark:bg-gray-200 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all rounded-xl text-sm font-bold shadow-md"
                >
                  Verify Credential
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;