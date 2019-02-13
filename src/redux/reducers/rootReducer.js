import {combineReducers} from 'redux';
import {nameInput, requestUsers} from './formReducer';

 const rootReducer = combineReducers({
    nameInput,
    requestUsers
});

export default rootReducer;