import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware,logger)
    );

export default store