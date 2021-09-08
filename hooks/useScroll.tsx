import { useEffect, useState, useCallback } from 'react';

function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  const functionScroll = useCallback(
    () => setScrollY(window.scrollY),
    [],
  );

  // const getDevice = window.platform.os.family;
  //
  //
  //
  // Mudar lista de dispositivos
  // const isMobile = /Android|iOS|Windows Phone|BlackBerry|Tablet OS|null/i.test(getDevice);

  useEffect(() => {
    window.addEventListener('scroll', functionScroll, false);

    return () => {
      window.removeEventListener('scroll', functionScroll);
    };
  }, []);
  return scrollY;
}

export default useScroll;
