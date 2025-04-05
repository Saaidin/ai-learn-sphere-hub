import React from 'react';

interface GridProps {
  children?: React.ReactNode; // Made children optional
  cols?: number;
  gap?: number;
}

const Grid = ({ children, cols = 3, gap = 4 }: GridProps) => {
  return (
    <div 
      className={`grid grid-cols-1 md:grid-cols-${cols} gap-${gap}`}
    >
      {children}
    </div>
  );
};

export default Grid;