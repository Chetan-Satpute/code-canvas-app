import {CanvasState} from '../slice';

function stopAnimateReducer(state: CanvasState) {
  state.code = '';
  state.runId = '';
  state.steps = [];
  state.currentStepIndex = 0;
}

export default stopAnimateReducer;
