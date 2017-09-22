import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskDone: false
    }
  }

  handleDeleteClick(e) {
    e.stopPropagation();
    this.props.onDelete(this.props.index);
  }

  handleEditClick(e) {
    e.stopPropagation();
    this.props.onEdit(this.props.index);
  }

  handleDoneClick() {
    this.setState({
      taskDone: !this.state.taskDone
    })
  }

 render() {
   let doneClass = null;
   let doneIcon = <i className="fa fa-square-o" aria-hidden="true"></i>;
   let doneItem = null;

   if (this.state.taskDone) {
     doneClass = 'tasks__task--done'
     doneIcon = <i className="fa fa-check-square-o" aria-hidden="true"></i>;
     doneItem = 'tasks__item--done'
   }

   return (
    <div className={`tasks__task ${doneClass}`} onClick={() => this.handleDoneClick()}>
      <div className="tasks__indicator">{doneIcon}</div>
      <span className={`tasks__item ${doneItem}`}>{this.props.item}</span>
      <div className="tasks__options">
        <div className="tasks__edit" onClick={(e) => this.handleEditClick(e)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></div>
        <div className="tasks__delete" onClick={(e) => this.handleDeleteClick(e)}><i className="fa fa-trash-o" aria-hidden="true"></i></div>
      </div>
    </div>
   );
 }
}

export default Task;
