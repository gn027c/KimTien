import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from "framer-motion";

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

  // Mapping animation prop to framer-motion variants
  const variants = {
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    zoom: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
    'slide-left': { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    'slide-right': { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
    'slide-up': { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    'slide-down': { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  };

  return (
    <motion.div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`overflow-hidden ${className}`}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{ duration: duration / 1000, delay: delay / 1000, ease: 'easeOut' }}
      style={{ willChange: 'opacity, transform' }}
    >
      <img
        src={src}
        alt={alt}
        className={imageClassName}
      />
    </motion.div>
  );
};

export default AnimatedImage; 