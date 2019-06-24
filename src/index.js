import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer/rootReducer';
import { BrowserRouter } from 'react-router-dom'
import AcornReact from './components/acornReact';
import AcornRedux from './components/acornRedux';
import { Route } from "react-router-dom";
import NavBar from './components/navBar';

const store = createStore(reducer);

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <NavBar />
      <Route path='/simple/states' component={AcornReact} />
      <Route path='/simple/redux' component={AcornRedux} />
    </Provider>
  </BrowserRouter>
),
  document.getElementById('root'));

/* ReactDOM.render(
  <h1>Hello, Green Fox Academy!</h1>,
  document.getElementById('root'),
); */

