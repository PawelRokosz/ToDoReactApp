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
      tasks: ['Just type something', 'And click "Add Task"'],
      id: [12345, 23456]
    }
  }

  handleDelete(index) {
    let newTasks = this.state.tasks;
    let newIds = this.state.id;
    newTasks.splice(index, 1);
    newIds.splice(index, 1);

    this.setState({
      tasks: newTasks,
      id: newIds
    })
  }

  handleAddTask(ref, id) {
    let newTasks = this.state.tasks;
    let newIds = this.state.id;
    if(ref) {
      newTasks.unshift(ref);
      newIds.unshift(id);
    }
    this.setState({
      tasks: newTasks,
      id: newIds
    })
  }

  render() {
    return (
      <div className="app">
        <Nav/>
        <AddTask onAddTask={(ref, id) => this.handleAddTask(ref, id)}/>
        <Tasks tasks={this.state.tasks} ids={this.state.id} onDelete={(index) => this.handleDelete(index)}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
