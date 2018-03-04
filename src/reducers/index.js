import { combineReducers } from 'redux'
import tasksReducer from './tasksReducer.js'

const rootReducer = combineReducers({
  tasks: tasksReducer
})

export default rootReducer
