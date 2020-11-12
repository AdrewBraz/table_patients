//@ts-check
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/index'

export default () => {
    const store = configureStore({reducer})
    return store;
}