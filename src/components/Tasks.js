import React from 'react';

import Task from './Task';

const Tasks = ({ tasks, handleDeleteTask, handleCompleteTask, startTaskForEdit, startTaskForDrag, overTaskDrag, taskDrop }) => {

  return (
    <div className="tasks">
      {
        tasks.map((item, index) => {
          return <Task
                    item={item}
                    index={index}
                    key={item.id}
                    handleDeleteTask={handleDeleteTask}
                    handleCompleteTask={handleCompleteTask}
                    startTaskForEdit={startTaskForEdit}
                    startTaskForDrag={startTaskForDrag}
                    overTaskDrag={overTaskDrag}
                    taskDrop={taskDrop}
                  />
        })
      }
    </div>
  );
}

export default Tasks;
