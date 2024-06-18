import {CanvasEdge} from './canvas/edge';
import {CanvasLabel} from './canvas/label';
import {CanvasNode} from './canvas/node';

export interface Point {
  x: number;
  y: number;
}

export interface Frame {
  nodes: CanvasNode[];
  edges: CanvasEdge[];
  labels: CanvasLabel[];
}
