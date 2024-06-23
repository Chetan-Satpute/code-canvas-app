import {Point} from '../types';
import {NODE_HEIGHT, NODE_WIDTH} from './node';

export const enum LabelPosition {
  Top = 'top',
  Left = 'left',
  Right = 'right',
  Bottom = 'bottom',
}

export interface CanvasLabel {
  nodePosition: Point;
  position: LabelPosition;
  text: string;
  opacity: number;
}

export function drawLabel(ctx: CanvasRenderingContext2D, label: CanvasLabel) {
  const opacityColorValue = Math.floor(label.opacity * 255);
  const opacityColorString = opacityColorValue.toString(16).padStart(2, '0');

  ctx.strokeStyle = '#ffffff' + opacityColorString;
  ctx.fillStyle = '#ffffff' + opacityColorString;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  let x = label.nodePosition.x;
  let y = label.nodePosition.y;

  switch (label.position) {
    case LabelPosition.Top:
      x += NODE_WIDTH / 2;
      y -= NODE_HEIGHT / 2;
      break;
    case LabelPosition.Left:
      x -= NODE_WIDTH / 2;
      y += NODE_HEIGHT / 2;
      break;
    case LabelPosition.Right:
      x += (NODE_WIDTH * 3) / 2;
      y += NODE_HEIGHT / 2;
      break;
    case LabelPosition.Bottom:
      x += NODE_WIDTH / 2;
      y += (NODE_HEIGHT * 3) / 2;
      break;
  }

  ctx.font = `bold ${NODE_HEIGHT / 2}px Salsa`;
  ctx.fillText(label.text, x, y);
}
