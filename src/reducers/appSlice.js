// @ts-check
import { createSelector } from '@reduxjs/toolkit';
import { orderBy } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: { order: {}},
  reducers: {
    orderPatients(state, {payload: {key, dirrection}}){
      const { order } = state;
      order[key] = dirrection;
      return state;
    }
  }
});


export const { orderPatients } = appSlice.actions;

const getOrder= state => state.app.order
const getPatients = state => state.patients

export const PatientSelector = createSelector(
    [getOrder, getPatients],
    (order, patients) => orderBy(patients, Object.keys(order), Object.values(order))
)

export default appSlice.reducer;