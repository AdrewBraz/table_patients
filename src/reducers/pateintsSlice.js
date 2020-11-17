/* eslint-disable no-param-reassign */
// @ts-check

import { createSlice } from '@reduxjs/toolkit';
import { orderBy } from 'lodash';

const patientsSlice = createSlice({
  name: 'patients',
  initialState: [],
  reducers: {
    orderPatients(state, {payload}){
      console.log(payload)
      const {key, dirrection} = payload;
      return orderBy(state, [key],[dirrection])
    },
  }
});

export const { orderPatients } = patientsSlice.actions;

export default patientsSlice.reducer;