//@ts-check
import { combineReducers } from '@reduxjs/toolkit';
import patients from './pateintsSlice';
import app from './appSlice';

export default combineReducers({patients, app})