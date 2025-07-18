import React, { ButtonHTMLAttributes } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  animation?: 'bounce' | 'pulse' | 'scale' | 'slide' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  animation = 'scale',
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.1,
  once = true,
  ...props
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: once,
    delay,
  });

  // Các class cho từng loại animation
  const getAnimationClasses = () => {
    if (!isVisible) {
      switch (animation) {
        case 'bounce':
          return 'opacity-0 translate-y-4';
        case 'pulse':
          return 'opacity-0 scale-95';
        case 'scale':
          return 'opacity-0 scale-90';
        case 'slide':
          return 'opacity-0 -translate-x-4';
        case 'fade':
          return 'opacity-0';
        default:
          return 'opacity-0';
      }
    }
    return '';
  };

  // Thêm hiệu ứng hover cho nút
  const getHoverClasses = () => {
    if (isVisible) {
      switch (animation) {
        case 'bounce':
          return 'hover:-translate-y-1 active:translate-y-0';
        case 'pulse':
          return 'hover:scale-105 active:scale-100';
        case 'scale':
          return 'hover:scale-105 active:scale-95';
        case 'slide':
          return 'hover:-translate-x-1 active:translate-x-0';
        case 'fade':
          return 'hover:opacity-90 active:opacity-100';
        default:
          return 'hover:opacity-90';
      }
    }
    return '';
  };

  return (
    <button
      ref={elementRef as React.RefObject<HTMLButtonElement>}
      className={`transition-all ease-out ${className} ${getAnimationClasses()} ${getHoverClasses()}`}
      style={{ transitionDuration: `${duration}ms` }}
      {...props}
    >
      {children}
    </button>
  );
};

export default AnimatedButton; 