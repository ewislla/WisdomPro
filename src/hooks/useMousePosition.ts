import { useState, useEffect } from 'react';
import { CursorPosition } from '../types';

export const useMousePosition = (): CursorPosition => {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};