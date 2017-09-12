import React from 'react';

import Task from './Task';

class Tasks extends React.Component {
  handleDelete(index) {
    this.props.onDelete(index);
  }

  render() {

    let tasks = this.props.tasks;
    let ids = this.props.ids;
    tasks = tasks.map((item, index) => {
      return <Task item={item} index={index} key={ids[index]} onDelete={(index) => this.handleDelete(index)}/>
    });

    return (
      <div className="tasks">
        {tasks}
      </div>
    );
  }
}

export default Tasks;
