'use client';

import { useEffect } from 'react';

export default function MouseCursor() {
  useEffect(() => {
    // Wait for GSAP and cursor library to load
    const initCursor = () => {
      if (typeof window !== 'undefined' && (window as any).gsap) {
        const gsap = (window as any).gsap;
        
        // Create cursor elements
        const cursorOuter = document.createElement('div');
        cursorOuter.className = 'cursor-outer';
        document.body.appendChild(cursorOuter);

        const cursorInner = document.createElement('div');
        cursorInner.className = 'cursor-inner';
        document.body.appendChild(cursorInner);

        let mouseX = 0;
        let mouseY = 0;
        let cursorOuterX = 0;
        let cursorOuterY = 0;
        let cursorInnerX = 0;
        let cursorInnerY = 0;

        // Track mouse position
        document.addEventListener('mousemove', (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
        });

        // Animate cursor
        const animateCursor = () => {
          // Smooth follow for outer cursor
          cursorOuterX += (mouseX - cursorOuterX) * 0.1;
          cursorOuterY += (mouseY - cursorOuterY) * 0.1;
          
          // Faster follow for inner cursor
          cursorInnerX += (mouseX - cursorInnerX) * 0.2;
          cursorInnerY += (mouseY - cursorInnerY) * 0.2;

          gsap.set(cursorOuter, {
            x: cursorOuterX,
            y: cursorOuterY,
          });

          gsap.set(cursorInner, {
            x: cursorInnerX,
            y: cursorInnerY,
          });

          requestAnimationFrame(animateCursor);
        };

        animateCursor();

        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .btn-default, [data-cursor-text]');
        
        hoverElements.forEach((el) => {
          el.addEventListener('mouseenter', () => {
            cursorOuter.classList.add('cursor-hover');
            cursorInner.classList.add('cursor-hover');
          });

          el.addEventListener('mouseleave', () => {
            cursorOuter.classList.remove('cursor-hover');
            cursorInner.classList.remove('cursor-hover');
          });
        });

        // Cleanup function
        return () => {
          cursorOuter.remove();
          cursorInner.remove();
        };
      }
    };

    // Wait for scripts to load
    const timer = setTimeout(initCursor, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
