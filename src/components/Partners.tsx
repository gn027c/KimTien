import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const partnerLogos = [
  { src: "/logoPartner/acecook.png", alt: "Acecook", delay: 0 },
  { src: "/logoPartner/massan-group.png", alt: "Masan Group", delay: 100 },
  { src: "/logoPartner/unibeen.png", alt: "Uniben", delay: 200 },
  { src: "/logoPartner/nutifood.svg", alt: "Nutifood", delay: 300 },
  { src: "/logoPartner/kun.png", alt: "Kun", delay: 400 },
  { src: "/logoPartner/nabati.png", alt: "Nabati", delay: 500 },
];

const Partners: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <motion.section
      ref={sectionRef}
      id="partners"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } }
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with staggered animation */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Đối tác Tin cậy
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Chúng tôi tự hào được đồng hành cùng các thương hiệu hàng đầu, 
              mang đến những giải pháp bao bì chất lượng cao
            </p>
          </motion.div>
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isVisible ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="mx-auto mt-8 h-1 w-24 bg-gradient-to-r from-blue-600 to-red-500 rounded-full"
            style={{ originX: 0.5 }}
          />
        </div>

        {/* Partners Grid with enhanced animations */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent rounded-3xl" />
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center">
              {partnerLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 48, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.6 + logo.delay / 1000, ease: 'easeOut' }}
                  whileHover={{ scale: 1.1, boxShadow: '0 8px 32px rgba(59,130,246,0.10)' }}
                  className="group flex items-center justify-center"
                >
                  <div className="relative p-4 rounded-2xl">
                    {/* Hover background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      style={{ pointerEvents: 'none' }}
                    />
                    <motion.img
                      src={logo.src}
                      alt={logo.alt}
                      className="relative h-12 lg:h-16 w-auto object-contain grayscale group-hover:grayscale-0"
                      loading="lazy"
                      initial={{ scale: 1, filter: 'grayscale(1)' }}
                      whileHover={{ scale: 1.1, filter: 'grayscale(0)' }}
                      transition={{ duration: 0.5 }}
                    />
                    {/* Tooltip */}
                    <motion.div
                      className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 pointer-events-none whitespace-nowrap"
                      initial={{ opacity: 0, y: 8 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {logo.alt}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating elements for visual interest */}
          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 bg-blue-200 rounded-full opacity-60"
            initial={{ scale: 0, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 0.6 } : {}}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute -bottom-6 -right-6 w-12 h-12 bg-red-200 rounded-full opacity-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 0.4 } : {}}
            transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute top-1/2 -left-8 w-6 h-6 bg-purple-200 rounded-full opacity-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 0.5 } : {}}
            transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
          />
        </div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.4, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-gray-600">Dự án hoàn thành</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-gray-600">Khách hàng hài lòng</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-gray-600">Năm kinh nghiệm</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Partners;