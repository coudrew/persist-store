import { combineReducers } from 'redux';
import colours from './colours';

export default combineReducers({ [colours.storeKey]: colours.reducer });