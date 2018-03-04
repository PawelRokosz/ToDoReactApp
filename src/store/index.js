import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'

let finalCreateStore = compose(
  applyMiddleware(thunk, createLogger())
)(createStore)

export default function configureStore(initialState = { tasks: [] }) {
  return finalCreateStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
