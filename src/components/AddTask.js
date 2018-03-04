import React from 'react';

const AddTask = ({ handleAddTask }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = this.textInput;
    handleAddTask(input.value);
    input.value = '';
    input.focus();
  }

  return (
    <form className="newTask" onSubmit={handleSubmit}>
      <input type="text" className="newTask__value" ref={(input) => {this.textInput = input}} autoFocus required />
      <button type="submit" className="newTask__add">Add Task</button>
    </form>
  );
}

export default AddTask;
