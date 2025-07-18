import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component tự động cuộn lên đầu trang khi chuyển route
 * Đặt component này trong App.tsx, bên trong Router và trước Routes
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuộn lên đầu trang với hành vi mượt mà
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null; // Component này không render bất kỳ UI nào
};

export default ScrollToTop; 