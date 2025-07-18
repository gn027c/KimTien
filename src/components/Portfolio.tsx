import React, { useEffect, useRef, useState, useMemo } from 'react';
import { portfolioItemsData } from '../utils/portfolioData';
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [centerIdx, setCenterIdx] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Use featured products based on isPopular property
  const featuredProducts = portfolioItemsData.filter(item => item.isPopular);
  const total = featuredProducts.length;

  // Auto-rotate
  useEffect(() => {
    if (total <= 1) return;
    intervalRef.current = setInterval(() => {
      setCenterIdx(idx => (idx + 1) % total);
    }, 3200);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  // Preload all project images on mount
  useEffect(() => {
    featuredProducts.forEach(item => {
      if (item.image) {
        const img = new window.Image();
        img.src = item.image;
      }
    });
  }, [featuredProducts]);

  // Memoize all projects
  const allProjects = useMemo(() => featuredProducts, [featuredProducts]);

  // Hiệu ứng hiện khi vào viewport
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Xử lý hover: dừng auto-rotate khi hover
  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  const handleMouseLeave = () => {
    if (total > 1) {
      intervalRef.current = setInterval(() => {
        setCenterIdx(idx => (idx + 1) % total);
      }, 3200);
    }
  };

  // Hiệu ứng coverflow: vị trí, scale, rotate, zIndex
  const getStyle = (idx: number) => {
    const offset = idx - centerIdx;
    if (offset === 0) {
      return {
        zIndex: 30,
        transform: 'scale(1.15) rotateY(0deg) translateY(-10px)',
        filter: 'drop-shadow(0 8px 32px rgba(59,130,246,0.25))',
        opacity: 1,
      };
    }
    if (Math.abs(offset) === 1) {
      return {
        zIndex: 20,
        transform: `scale(0.95) rotateY(${offset * 28}deg) translateY(10px)`,
        filter: 'blur(0.5px) drop-shadow(0 4px 16px rgba(59,130,246,0.10))',
        opacity: 0.85,
      };
    }
    if (Math.abs(offset) === 2) {
      return {
        zIndex: 10,
        transform: `scale(0.8) rotateY(${offset * 40}deg) translateY(24px)`,
        filter: 'blur(1.5px) drop-shadow(0 2px 8px rgba(59,130,246,0.08))',
        opacity: 0.5,
      };
    }
    // Ẩn các ảnh còn lại
    return {
      zIndex: 0,
      opacity: 0,
      pointerEvents: 'none' as React.CSSProperties['pointerEvents'],
      transform: `scale(0.7) translateY(40px)`
    };
  };

  return (
    <motion.section
      ref={sectionRef}
      id="products"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className=""
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dự Án <span className="text-blue-600">Tiêu Biểu</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className=""
          >
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Khám phá các giải pháp bao bì sáng tạo và chất lượng cao mà chúng tôi đã thực hiện cho khách hàng
            </p>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mx-auto mt-8 h-1 w-24 bg-gradient-to-r from-blue-600 to-red-500 rounded-full"
          />
        </div>
        <div className="w-full flex justify-center">
          <div className="relative flex items-center gap-0 md:gap-6 lg:gap-10 h-[320px] md:h-[360px] lg:h-[400px] select-none" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {allProjects.map((item, idx) => {
              // Tính toán index vòng lặp
              let realIdx = idx;
              if (centerIdx < 2 && idx > total - 3) realIdx = idx - total;
              if (centerIdx > total - 3 && idx < 2) realIdx = idx + total;
              const style = getStyle(realIdx);
              return (
                <div
                  key={item.id}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out group cursor-pointer ${realIdx === centerIdx || Math.abs(realIdx - centerIdx) <= 2 ? 'block' : 'hidden'}`}
                  style={style}
                  onClick={() => setCenterIdx(idx)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-44 h-44 sm:w-56 sm:h-56 object-cover rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:shadow-blue-400/60 group-hover:brightness-110"
                    style={{ boxShadow: '0 0 48px 0 rgba(59,130,246,0.18)' }}
                  />
                  {item.isNew && (
                    <span className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg animate-pulse pointer-events-none">
                      Mới
                    </span>
                  )}
                  {item.isPopular && !item.isNew && (
                    <span className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg animate-pulse pointer-events-none">
                      Phổ biến
                    </span>
                  )}
                  <span className="mt-6 block text-lg sm:text-xl font-bold text-gray-900 drop-shadow-lg group-hover:text-blue-700 transition-colors duration-300 text-center">
                    {item.title || item.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <style>{`
          .coverflow-perspective { perspective: 1200px; }
        `}</style>
      </div>
    </motion.section>
  );
};

export default Portfolio;