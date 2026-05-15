import { useEffect, useRef, useState } from 'react';
import { getRevealClassName, getRevealStyle } from './reveal.helpers';

function getPrefersReducedMotion() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function Reveal({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(getPrefersReducedMotion);

  useEffect(() => {
    setReduceMotion(getPrefersReducedMotion());
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setIsVisible(true);
      return undefined;
    }

    const element = elementRef.current;

    if (!element || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, reduceMotion]);

  return (
    <Component
      className={`${getRevealClassName(direction)} ${isVisible ? 'reveal-visible' : ''} ${className}`.trim()}
      ref={elementRef}
      style={getRevealStyle(delay, reduceMotion)}
    >
      {children}
    </Component>
  );
}
