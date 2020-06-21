import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import { Provider } from 'react-redux';
import { App } from './components/App';
import Thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(Thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);