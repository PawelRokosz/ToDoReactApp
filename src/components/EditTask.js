import React, { Component } from 'react';

class EditTask extends Component {
  constructor (props) {
    super(props)
    this.state = {
      taskForEdit: this.props.taskForEdit
    }
  }

  onInputChange = e => {
    const { taskForEdit } = this.state
    this.setState({
      taskForEdit: Object.assign(taskForEdit, {
        task: e.target.value
      })
    })
  }

  handleSubmit = (e) => {
    const { taskForEdit } = this.state
    const { handleEditTask } = this.props
    e.preventDefault();
    handleEditTask(taskForEdit);
    this.handleCloseClick();
  }

  handleCloseClick = () => {
    const { closeTaskForEdit } = this.props
    closeTaskForEdit();
  }

  render () {
    const { taskForEdit } = this.state

    return (
      <div className="editTask">
        <form className="editTask__form" onSubmit={this.handleSubmit}>
          <input
            onChange={this.onInputChange}
            value={taskForEdit.task}
            type="text"
            className="editTask__value"
            placeholder="Edit your task or close"
            autoFocus
            required />
          <button type="submit" className="editTask__edit">Edit Task</button>
        </form>
        <div className="editTask__close" onClick={this.handleCloseClick}><i className="fa fa-times fa-4x" aria-hidden="true"></i></div>
      </div>
    );
  }
}

export default EditTask;
