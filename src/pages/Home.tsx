import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Services from '../components/Services';
import Partners from '../components/Partners';
import CTA from '../components/CTA';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Bubble animation component
const BubbleBackground = () => {
  useEffect(() => {
    const createBubble = () => {
      const section = document.getElementById('bubble-container');
      if (!section) return;
      
      const bubble = document.createElement('div');
      const size = Math.random() * 60 + 20;
      const left = Math.random() * 100;
      const animDuration = Math.random() * 8 + 10;
      
      bubble.className = 'absolute bottom-0 rounded-full bg-blue-100/30 z-0';
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}%`;
      bubble.style.animation = `float ${animDuration}s linear infinite`;
      
      section.appendChild(bubble);
      
      setTimeout(() => {
        bubble.remove();
      }, animDuration * 1000);
    };
    
    // Create keyframes for float animation if not already existing
    if (!document.querySelector('#bubble-keyframes')) {
      const style = document.createElement('style');
      style.id = 'bubble-keyframes';
      style.innerHTML = `
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Create bubbles periodically
    const interval = setInterval(createBubble, 2000);
    
    return () => {
      clearInterval(interval);
      const style = document.getElementById('bubble-keyframes');
      if (style) style.remove();
    };
  }, []);
  
  return (
    <div id="bubble-container" className="absolute inset-0 overflow-hidden pointer-events-none z-0" />
  );
};

const HomePage: React.FC = () => {
  // Initialize scroll animations
  useScrollAnimation();
  
  return (
    <div className="w-full relative">
      {/* Bubble background effect */}
      <BubbleBackground />
      
      {/* Hero section with CTA */}
      <section className="relative z-10">
        <Hero />
      </section>
      
      {/* Featured products section */}
      <section className="relative z-10 bg-gradient-to-b from-white to-gray-50">
        <ProductShowcase />
      </section>
      
      {/* Services section */}
      <section className="relative z-10" data-aos="fade-up">
        <Services />
      </section>
      
      {/* Partners section */}
      <section className="relative z-10 py-12 bg-white" data-aos="fade-up">
        <Partners />
      </section>
      
      {/* CTA section */}
      <section className="relative z-10" data-aos="fade-up">
        <CTA />
      </section>
    </div>
  );
};

export default HomePage; 