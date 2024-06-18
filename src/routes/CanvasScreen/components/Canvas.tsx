import {useCallback, useRef} from 'react';
import useAnimationFrame from '../../../hooks/useAnimationFrame';

function Canvas() {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const animationFrameCallback = useCallback(() => {
    const canvasContainer = canvasContainerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvasContainer || !canvas || !ctx) return;

    const {height: containerHeight, width: containerWidth} =
      canvasContainer.getBoundingClientRect();

    // Resize and clear canvas
    canvas.height = containerHeight;
    canvas.width = containerWidth;
  }, []);

  useAnimationFrame(animationFrameCallback);

  return (
    <div ref={canvasContainerRef} className="flex-1 overflow-auto">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default Canvas;
