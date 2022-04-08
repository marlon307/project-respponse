import { useEffect } from 'react';

// https://medium.com/@kevinfelisilda/click-outside-element-event-using-react-hooks-2c540814b661

// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
// https://bobbyhadz.com/blog/react-property-does-not-exist-on-type-never

const useOutsideClick = (ref: any, callback: Function) => {
  useEffect(() => {
    const handleClick = (event: { target: any; }) => {
      const contentModal = ref.current?.contains(event.target);

      if (ref.current && !contentModal) {
        callback(false);
      }
    };
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [callback, ref]);
};

export default useOutsideClick;
