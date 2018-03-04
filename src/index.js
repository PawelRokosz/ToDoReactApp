import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store'
import App from './App';

let initialState = {
  tasks: [
    {
      id: 1,
      completed: false,
      forEdit: false,
      task: 'Just type something',
    },
    {
      id: 2,
      completed: false,
      forEdit: false,
      task: 'And click "Add Task"'
    }
  ]
}

let store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
