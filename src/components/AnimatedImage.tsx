import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  animation?: 'fade' | 'zoom' | 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down';
  delay?: number;
  duration?: number;
  threshold?: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className = '',
  imageClassName = '',
  animation = 'fade',
  delay = 0,
  duration = 1000,
  threshold = 0.1,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true,
    delay,
  });

  // Các class cho từng loại animation
  const getAnimationClasses = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fade':
          return 'opacity-0';
        case 'zoom':
          return 'opacity-0 scale-90';
        case 'slide-left':
          return 'opacity-0 -translate-x-10';
        case 'slide-right':
          return 'opacity-0 translate-x-10';
        case 'slide-up':
          return 'opacity-0 translate-y-10';
        case 'slide-down':
          return 'opacity-0 -translate-y-10';
        default:
          return 'opacity-0';
      }
    }
    return '';
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`transition-all ease-out ${imageClassName} ${getAnimationClasses()}`}
        style={{ transitionDuration: `${duration}ms` }}
      />
    </div>
  );
};

export default AnimatedImage; 