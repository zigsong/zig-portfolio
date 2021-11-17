import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback: () => void) => {
  const targetElement = useRef(null);

  useEffect(() => {
    if (!targetElement || !targetElement.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(targetElement.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return targetElement;
};

export default useIntersectionObserver;
