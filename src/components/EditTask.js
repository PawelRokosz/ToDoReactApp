import React from 'react';

class EditTask extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      taskForEdit: this.props.taskForEdit
    }
  }

  onInputChange = e => {
    this.setState({
      taskForEdit: Object.assign(this.state.taskForEdit, {
        task: e.target.value
      })
    })
  }

  handleSubmit = (e) => {

    const { taskForEdit } = this.state
    e.preventDefault();
    this.props.handleEditTask(taskForEdit);
    this.handleCloseClick();
  }

  handleCloseClick = () => {
    this.props.closeTaskForEdit();
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
