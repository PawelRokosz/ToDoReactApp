const actions = {
  handleAddTask: function(task) {
    return {
      type: 'ADD_TASK',
      task: task
    }
  },

  handleDeleteTask: function(id) {
    return {
      type: 'DELETE_TASK',
      id: id
    }
  },

  handleCompleteTask: function(id) {
    return {
      type: 'COMPLETE_TASK',
      id: id
    }
  },

  handleEditTask: function(task) {
    return {
      type: 'EDIT_TASK',
      task: task
    }
  }
}

export default actions
