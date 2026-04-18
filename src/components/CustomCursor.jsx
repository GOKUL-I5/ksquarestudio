import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // High-performance motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for "heavy" physics feel (iOS style)
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updatePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.tilt-card') ||
        target.classList.contains('active');
      
      setIsHovering(isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Colossal Ambient Spotlight - Stays subtle in the background */}
      <motion.div 
        className="ambient-spotlight"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      />

      {/* Primary iOS/Figma Inspired Cursor */}
      <motion.div
        className={`ios-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          x: cursorX, 
          y: cursorY, 
          translateX: '-50%', 
          translateY: '-50%',
          opacity: isHidden ? 0 : 1
        }}
        animate={{
          width: isHovering ? 80 : 36,
          height: isHovering ? 80 : 36,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)'
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      />
    </>
  );
}
