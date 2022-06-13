import { useEffect, useRef } from "react";

export const useOnScreen = (el: Element | null, callback: () => void, options: IntersectionObserverInit = { threshold: 0.5 }) => {
  const callRef = useRef<typeof callback>();
  callRef.current = callback;
  const { root, rootMargin, threshold } = options

  useEffect(() => {
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          if (callRef.current) {
            callRef.current();
          }
        }
      },
      { root, rootMargin, threshold }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [el, root, rootMargin, threshold]);
};
