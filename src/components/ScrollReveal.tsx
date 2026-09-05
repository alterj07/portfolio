'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';

export interface ScrollRevealOptions {
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options: ScrollRevealOptions = {}) {
  const {
    delay = 0,
    duration = 600,
    distance = 24,
    threshold = 0,
  } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(distance);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            const rect = entry.boundingClientRect;
            if (rect.top < 0) {
              setOffsetY(-distance);
            } else {
              setOffsetY(distance);
            }
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [distance, threshold]);

  const style: React.CSSProperties = useMemo(() => {
    if (reducedMotion) {
      return {
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      };
    }

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : `translateY(${offsetY}px)`,
      transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      willChange: 'opacity, transform',
    };
  }, [isVisible, offsetY, duration, delay, reducedMotion]);

  return { ref, isVisible, style };
}

export interface ScrollRevealProps extends ScrollRevealOptions {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export default function ScrollReveal({
  children,
  className = '',
  style: userStyle,
  as: Component = 'div',
  delay,
  duration,
  distance,
  threshold,
}: ScrollRevealProps) {
  const { ref, style } = useScrollReveal<HTMLElement>({ delay, duration, distance, threshold });

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        ...style,
        ...userStyle,
      }}
    >
      {children}
    </Component>
  );
}

