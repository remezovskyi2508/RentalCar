import { combineReducers, configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/slice';
import brandsReducer from './brands/slice';

const rootReducer = combineReducers({
  cars: carsReducer,
  brands: brandsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
