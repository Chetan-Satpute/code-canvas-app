import {useCallback, useRef} from 'react';
import useAnimationFrame from '../../../hooks/useAnimationFrame';
import {drawNode} from '../../../lib/canvas/node';
import useCanvasInteractions from '../../../hooks/useCanvasInteractions';
import useFrames from '../hooks/useFrames';
import {drawEdge} from '../../../lib/canvas/edge';
import {drawLabel} from '../../../lib/canvas/label';
import {Frame} from '../../../lib/types';

interface CanvasProps {
  frames: Frame[];
}

function Canvas(props: CanvasProps) {
  const {frames} = props;

  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const {frameRef, nextFrame} = useFrames(frames);

  const {
    transformMatrix,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
    handleDoubleClick,
    handleWheel,
  } = useCanvasInteractions();

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

    ctx.setTransform(transformMatrix);

    const frame = frameRef.current;

    for (const node of frame.nodes) drawNode(ctx, node);
    for (const edge of frame.edges) drawEdge(ctx, edge);
    for (const label of frame.labels) drawLabel(ctx, label);

    nextFrame();
  }, [transformMatrix, frameRef, nextFrame]);

  useAnimationFrame(animationFrameCallback);

  return (
    <div ref={canvasContainerRef} className="flex-1 overflow-auto">
      <canvas
        ref={canvasRef}
        onDoubleClick={handleDoubleClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      />
    </div>
  );
}

export default Canvas;
