import {PayloadAction} from '@reduxjs/toolkit';
import {CanvasState} from '../slice';
import {Step} from '../../../lib/types';

function setStepsReducer(state: CanvasState, action: PayloadAction<Step[]>) {
  state.steps = action.payload;
}

export default setStepsReducer;
