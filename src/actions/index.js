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
  },

  handleDropTask: function(startTaskIndex, endTaskIndex, startTask) {
    return {
      type: 'DROP_TASK',
      startTaskIndex: startTaskIndex,
      endTaskIndex: endTaskIndex,
      startTask: startTask
    }
  }


}

export default actions
