import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from './features/navigationSlice.js';
import colorsReducer from './features/colorsSlice.js';
import goodsReducer from './features/goodsSlice.js';

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  goods: goodsReducer,
  colors: colorsReducer,
});
