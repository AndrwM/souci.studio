import { useEffect } from 'react';

// Inspired by: https://dev.to/shubhamreacts/progressively-loading-images-in-react-40lg

const listenerCallbacks = new WeakMap();
let observer;

function handleIntersections(entries) {
  entries.forEach(entry => {
    if (listenerCallbacks.has(entry.target)) {
      const isVisibleFunc = listenerCallbacks.get(entry.target);
      entry.isIntersecting ? isVisibleFunc(true) : isVisibleFunc(false);
    }
  });
}

function getIntersectionObserver() {
  if (observer === undefined) {
    observer = new IntersectionObserver(handleIntersections, {
      threshold: '0.1',
    });
  }
  return observer;
};

function useIntersection(ref, isVisibleFunc) {
  useEffect(() => {
    const target = ref.current;
    listenerCallbacks.set(target, isVisibleFunc);

    const observer = getIntersectionObserver();
    observer.observe(target);

    return () => {
      listenerCallbacks.delete(target);
      observer.unobserve(target);
    };
  }, [ref, isVisibleFunc]);
};

export default useIntersection;
