'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate percentage relative to the element (from 0 to 1)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs to make the rotation organic and responsive
  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  
  // Transform percentages to rotation degrees (tilt up to 8 degrees)
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    // Reset to centre
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(26, 62, 140, 0.16)'
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative rounded-2xl ${className}`}
    >
      <div 
        className="h-full w-full"
        style={{ 
          transform: 'translateZ(15px)', 
          transformStyle: 'preserve-3d' 
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
