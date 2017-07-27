import React, { Component } from 'react';
import './App.css';
import StartPage from '../StartPage.js';
import DonePage from '../DonePage.js';
import {render} from 'react-dom';

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
          Click count: {this.props.count}
      </div>
    );
  }
}
