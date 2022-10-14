import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middleware = [thunk];

const rootReducer = combineReducers({
  weather: reducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(...middleware));
export default store;
