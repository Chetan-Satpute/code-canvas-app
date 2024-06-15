export interface CanvasNode {
  x: number;
  y: number;

  corners: number;
  value: number;
  color: string;
  opacity: number;
}

export const NODE_WIDTH = 60;
export const NODE_HEIGHT = NODE_WIDTH / 2;
export const NODE_RADIUS = NODE_HEIGHT / 2;

export function drawNode(ctx: CanvasRenderingContext2D, node: CanvasNode) {
  const opacityColorValue = Math.floor(node.opacity * 255);
  const opacityColorString = opacityColorValue.toString(16).padStart(2, '0');

  const strokeColor = '#f5f3ee' + opacityColorString;
  const fillColor = node.color + opacityColorString;

  // border
  ctx.beginPath();

  ctx.moveTo(node.x + 1, node.y + 1);
  ctx.roundRect(node.x + 1, node.y + 1, NODE_WIDTH - 2, NODE_HEIGHT - 2, [
    node.corners & 0b1000 ? NODE_RADIUS : 0,
    node.corners & 0b0100 ? NODE_RADIUS : 0,
    node.corners & 0b0010 ? NODE_RADIUS : 0,
    node.corners & 0b0001 ? NODE_RADIUS : 0,
  ]);

  ctx.closePath();

  // background color
  const backgroundGradient = ctx.createRadialGradient(
    node.x + NODE_WIDTH / 2,
    node.y + NODE_HEIGHT / 2,
    0,
    node.x + NODE_WIDTH / 2,
    node.y + NODE_HEIGHT / 2,
    (NODE_WIDTH - 2) / 2
  );

  backgroundGradient.addColorStop(0, 'transparent');
  backgroundGradient.addColorStop(1, fillColor);

  ctx.fillStyle = backgroundGradient;
  ctx.fill();

  ctx.lineWidth = 2;
  ctx.strokeStyle = strokeColor;
  ctx.stroke();

  // value text
  ctx.fillStyle = strokeColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `bold ${NODE_HEIGHT / 2}px Roboto`;
  ctx.fillText(
    !(node.value || node.value === 0) ? '-' : node.value.toString(),
    node.x + NODE_WIDTH / 2,
    node.y + NODE_HEIGHT / 2
  );
}
