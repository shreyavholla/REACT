import {combineReducers} from 'redux';
import todoReducer from './TodoReducer';

export default combineReducers({
    todos:todoReducer
});