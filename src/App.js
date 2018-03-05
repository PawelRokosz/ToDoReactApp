import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './actions'

import './assets/styles/css/main.css';

import Nav from './components/Nav';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import EditTask from './components/EditTask';

function mapStateToProps(state) {
  return (state)
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskForEdit: null
    }
  }

  startTaskForEdit = (id) => {
    const { tasks } = this.props;
    //TODO: fetch task and prepare task object for <EditTask />
    const currentTask = tasks.find(task => task.id === id)
    this.setState({
      taskForEdit: Object.assign({}, currentTask)
    })
  }

  closeTaskForEdit = () => {
    this.setState({
      taskForEdit: null
    })
  }

  render() {
    const { taskForEdit } = this.state;
    const { tasks, actions } = this.props;
    const { handleEditTask, handleDeleteTask, handleCompleteTask, handleAddTask } = actions;

// TODO:
// <EditTask task onSubmit onClose />
// <Tasks onDelete onComplete onEditSelect >
    return (
      <div className="app">
        { taskForEdit && <EditTask taskForEdit={taskForEdit} closeTaskForEdit={this.closeTaskForEdit} handleEditTask={handleEditTask}/> }
        <Nav/>
        <AddTask handleAddTask={handleAddTask}/>
        <Tasks tasks={tasks} handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} startTaskForEdit={this.startTaskForEdit}/>
        <Footer/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
