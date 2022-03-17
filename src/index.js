import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { rootReducer } from './redux/rootReducer.js';
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, applyMiddleware(thunk))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById('root'));


reportWebVitals();
