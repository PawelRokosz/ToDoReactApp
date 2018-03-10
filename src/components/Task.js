import React from 'react';

const Task = ({ item, index, handleDeleteTask, handleCompleteTask, startTaskForEdit, startTaskForDrag, overTaskDrag, taskDrop }) => {

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    handleDeleteTask(item.id)
  }

  const handleStartTaskForEdit = (e) => {
    e.stopPropagation();
    startTaskForEdit(item)
  }

  const handleCompleteClick = () => {
    handleCompleteTask(item.id)
  }

  const handleDragStart = () => {
    startTaskForDrag(item, index)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    overTaskDrag(index)
  }

  const handleDrop = () => {
    taskDrop()
  }

  let doneClass = null;
  let doneIcon = <i className="fa fa-square-o" aria-hidden="true"></i>;
  let doneItem = null;

  if (item.completed) {
   doneClass = 'tasks__task--done'
   doneIcon = <i className="fa fa-check-square-o" aria-hidden="true"></i>;
   doneItem = 'tasks__item--done'
  }

  return (
    <div className={`tasks__task ${doneClass}`} onClick={handleCompleteClick} onDrop={handleDrop} onDragStart={handleDragStart} onDragOver={handleDragOver} draggable>
      <div className="tasks__info">
        <div className="tasks__indicator">{doneIcon}</div>
        <span className={`tasks__item ${doneItem}`}>{item.task}</span>
      </div>
      <div className="tasks__options">
        <div className="tasks__edit" onClick={handleStartTaskForEdit}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></div>
        <div className="tasks__delete" onClick={handleDeleteClick}><i className="fa fa-trash-o" aria-hidden="true"></i></div>
      </div>
    </div>
  );
}

export default Task;
