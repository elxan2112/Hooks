import {combineReducers, createStore} from 'redux';
import reducer from './reducers/index';

export const store = createStore(combineReducers({reducer}));
