import {PayloadAction} from '@reduxjs/toolkit';
import {CanvasState} from '../slice';

function setStepsFetchingReducer(
  state: CanvasState,
  action: PayloadAction<boolean>
) {
  state.stepsFetching = action.payload;
}

export default setStepsFetchingReducer;
