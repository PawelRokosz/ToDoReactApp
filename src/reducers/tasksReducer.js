import shortid from 'shortid'

let tasksReducer = function(tasks = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [{
        task: action.task,
        completed: false,
        forEdit: false,
        id: shortid.generate()
      }, ...tasks]
    case 'DELETE_TASK':
      return tasks.filter(task => {
        return task.id !== action.id
      })
    case 'COMPLETE_TASK':
      return tasks.map(task => {
        return task.id === action.id
          ? Object.assign({}, task, { completed: !task.completed })
          : task
      })
      case 'EDIT_TASK':
        return tasks.map(task => {
          return task.id === action.id
            ? Object.assign({}, task, { task: action.task })
            : task
        })
    default:
      return tasks
  }
}

export default tasksReducer
