import {PayloadAction} from '@reduxjs/toolkit';
import {CanvasState} from '../slice';
import {Frame, Step} from '../../../lib/types';

export function loadStructureReducer(
  state: CanvasState,
  action: PayloadAction<{
    frame: Frame;
    data: string;
    code?: string;
    steps?: Step[];
  }>
) {
  state.structureData = action.payload.data;
  state.structureFrame = action.payload.frame;
  state.code = action.payload.code || '';
  state.steps = action.payload.steps || [];
}
