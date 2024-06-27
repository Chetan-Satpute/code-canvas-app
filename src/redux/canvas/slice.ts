import {createSlice} from '@reduxjs/toolkit';
import {Frame} from '../../lib/types';
import {loadStructureReducer} from './reducers/loadStructure';

export interface CanvasState {
  structureData: string;
  structureFrame: Frame;
}

const initialState: CanvasState = {
  structureData: '',
  structureFrame: {nodes: [], edges: [], labels: []},
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {loadStructure: loadStructureReducer},
});

export const {loadStructure} = canvasSlice.actions;

export default canvasSlice.reducer;
