import { PayloadAction } from "@reduxjs/toolkit";
import { CanvasState} from '../slice';

function executeFunctionSubmittingReducer(state: CanvasState, action: PayloadAction<boolean>) {
  state.isExecuteFunctionSubmitting = action.payload;
}

export default executeFunctionSubmittingReducer;
