import {PayloadAction} from '@reduxjs/toolkit';
import {CanvasState} from '../slice';
import {Frame} from '../../../lib/types';

export function loadStructureReducer(
  state: CanvasState,
  action: PayloadAction<{frame: Frame; data: string}>
) {
  state.structureData = action.payload.data;
  state.structureFrame = action.payload.frame;
}
