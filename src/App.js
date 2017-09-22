import React from 'react';
import './assets/styles/css/main.css';

import Nav from './components/Nav';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import EditTask from './components/EditTask';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        {
          task: 'Just type something',
          id: 12345
        },
        {
          task: 'And click "Add Task"',
          id: 23456
        },
      ],
      editTask: false,
      editedTask: null
    }
  }

  handleDelete(index) {
    let newTasks = this.state.tasks;
    newTasks.splice(index, 1);
    this.setState({
      tasks: newTasks
    })
  }

  handleEditStart(index) {
    this.setState({
      editTask: !this.state.editTask,
      editedTask: index
    })
  }

  handleEdit(ref) {
    let index = this.state.editedTask;
    let newTasks = this.state.tasks;

    newTasks[index].task = ref;

    this.setState({
      tasks: newTasks
    })
  }

  handleClose() {
    this.setState({
      editTask: false
    })
  }

  handleAddTask(ref, id) {
    let newTasks = this.state.tasks;
    if(ref) {
      newTasks.unshift({task: ref, id: id});
    }
    this.setState({
      tasks: newTasks
    })
  }

  render() {
    let EditMyTask = null;

    if (this.state.editTask === true) {
      EditMyTask = <EditTask onCloseClick={() => this.handleClose()} onEditTask={(ref) => this.handleEdit(ref)}/>
    }

    return (
      <div className="app">
        {EditMyTask}
        <Nav/>
        <AddTask onAddTask={(ref, id) => this.handleAddTask(ref, id)}/>
        <Tasks tasks={this.state.tasks} onDelete={(index) => this.handleDelete(index)} onEdit={(index) => this.handleEditStart(index)}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
