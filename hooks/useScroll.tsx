import { useEffect, useState, useCallback } from 'react';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    platform: any;
  }
}

function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  const functionScroll = useCallback(
    () => setScrollY(window.scrollY),
    [],
  );

  const getDevice = window.platform.os.family;

  // Mudar lista de dispositivos
  const isMobile = /Android|iOS|Windows Phone|BlackBerry|Tablet OS|null/i.test(getDevice);

  useEffect(() => {
    window.addEventListener('scroll', functionScroll, { passive: isMobile });

    return () => {
      window.removeEventListener('scroll', functionScroll);
    };
  }, []);
  return scrollY;
}

export default useScroll;
