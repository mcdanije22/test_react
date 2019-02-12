import {combineReducers} from 'redux';
import formReducer from './formReducer';

 const rootReducer = combineReducers({
    state: formReducer
});

export default rootReducer;