import React, { ReactNode } from 'react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

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
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <div
          className={`transition-all duration-700 ease-out ${itemClassName} ${
            visibleItems[index] ? '' : 'opacity-0 translate-y-10'
          }`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default AnimatedGrid; 