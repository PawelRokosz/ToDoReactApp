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

  startTaskForEdit = (item) => {
    const currentTask = this.props.tasks.find(task => {
      return task.id === item.id
    })

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
    let { taskForEdit } = this.state;
    let { tasks, actions } = this.props;
    let { handleEditTask, handleDeleteTask, handleCompleteTask, handleAddTask } = actions;

    return (
      <div className="app">
        {
          taskForEdit && <EditTask
                            taskForEdit={taskForEdit}
                            closeTaskForEdit={this.closeTaskForEdit}
                            handleEditTask={handleEditTask} />
        }
        <Nav/>
        <AddTask handleAddTask={handleAddTask} />
        <Tasks
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleCompleteTask={handleCompleteTask}
          startTaskForEdit={this.startTaskForEdit} />
        <Footer/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
