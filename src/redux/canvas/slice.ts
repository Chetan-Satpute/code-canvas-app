import {createSlice} from '@reduxjs/toolkit';
import {Frame, Step} from '../../lib/types';
import {loadStructureReducer} from './reducers/loadStructure';
import changeStepReducer from './reducers/changeStep';
import stopAnimateReducer from './reducers/stopAnimate';
import executeFunctionSubmittingReducer from './reducers/executeFunctionSubmitting';
import setStepsReducer from './reducers/setSteps';
import setStepsFetchingReducer from './reducers/setStepsFetching';

export interface CanvasState {
  structureData: string;
  structureFrame: Frame;

  code: string;
  runId: string;
  steps: Step[];
  currentStepIndex: number;

  stepsFetching: boolean;

  isExecuteFunctionSubmitting: boolean;
}

const initialState: CanvasState = {
  structureData: '',
  structureFrame: {nodes: [], edges: [], labels: []},

  code: '',
  runId: '',
  steps: [],
  currentStepIndex: 0,

  stepsFetching: false,

  isExecuteFunctionSubmitting: false,
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    loadStructure: loadStructureReducer,
    changeStep: changeStepReducer,
    stopAnimate: stopAnimateReducer,
    executeFunctionSubmitting: executeFunctionSubmittingReducer,
    setSteps: setStepsReducer,
    setStepsFetching: setStepsFetchingReducer,
  },
});

export const {
  changeStep,
  loadStructure,
  stopAnimate,
  executeFunctionSubmitting,
  setSteps,
  setStepsFetching,
} = canvasSlice.actions;

export default canvasSlice.reducer;
