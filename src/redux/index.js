import {combineReducers } from 'redux';
import fetchDataReducer from './fetchingData/fetchReducer'
import todoReducer from './todo/reducer';
const rootReducer = combineReducers({todoReducer,fetchDataReducer})
export default rootReducer