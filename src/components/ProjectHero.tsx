import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  label: string;
  value: string;
}

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  stats?: Stat[];
  cta?: { label: string; onClick: () => void }[];
  imageUrl?: string; // optional floating image
}

const ProjectHero: React.FC<ProjectHeroProps> = ({
  title,
  subtitle,
  stats = [],
  cta = [],
}) => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Banner background blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/imageHeader/project.png" 
          alt="Project Banner"
          className="w-full h-full object-cover blur-md scale-105" 
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0M0 0L40 40" stroke="white" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="container max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg leading-tight">
          {title}
        </h1>
        <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          {subtitle}
        </p>
        {/* CTA buttons */}
        {cta.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {cta.map((btn, idx) => (
              <button
                key={btn.label}
                className={`px-6 py-2 rounded-full font-semibold shadow-md text-base focus:outline-none transition-colors ${idx === 0 ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-white text-blue-700 border border-blue-700 hover:bg-blue-50'}`}
                onClick={btn.onClick}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}
        {/* Stats */}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-md mt-4 mx-auto">
            {stats.map(stat => (
              <div key={stat.label} className="bg-white/10 rounded-xl shadow flex flex-col items-center justify-center aspect-square py-2">
                <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-blue-100 text-xs font-medium text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Remove the SVG wave divider at the bottom of the header */}
      {/* Custom floating animation (not used) */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default ProjectHero; 