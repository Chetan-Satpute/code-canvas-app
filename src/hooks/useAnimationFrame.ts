import {useEffect} from 'react';

function useAnimationFrame(callback: () => void) {
  useEffect(() => {
    let requestId: number | null = null;

    const requestAnimationFrameCallback = () => {
      callback();

      requestId = window.requestAnimationFrame(requestAnimationFrameCallback);
    };

    requestId = window.requestAnimationFrame(requestAnimationFrameCallback);

    return () => {
      if (requestId) window.cancelAnimationFrame(requestId);
    };
  }, [callback]);
}

export default useAnimationFrame;
