import {useCallback, useRef} from 'react';
import {useParams} from 'react-router-dom';
import useAnimationFrame from '../../../hooks/useAnimationFrame';
import {drawNode} from '../../../lib/canvas/node';
import useCanvasInteractions from '../../../hooks/useCanvasInteractions';
import useFrames from '../hooks/useFrames';
import {drawEdge} from '../../../lib/canvas/edge';
import {drawLabel} from '../../../lib/canvas/label';
import {useAppSelector} from '../../../redux/hooks';
import useSteps from '../hooks/useSteps';

function Canvas() {
  const params = useParams();
  const isRunning = params.algorithmId;

  useSteps();

  const steps = useAppSelector(state => state.canvas.steps);
  const currentStepIndex = useAppSelector(
    state => state.canvas.currentStepIndex
  );

  const structureFrame = useAppSelector(state => state.canvas.structureFrame);

  const currentStep = steps[currentStepIndex];
  const frames = isRunning
    ? currentStep
      ? currentStep.frames
      : [{nodes: [], edges: [], labels: []}]
    : [structureFrame];

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
