import React from 'react';

import Task from './Task';

class Tasks extends React.Component {
  handleDelete(index) {
    this.props.onDelete(index);
  }

  render() {
    let tasks = this.props.tasks;
    tasks = tasks.map((item, index) => {
      return <Task item={item.task} index={index} key={item[index] + "__" + item.id} onDelete={(index) => this.handleDelete(index)}/>
    });

    return (
      <div className="tasks">
        {tasks}
      </div>
    );
  }
}

export default Tasks;
