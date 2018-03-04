import React from 'react';

const EditTask = ({ taskForEdit, handleEditTask, closeTaskForEdit }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = this.textInput;
    handleEditTask(taskForEdit, input.value);
    handleCloseClick();
  }

  const handleCloseClick = () => {
    closeTaskForEdit();
  }

  return (
    <div className="editTask">
      <form className="editTask__form" onSubmit={handleSubmit}>
        <input ref={(input) => {this.textInput = input}} type="text" className="editTask__value" placeholder="Edit your task or close" autoFocus required/>
        <button type="submit" className="editTask__edit">Edit Task</button>
      </form>
      <div className="editTask__close" onClick={handleCloseClick}><i className="fa fa-times fa-4x" aria-hidden="true"></i></div>
    </div>
  );
}

export default EditTask;
