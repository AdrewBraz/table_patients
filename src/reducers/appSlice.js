// @ts-check
import { createSelector } from '@reduxjs/toolkit';
import { orderBy } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: { order: {}, filters: [], columnNames: []},
  reducers: {
    orderPatients(state, {payload}){
      state.order = payload;
      return state
    },
    filterPatients(state, {payload}){
      payload.forEach(filter => {
        state.filters.push(filter)
      });
      return state;
    }
  }
});


export const { orderPatients, filterPatients } = appSlice.actions;

const getOrder = state => state.app.order
const getFilters = state => state.app.filters
const getColumnNames = state => state.app.columnNames
const getPatients = state => state.patients

const FilterSelector = createSelector(
  [getFilters, getPatients, getColumnNames],
  (filters, patients, columnNames) => {
  return filters.length === 0 ? patients : filters.reduce((acc, name) =>{
    const {key, value} = name;
    console.log(name, key, value)
    return value.length <= 1 ? acc : acc.filter(patient => {
      console.log(patient[key])
      return patient[key].split(' ').some( i => {
        return i.includes(value)
      })
    })
  }, patients)}
)


export const PatientSelector = createSelector(
    [getOrder, FilterSelector],
    (order, patients) =>  orderBy(patients, Object.keys(order), Object.values(order))
)

export default appSlice.reducer;