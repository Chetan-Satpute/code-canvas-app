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

export enum FunctionArgumentType {
  Number = 'number',
  NumberArray = 'number[]',
}

export interface FunctionParameter {
  label: string;
  placeholder: string;
  supportingText: string;
  argumentType: FunctionArgumentType;
}

export type FunctionArgument = number | number[];

export interface FunctionInfo {
  id: string;
  name: string;
  parameters: FunctionParameter[];
  animated: boolean;
}

export interface FunctionSection {
  title: string;
  functions: FunctionInfo[];
}

export interface Step {
  frames: Frame[];
  hlLines: number[];
  callStack: string[];
}
