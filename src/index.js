import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import reducer from './reducers/index.js'


import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';


const store = createStore(reducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store = {store}>
    <Router>
        <App />
    </Router>
  </Provider> ,
  document.getElementById('root')
);
