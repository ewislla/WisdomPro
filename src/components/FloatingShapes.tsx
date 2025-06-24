import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes: React.FC = () => {
  const shapes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 120 + 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 15,
    delay: Math.random() * 5,
    type: Math.random() > 0.5 ? 'circle' : 'square',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute opacity-5 dark:opacity-10 ${
            shape.type === 'circle' ? 'rounded-full' : 'rounded-2xl'
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            background: shape.id % 3 === 0 
              ? 'linear-gradient(135deg, #00F6A3, #00E294)' 
              : shape.id % 3 === 1
              ? 'linear-gradient(135deg, #FFD369, #FFC947)'
              : 'linear-gradient(135deg, #00F6A3, #FFD369)',
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            rotate: shape.type === 'square' ? [0, 360] : [0, 180, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        />
      ))}

      {/* Additional geometric elements */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`geo-${i}`}
          className="absolute opacity-10 dark:opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '2px',
            height: `${Math.random() * 100 + 50}px`,
            background: 'linear-gradient(to bottom, #00F6A3, transparent)',
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;