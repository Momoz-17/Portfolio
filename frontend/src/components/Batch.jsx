import React from 'react';

// Configuration to exactly match your public folder layout seen in image_7aea48.png
const batchData = [
  {
    id: 1,
    title: "AWS Cloud Academy Graduate",
    issuer: "AWS Academy",
    badgeFile: "/AWS batch.pdf", // Links straight to your PDF file in the public folder
    // Custom icon layout imitating your top-left brand icons
    icon: (
      <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20">
        <span className="text-amber-500 text-xs font-bold font-mono">aws</span>
      </div>
    )
  },
  {
    id: 2,
    title: "Postman API Student Expert",
    issuer: "Postman",
    badgeFile: "#", // Replace with your Postman verification URL or PDF link
    icon: (
      <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20">
        <span className="text-orange-500 text-xs font-bold font-mono">P</span>
      </div>
    )
  }
];

const Batch = () => {
  return (
    // Matching the exact dark background color and styling structure seen in image_7b4fc1.jpg
    <section id="batches" className="bg-[#111] py-16 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Component Title matched to Certifications style */}
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent mb-12 tracking-wide">
          Batches
        </h2>

        {/* Replicated Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
          {batchData.map((batch) => (
            <div 
              key={batch.id} 
              className="relative bg-[#18181b]/60 border border-zinc-800/80 p-8 rounded-2xl flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1"
            >
              {/* Top Row: Brand Icon & Small Decorative Certificate Badge */}
              <div className="flex justify-between items-start mb-6">
                {batch.icon}
                {/* Small ribbon icon matching the top-right decoration of your cert cards */}
                <span className="text-blue-500/70 text-xl">🏅</span>
              </div>

              {/* Middle Section: Title & Issuer Info */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white leading-snug mb-2">
                  {batch.title}
                </h3>
                <p className="text-blue-400 font-medium text-sm">
                  {batch.issuer}
                </p>
              </div>

              {/* Bottom Row: View/Verify Button */}
              <div>
                <a 
                  href={batch.badgeFile} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-xs px-4 py-2.5 rounded-lg border border-zinc-700/60 transition-colors duration-200"
                >
                  <span>View Badge</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Batch;