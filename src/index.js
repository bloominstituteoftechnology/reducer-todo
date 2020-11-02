import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 3 Imports added
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducers';

const store = createStore (reducer)

ReactDOM.render(
  <Provider store = { store }>      {/* //wrap <App /> in Provider so we can pass in our store */}
    <App />
  </Provider>,
  document.getElementById('root')
);
