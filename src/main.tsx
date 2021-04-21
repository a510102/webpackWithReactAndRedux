import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import HelloWorld from './components/HelloWorld';
import Counter from './components/counter/index';

ReactDOM.render(
  <Provider store={store}>
    <HelloWorld />
    <Counter />
  </Provider>,
  document.getElementById('app')
);
