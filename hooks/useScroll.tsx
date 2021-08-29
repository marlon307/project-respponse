import { useEffect, useState, useCallback } from 'react';

function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const functionScroll = useCallback(
    () => setScrollY(window.scrollY),
    [],
  );

  useEffect(() => {
    window.addEventListener('scroll', functionScroll, { capture: false, passive: true });

    return () => {
      window.removeEventListener('scroll', functionScroll);
    };
  }, [functionScroll]);
  return scrollY;
}

export default useScroll;
