import { useState, useEffect, useLayoutEffect, useRef } from 'react';

const usePosition = (anchor) => {

  const ref = useRef(null);
  const [elementOffset, setElementOffset] = useState(null);

  const [sourceX, sourceY, destX, destY] = anchor;
  // ex ['bottom', 'left', 'top', 'left']


  useEffect(() => {
    const elRect = ref.current.getBoundingClientRect();
    const x = elRect[sourceX];
    const y = destY === 'right' ? window.innerWidth - elRect[sourceY] : elRect[sourceY];
    setElementOffset({
      [destX]: x + window.scrollX,
      [destY]: y + window.scrollY
    });
  }, []);

  // I don't think this useLayoutEffect is getting run

  useLayoutEffect(() => {
    console.log('layout effect usePosition');
    const elRect = ref.current.getBoundingClientRect();
    console.log('elRect :', elRect);
    const x = elRect[sourceX];
    const y = destY === 'right' ? window.innerWidth - elRect[sourceY] : elRect[sourceY];
    const updateMenuPos = () => {
      setElementOffset({
        [destX]: x + window.scrollX,
        [destY]: y + window.scrollY
      });
    }
    window.addEventListener('resize', updateMenuPos);
    // updateMenuPos();
    return () => {
      window.removeEventListener('resize', updateMenuPos);
    }
  }, []);

  return [ ref, elementOffset ];
};

export default usePosition;
