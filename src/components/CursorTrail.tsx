import React, { useEffect, useRef, useState } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

const CursorTrail: React.FC = () => {
  const mousePosition = useMousePosition();
  const trailRef = useRef<HTMLDivElement>(null);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    if (trailRef.current) {
      trailRef.current.style.left = `${mousePosition.x - 10}px`;
      trailRef.current.style.top = `${mousePosition.y - 10}px`;
    }

    // Add new trail point
    const newPoint = {
      x: mousePosition.x,
      y: mousePosition.y,
      id: Date.now(),
    };

    setTrail(prev => {
      const newTrail = [newPoint, ...prev.slice(0, 8)];
      return newTrail;
    });
  }, [mousePosition]);

  return (
    <>
      {/* Main cursor glow */}
      <div
        ref={trailRef}
        className="fixed w-6 h-6 pointer-events-none z-50 transition-all duration-75 ease-out hidden lg:block"
        style={{
          background: 'radial-gradient(circle, rgba(0, 246, 163, 0.6) 0%, rgba(0, 246, 163, 0.3) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(1px)',
        }}
      />

      {/* Trail particles */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-40 hidden lg:block"
          style={{
            left: `${point.x - 2}px`,
            top: `${point.y - 2}px`,
            width: `${Math.max(4 - index * 0.5, 1)}px`,
            height: `${Math.max(4 - index * 0.5, 1)}px`,
            background: `rgba(0, 246, 163, ${Math.max(0.8 - index * 0.1, 0.1)})`,
            borderRadius: '50%',
            transition: 'all 0.1s ease-out',
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;