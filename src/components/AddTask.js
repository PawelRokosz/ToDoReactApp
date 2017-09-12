import React from 'react';

class AddTask extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    const input = this.textInput;
    let id = Math.floor(Math.random()*90000000) + 10000000;
    this.props.onAddTask(input.value, id);
    input.value = '';
    input.focus();

  }

  render() {
    return (
      <form className="newTask" onSubmit={(e) => this.handleSubmit(e)}>
        <input ref={(input) => {this.textInput = input}} type="text" className="newTask__value" autoFocus/>
        <button type="submit" className="newTask__add">Add Task</button>
      </form>
    );
  }
}

export default AddTask;
