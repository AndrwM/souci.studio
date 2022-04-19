import { useEffect } from 'react';

function useEscKeyListener(callback, active = true) {
  useEffect(() => {
    const close = (event) => {
      if (event.keyCode === 27) callback();
    };

    if (!active) return window.removeEventListener('keydown', close);

    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [callback]);
};

export default useEscKeyListener;
