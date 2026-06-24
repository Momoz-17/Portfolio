import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Batches", href: "#batches" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-neutral-900 text-white p-6 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto relative">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="bg-white text-neutral-900 font-black px-2 py-1 rounded-md text-sm">
            MG
          </div>
          <h1 className="text-xl font-bold tracking-tight">Mohit Gupta</h1>
        </div>

        {/* DESKTOP LINKS: These will hide on screens smaller than 768px (md) */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-gray-400 transition-colors text-sm font-medium">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE HAMBURGER: Only shows on small screens */}
        <button 
          className="md:hidden z-50 p-2 text-2xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* MOBILE FLOATING CARD: Only shows when isOpen is true AND on small screens */}
        <div 
          className={`absolute top-16 right-0 w-64 bg-neutral-800 border border-neutral-700 rounded-2xl shadow-2xl transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-lg font-bold hover:text-gray-400 block transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}