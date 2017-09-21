import React from 'react';
import './assets/styles/css/main.css';

import Nav from './components/Nav';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Footer from './components/Footer';

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
      ]
    }
  }

  handleDelete(index) {
    let newTasks = this.state.tasks;
    newTasks.splice(index, 1);
    this.setState({
      tasks: newTasks
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
    return (
      <div className="app">
        <Nav/>
        <AddTask onAddTask={(ref, id) => this.handleAddTask(ref, id)}/>
        <Tasks tasks={this.state.tasks} onDelete={(index) => this.handleDelete(index)}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
