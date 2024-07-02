import {createSlice} from '@reduxjs/toolkit';
import {Frame, Step} from '../../lib/types';
import {loadStructureReducer} from './reducers/loadStructure';
import changeStepReducer from './reducers/changeStep';
import stopAnimateReducer from './reducers/stopAnimate';

export interface CanvasState {
  structureData: string;
  structureFrame: Frame;

  code: string;
  steps: Step[];
  currentStepIndex: number;
}

const initialState: CanvasState = {
  structureData: '',
  structureFrame: {nodes: [], edges: [], labels: []},

  code: '',
  steps: [],
  currentStepIndex: 0,
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    loadStructure: loadStructureReducer,
    changeStep: changeStepReducer,
    stopAnimate: stopAnimateReducer,
  },
});

export const {changeStep, loadStructure, stopAnimate} = canvasSlice.actions;

export default canvasSlice.reducer;
