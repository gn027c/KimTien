import React, { ReactNode } from 'react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { motion } from "framer-motion";

interface AnimatedGridProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  baseDelay?: number;
}

const AnimatedGrid: React.FC<AnimatedGridProps> = ({
  children,
  className = '',
  itemClassName = '',
  baseDelay = 100,
}) => {
  const { containerRef, visibleItems } = useStaggeredAnimation(
    React.Children.count(children),
    baseDelay
  );

  return (
    <motion.div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: baseDelay / 1000,
          },
        },
      }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          className={itemClassName}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
          }}
          initial="hidden"
          animate={visibleItems[index] ? "visible" : "hidden"}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedGrid; 