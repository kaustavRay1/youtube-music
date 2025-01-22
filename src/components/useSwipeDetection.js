import { useEffect } from 'react';

const useSwipeDetection = (ref, onSwipeUp, onSwipeDown, onSwipeLeft, onSwipeRight) => {
  useEffect(() => {
    if (!ref.current) return;

    let xDown = null;
    let yDown = null;

    const getTouches = (evt) => evt.touches || evt.originalEvent.touches;

    const handleTouchStart = (evt) => {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    };

    const handleTouchMove = (evt) => {
      if (!xDown || !yDown) return;

      const xUp = evt.touches[0].clientX;
      const yUp = evt.touches[0].clientY;

      const xDiff = xDown - xUp;
      const yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          onSwipeLeft && onSwipeLeft();
        } else {
          onSwipeRight && onSwipeRight();
        }
      } else {
        if (yDiff > 0) {
          onSwipeDown && onSwipeDown();
        } else {
          onSwipeUp && onSwipeUp();
        }
      }

      xDown = null;
      yDown = null;
    };

    const element = ref.current;
    element.addEventListener('touchstart', handleTouchStart, false);
    element.addEventListener('touchmove', handleTouchMove, false);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart, false);
      element.removeEventListener('touchmove', handleTouchMove, false);
    };
  }, [ref, onSwipeUp, onSwipeDown, onSwipeLeft, onSwipeRight]);
};

export default useSwipeDetection;
