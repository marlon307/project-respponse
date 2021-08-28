import { useEffect, useState, useCallback } from 'react';
import { supportsPassiveEvents } from 'detect-passive-events';

function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const functionScroll = useCallback(
    () => setScrollY(window.scrollY),
    [],
  );

  useEffect(() => {
    if (supportsPassiveEvents) {
      window.addEventListener('scroll', functionScroll, { capture: false, passive: true });
    } else {
      window.addEventListener('scroll', functionScroll, false);
    }
    return () => {
      window.removeEventListener('scroll', functionScroll);
    };
  }, [functionScroll]);
  return scrollY;
}

export default useScroll;
