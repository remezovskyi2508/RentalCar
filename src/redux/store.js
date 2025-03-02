import { combineReducers, configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/slice.js';

const rootReducer = combineReducers({
  cars: carsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
