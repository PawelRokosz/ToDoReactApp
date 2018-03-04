let actions = {
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

  handleEditTask: function(id, task) {
    return {
      type: 'EDIT_TASK',
      id: id,
      task: task
    }
  }
}

export default actions
