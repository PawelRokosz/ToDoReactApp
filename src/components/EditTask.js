import React from 'react';

class EditTask extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    const input = this.textInput;
    this.props.onEditTask(input.value);
    input.value = '';
    this.handleCloseClick();
  }

  handleCloseClick() {
    this.props.onCloseClick();
  }

  render() {
    return (
      <div className="editTask">
        <form className="editTask__form" onSubmit={(e) => this.handleSubmit(e)}>
          <input ref={(input) => {this.textInput = input}} type="text" className="editTask__value" placeholder="Edit your task or close" autoFocus/>
          <button type="submit" className="editTask__edit">Edit Task</button>
        </form>
        <div className="editTask__close" onClick={() => this.handleCloseClick()}><i className="fa fa-times fa-4x" aria-hidden="true"></i></div>
      </div>
    );
  }
}

export default EditTask;
