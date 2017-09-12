import React from 'react';
import done from '../assets/images/done.png';
import doneActive from '../assets/images/done-active.png';

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

  handleDoneClick() {
    this.setState({
      taskDone: !this.state.taskDone
    })
  }

 render() {
   let doneClass = null;
   let doneImg = null;
   let doneItem = null;

   if (this.state.taskDone) {
     doneClass = 'tasks__task--done'
     doneImg = doneActive;
     doneItem = 'tasks__item--done'
   } else {
     doneImg = done;
   }

   return (
    <div className={`tasks__task ${doneClass}`} onClick={() => this.handleDoneClick()}>
      <div className="tasks__indicator"><img src={doneImg} alt="done indicator img"/></div>
      <span className={`tasks__item ${doneItem}`}>{this.props.item}</span>
      <span className="tasks__delete" onClick={(e) => this.handleDeleteClick(e)}>delete</span>
    </div>
   );
 }
}

export default Task;
