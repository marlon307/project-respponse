import { useEffect } from 'react';

// https://medium.com/@kevinfelisilda/click-outside-element-event-using-react-hooks-2c540814b661

const useOutsideClick = (ref: any, callback: Function) => {
  const handleClick = ({ target }: any) => {
    if (ref.current && !ref.current.contains(target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;
