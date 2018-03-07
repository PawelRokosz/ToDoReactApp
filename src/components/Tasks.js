import React from 'react';

import Task from './Task';

const Tasks = ({ tasks, handleDeleteTask, handleCompleteTask, startTaskForEdit }) => {

  return (
    <div className="tasks">
      {
        tasks.map((item, index) => {
          return <Task
                    item={item}
                    index={index}
                    key={item[index] + "__" + item.id}
                    handleDeleteTask={handleDeleteTask}
                    handleCompleteTask={handleCompleteTask}
                    startTaskForEdit={startTaskForEdit} />
        })
      }
    </div>
  );
}

export default Tasks;
