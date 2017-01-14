import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

const todos = [
  {
    task: 'make list',
    isComplete: false
  },
  {
    task: 'buy shoes',
    isComplete: true
  }
];


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div className="app-wrapper">

        <div>
            <code>start here</code>
        </div>

        <div>
            <code><Todo todos={this.state.todos}/></code>
        </div>

      </div>
    )
  }
}



export default App;
