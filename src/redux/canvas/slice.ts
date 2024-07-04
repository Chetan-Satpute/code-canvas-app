import {createSlice} from '@reduxjs/toolkit';
import {Frame, Step} from '../../lib/types';
import {loadStructureReducer} from './reducers/loadStructure';
import changeStepReducer from './reducers/changeStep';
import stopAnimateReducer from './reducers/stopAnimate';
import executeFunctionSubmittingReducer from './reducers/executeFunctionSubmitting';

export interface CanvasState {
  structureData: string;
  structureFrame: Frame;

  code: string;
  steps: Step[];
  currentStepIndex: number;

  isExecuteFunctionSubmitting: boolean;
}

const initialState: CanvasState = {
  structureData: '',
  structureFrame: {nodes: [], edges: [], labels: []},

  code: '',
  steps: [],
  currentStepIndex: 0,

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
  },
});

export const {
  changeStep,
  loadStructure,
  stopAnimate,
  executeFunctionSubmitting,
} = canvasSlice.actions;

export default canvasSlice.reducer;
