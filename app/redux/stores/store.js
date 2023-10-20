import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {LIST_CATEGORY, CATEGORY, DRINKS} from '../feature/index';

const reducers = combineReducers({
  LIST_CATEGORY,
  CATEGORY,
  DRINKS,
});

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

export {store};
