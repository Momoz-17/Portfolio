import { useState } from "react";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // For production, replace localhost with your actual backend URL
    try {
      await fetch("https://mohit-portfolio-l239.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      alert("Message sent! I'll get back to you soon.");
    } catch (err) {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-neutral-800 dark:from-white dark:to-gray-100 text-white dark:text-neutral-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Let's collaborate!</h3>
            <p className="text-neutral-400 dark:text-neutral-600 max-w-md text-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              {/* DIRECT GMAIL COMPOSE LINK */}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mohitvijaygupta17@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group/item w-fit cursor-pointer"
              >
                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all duration-300 shadow-lg shadow-blue-500/5">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm opacity-60">Email me at</p>
                  <p className="font-semibold group-hover/item:text-blue-500 transition-colors">
                    mohitvijaygupta17@gmail.com
                  </p>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-sm opacity-60">Location</p>
                  <p className="font-semibold">Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/mohit-gupta-9237b9263" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800 dark:bg-gray-200 rounded-xl hover:text-blue-500 transition-all shadow-md"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24}/>
              </a>
              <a 
                href="https://github.com/Momoz-17" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800 dark:bg-gray-200 rounded-xl hover:text-blue-500 transition-all shadow-md"
                aria-label="GitHub"
              >
                <FaGithub size={24}/>
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <form
              onSubmit={handleSubmit}
              className="relative bg-neutral-800/50 dark:bg-white/50 backdrop-blur-md p-8 rounded-3xl border border-neutral-700 dark:border-gray-200 shadow-2xl flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold opacity-70 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="p-4 rounded-2xl bg-neutral-900/50 dark:bg-gray-100 border border-neutral-700 dark:border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white dark:text-neutral-900"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold opacity-70 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="p-4 rounded-2xl bg-neutral-900/50 dark:bg-gray-100 border border-neutral-700 dark:border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white dark:text-neutral-900"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold opacity-70 ml-1">Message</label>
                <textarea
                  name="msg"
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="p-4 rounded-2xl bg-neutral-900/50 dark:bg-gray-100 border border-neutral-700 dark:border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none text-white dark:text-neutral-900"
                  onChange={handleChange}
                />
              </div>

              <button className="bg-gradient-to-r from-blue-700 to-blue-500 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-500/20 text-white">
                Send Message
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}