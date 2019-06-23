import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer/rootReducer';

const store = createStore(reducer);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), 
document.getElementById('root'));

/* ReactDOM.render(
  <h1>Hello, Green Fox Academy!</h1>,
  document.getElementById('root'),
); */

