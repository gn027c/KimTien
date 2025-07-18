import React from 'react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, subtitle }) => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Banner background blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/imageHeader/service.png" 
          alt="Service Banner"
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
      
      <div className="container max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button
            className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-full shadow-md text-base focus:outline-none"
            onClick={() => {
              const el = document.getElementById('design-services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Thiết kế miễn phí
          </button>
          <button
            className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-full border border-blue-700 shadow-md text-base focus:outline-none"
            onClick={() => {
              const el = document.getElementById('printing-services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Dịch vụ In ấn
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default ServiceHero; 