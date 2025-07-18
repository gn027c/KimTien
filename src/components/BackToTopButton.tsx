import React, { useState, useEffect } from 'react';

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

  // Hàm xử lý khi click nút
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : 'auto',
    });
  };

  return (
    <button
      onClick={scrollToTop}
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
    </button>
  );
};

export default BackToTopButton; 