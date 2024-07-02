import {PayloadAction} from '@reduxjs/toolkit';
import {CanvasState} from '../slice';

function changeStepReducer(state: CanvasState, action: PayloadAction<number>) {
  const updateIndex = action.payload;
  const steps = state.steps;

  if (updateIndex < 0) state.currentStepIndex = 0;
  else if (updateIndex >= steps.length)
    state.currentStepIndex = steps.length - 1;
  else state.currentStepIndex = updateIndex;
}

export default changeStepReducer;
