import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackToTopButtonProps {
  threshold?: number; // Ngưỡng hiển thị nút (pixel)
  smooth?: boolean; // Cuộn mượt mà
  className?: string; // Class tùy chỉnh
  buttonText?: string; // Văn bản nút (tùy chọn)
  showArrow?: boolean; // Hiển thị mũi tên
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({
  threshold = 300,
  smooth = true,
  className = '',
  buttonText,
  showArrow = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Kiểm tra vị trí cuộn và cập nhật trạng thái hiển thị
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Thêm event listener khi component mount
    window.addEventListener('scroll', toggleVisibility);

    // Kiểm tra vị trí ban đầu
    toggleVisibility();

    // Cleanup event listener khi component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  // Hàm cuộn mượt từng bước lên đầu trang (không dùng behavior: 'smooth')
  const animateScrollToTop = () => {
    const duration = 1700; // ms
    const startY = window.scrollY;
    const startTime = performance.now();
    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      window.scrollTo(0, startY * (1 - ease));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onClick={animateScrollToTop}
          className={`fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 z-50 flex items-center justify-center hover:bg-blue-700 focus:outline-none ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          } ${className}`}
          aria-label="Quay lại đầu trang"
        >
          {showArrow && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${buttonText ? 'mr-2' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          )}
          {buttonText && <span>{buttonText}</span>}
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton; 