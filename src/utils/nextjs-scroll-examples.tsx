/**
 * Ví dụ về ScrollToTop cho Next.js
 * File này chỉ để tham khảo, không sử dụng trong dự án React hiện tại
 */

// ===============================================================
// Next.js App Router (Next.js 13+)
// ===============================================================

// File: app/components/ScrollToTop.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollToTopAppRouter() {
  const pathname = usePathname();

  useEffect(() => {
    // Cuộn lên đầu trang khi pathname thay đổi
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

// Cách sử dụng: Thêm vào app/layout.tsx
/*
import { ScrollToTopAppRouter } from './components/ScrollToTop';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollToTopAppRouter />
        {children}
      </body>
    </html>
  );
}
*/

// ===============================================================
// Next.js Pages Router (Next.js 12 và cũ hơn)
// ===============================================================

// File: components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function ScrollToTopPagesRouter() {
  const router = useRouter();

  useEffect(() => {
    // Xử lý sự kiện routeChangeComplete
    const handleRouteChange = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    // Đăng ký event listener
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup event listener khi component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return null;
}

// Cách sử dụng: Thêm vào pages/_app.tsx
/*
import { ScrollToTopPagesRouter } from '../components/ScrollToTop';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ScrollToTopPagesRouter />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
*/

// ===============================================================
// Back to Top Button cho Next.js (hoạt động với cả App Router và Pages Router)
// ===============================================================

// File: components/BackToTopButton.tsx
'use client'; // Chỉ cần thêm 'use client' khi sử dụng với App Router

import { useState, useEffect } from 'react';

interface BackToTopButtonProps {
  threshold?: number;
  smooth?: boolean;
  className?: string;
  buttonText?: string;
  showArrow?: boolean;
}

export function BackToTopButtonNextjs({
  threshold = 300,
  smooth = true,
  className = '',
  buttonText,
  showArrow = true,
}: BackToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Throttle function để tối ưu hiệu suất
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
} 