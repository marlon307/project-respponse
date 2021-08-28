import { useEffect, useState } from 'react';

function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const functionScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', functionScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', functionScroll);
    };
  }, []);

  return scrollY;
}

export default useScroll;
