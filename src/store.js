import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootreducer.js';

const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
});

export default store;
