import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import {nameInput} from './reducers';

const store = createStore(nameInput)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('app'));


