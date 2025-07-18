import React, { ReactNode, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'flip-up';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  className = '',
  threshold = 0.1,
  once = true,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: once,
    delay,
  });

  // Các class cho từng loại animation
  const animationClasses = {
    'fade-up': 'translate-y-10 opacity-0',
    'fade-down': '-translate-y-10 opacity-0',
    'fade-left': 'translate-x-10 opacity-0',
    'fade-right': '-translate-x-10 opacity-0',
    'zoom-in': 'scale-95 opacity-0',
    'flip-up': 'rotateX-90 opacity-0',
  };

  // Style cho duration
  const style = {
    transitionDuration: `${duration}ms`,
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`transition-all ease-out ${className} ${
        isVisible ? '' : animationClasses[animation]
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimatedSection; 