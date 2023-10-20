import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {LIST_CATEGORY} from '../feature/index';

const reducers = combineReducers({
  //Actions
  LIST_CATEGORY,
});

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

export {store};
