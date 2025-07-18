import React, { ReactNode, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from "framer-motion";

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
  once = false,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: once,
    delay,
  });

  // Mapping animation prop to framer-motion variants
  const variants = {
    'fade-up': { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    'fade-down': { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
    'fade-left': { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
    'fade-right': { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    'zoom-in': { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
    'flip-up': { hidden: { opacity: 0, rotateX: 90 }, visible: { opacity: 1, rotateX: 0 } },
  };

  return (
    <motion.div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{ duration: duration / 1000, delay: delay / 1000, ease: 'easeOut' }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 