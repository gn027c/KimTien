import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion, HTMLMotionProps } from "framer-motion";

interface AnimatedButtonProps extends HTMLMotionProps<'button'> {
  animation?: 'bounce' | 'pulse' | 'scale' | 'slide' | 'fade';
  delay?: number;
  duration?: number;
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

  // Mapping animation prop to framer-motion variants
  const variants = {
    bounce: { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } },
    pulse: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
    scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
    slide: { hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  };

  // Hover effect for each animation
  const whileHover = {
    bounce: { y: -4 },
    pulse: { scale: 1.05 },
    scale: { scale: 1.05 },
    slide: { x: -4 },
    fade: { opacity: 0.9 },
  };

  return (
    <motion.button
      ref={elementRef as React.RefObject<HTMLButtonElement>}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{ duration: duration / 1000, delay: delay / 1000, ease: 'easeOut' }}
      whileHover={whileHover[animation]}
      style={{ willChange: 'opacity, transform' }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton; 