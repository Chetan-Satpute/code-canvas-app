import {useEffect, useRef} from 'react';
import {Frame} from '../../../lib/types';

const emptyFrame: Frame = {
  nodes: [],
  edges: [],
  labels: [],
};

function useFrames(frames: Frame[]) {
  const frameIndexRef = useRef<number>(0);
  const frameRef = useRef<Frame>(frames[frameIndexRef.current] || emptyFrame);

  useEffect(() => {
    frameIndexRef.current = 0;
    frameRef.current = frames[frameIndexRef.current] || emptyFrame;
  }, [frames]);

  const nextFrame = () => {
    frameIndexRef.current = Math.min(
      frames.length - 1,
      frameIndexRef.current + 1
    );

    frameRef.current = frames[frameIndexRef.current] || emptyFrame;
  };

  return {
    frameRef,
    nextFrame,
  };
}

export default useFrames;
