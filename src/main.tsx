import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import TodoList from './components/TodoList';
import Weather from './components/Weather';

ReactDOM.render(
  <Provider store={store}>
    {/* <TodoList /> */}
    <Weather />
  </Provider>,
  document.getElementById('app')
);
