import React, { Component } from 'react';
import './App.css';
import StartPage from './components/StartPage.js';
import DonePage from './components/DonePage.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleStartTask = this.handleStartTask.bind(this);
    this.handleStopTask = this.handleStopTask.bind(this);

    this.state = {task_in_progress: false};
  }

  handleStartTask(task) {
    this.setState({task_in_progress: true, taskName: task});

  }

  handleStopTask() {
    this.setState({task_in_progress: false});
  }

  render() {
    const hasStartedTask = this.state.task_in_progress;

    return (
      <div className="App">
        {
          !hasStartedTask ? 
          (<StartPage onTaskStart={this.handleStartTask} />) 
          : 
          (<DonePage taskName={this.state.taskName} onTaskStop={this.handleStopTask} />)
        }
      </div>
    );
  }
}

export default App;
