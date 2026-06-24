import React from 'react';

// Configuration array mapping directly to your public folder files
const batchData = [
  {
    id: 1,
    title: "AWS Cloud Academy Graduate",
    issuer: "Amazon Web Services",
    image: "/AWS batch...", // Update this with your full extension (e.g., .png)
    description: "Earned for cloud architecture foundations, covering core compute, storage, and database deployment.",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
  },
  {
    id: 2,
    title: "Postman API Student Expert",
    issuer: "Postman",
    image: "/Postman A...", // Update this with your full extension (e.g., .png)
    description: "Certified in building, testing, and automating API requests using collections and variables.",
    tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  }
];

const Batch = () => {
  return (
    <section className="bg-slate-900 py-16 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">
            Academic <span className="text-blue-400">Badges & Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Verified technical milestones and student-expert credentials earned during my academic path.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {batchData.map((batch) => (
            <div 
              key={batch.id} 
              className="group relative flex flex-col sm:flex-row items-center gap-6 bg-slate-800/40 border border-slate-700/60 p-6 rounded-2xl hover:border-blue-400/50 transition-all duration-300 shadow-xl backdrop-blur-sm overflow-hidden"
            >
              {/* Decorative Glow on Hover */}
              <div className="absolute -inset-0.5 bg-blue-500 rounded-2xl opacity-0 group-hover:opacity-5 blur-xl transition duration-300"></div>

              {/* Responsive Badge Image Window */}
              <div className="relative w-28 h-28 flex-shrink-0 bg-slate-900 rounded-xl p-2 border border-slate-700 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={batch.image} 
                  alt={batch.title} 
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_6px_rgba(56,189,248,0.15)]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                {/* Fallback Text if image isn't loaded correctly */}
                <div className="hidden text-xs text-blue-400 font-mono font-bold uppercase text-center">
                  Badge
                </div>
              </div>

              {/* Context Text Box */}
              <div className="text-center sm:text-left flex-1">
                <span className={`text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-md border ${batch.tagColor}`}>
                  {batch.issuer}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors duration-200">
                  {batch.title}
                </h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  {batch.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Batch;