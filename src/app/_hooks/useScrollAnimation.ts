import { useEffect, useRef } from 'react';

const useScrollAnimation = (threshold = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    const element = elementRef.current;
    if (!element) return;

    const { top, bottom } = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (top < windowHeight * threshold && bottom >= 0) {
      const distance = windowHeight - top;
      const opacity = Math.min(distance / windowHeight, 1);
      const translateY = Math.min(distance, 0);

      element.style.opacity = `${opacity}`;
      element.style.transform = `translateY(${translateY}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return elementRef;
};

export default useScrollAnimation;
