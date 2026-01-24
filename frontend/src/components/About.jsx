export default function About() {
  return (
    <section 
      id="about" 
      className="py-20 px-6 bg-gradient-to-b from-neutral-800 to-neutral-900 dark:from-gray-100 dark:to-white text-white dark:text-neutral-900 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading with the same blue gradient as your name */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 tracking-tight">
          <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        {/* Content Box */}
        <div className="bg-neutral-800/50 dark:bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-neutral-700 dark:border-gray-200 shadow-xl">
          <p className="text-lg md:text-xl leading-relaxed text-center">
            Final-year <span className="text-blue-400 dark:text-blue-600 font-semibold">Computer Engineering</span> student 
            with a strong foundation in full-stack web and mobile development. I build
            secure, user-friendly applications using the <span className="text-blue-400 dark:text-blue-600 font-semibold">MERN stack</span> and 
            <span className="text-blue-400 dark:text-blue-600 font-semibold"> Kotlin</span>, with hands-on experience in 
            AWS Cloud Foundations and Firebase integration. 
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-center mt-6">
            Proven ability to deliver technical solutions through projects involving 
            <span className="italic"> AES encryption</span> and start-up portal design during academic and internship roles.
          </p>
        </div>
      </div>
    </section>
  );
}