import React, { useState, useEffect } from 'react';

interface BackToTopButtonAnimatedProps {
  threshold?: number; // Ngưỡng hiển thị nút (pixel)
  smooth?: boolean; // Cuộn mượt mà
  className?: string; // Class tùy chỉnh
  variant?: 'circle' | 'pill' | 'square'; // Kiểu dáng nút
  color?: 'blue' | 'green' | 'red' | 'purple' | 'amber'; // Màu sắc
  showText?: boolean; // Hiển thị văn bản
  customText?: string; // Văn bản tùy chỉnh
}

const BackToTopButtonAnimated: React.FC<BackToTopButtonAnimatedProps> = ({
  threshold = 300,
  smooth = true,
  className = '',
  variant = 'circle',
  color = 'blue',
  showText = false,
  customText = 'Lên đầu trang',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Throttle function để tối ưu hiệu suất
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateVisibility = () => {
      const scrollY = window.pageYOffset;
      
      if (scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      lastScrollY = scrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    // Thêm event listener với throttling
    window.addEventListener('scroll', onScroll);
    
    // Kiểm tra vị trí ban đầu
    updateVisibility();

    // Cleanup
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  // Hàm xử lý khi click nút
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : 'auto',
    });
  };

  // Xác định màu sắc dựa trên props
  const getColorClasses = () => {
    switch (color) {
      case 'green':
        return 'bg-green-600 hover:bg-green-700';
      case 'red':
        return 'bg-red-600 hover:bg-red-700';
      case 'purple':
        return 'bg-purple-600 hover:bg-purple-700';
      case 'amber':
        return 'bg-amber-600 hover:bg-amber-700';
      case 'blue':
      default:
        return 'bg-blue-600 hover:bg-blue-700';
    }
  };

  // Xác định hình dạng dựa trên props
  const getShapeClasses = () => {
    switch (variant) {
      case 'pill':
        return 'rounded-full px-4';
      case 'square':
        return 'rounded-md';
      case 'circle':
      default:
        return 'rounded-full aspect-square';
    }
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-6 right-6 p-3 text-white shadow-lg transition-all duration-300 z-50 flex items-center justify-center focus:outline-none ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      } ${getColorClasses()} ${getShapeClasses()} ${className}`}
      aria-label="Quay lại đầu trang"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 transition-transform duration-300 ${isHovered ? '-translate-y-1' : ''} ${
          showText ? 'mr-2' : ''
        }`}
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
      {showText && <span>{customText}</span>}
      
      {/* Hiệu ứng gợn sóng khi hover */}
      <span className={`absolute inset-0 rounded-full bg-white opacity-30 scale-0 transition-transform duration-500 ${
        isHovered ? 'scale-150 opacity-0' : ''
      }`}></span>
    </button>
  );
};

export default BackToTopButtonAnimated; 