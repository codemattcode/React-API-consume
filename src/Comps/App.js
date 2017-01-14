import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

// const todos = [
//   {
//     task: 'make list',
//     isComplete: false
//   },
//     task: 'buy shoes',
//     isComplete: true
// ];


class App extends Component {
  render() {
    return (
      <div className="app-wrapper">

        <div>
            <code>start here</code>
        </div>

        <div>
            <code><Todo /></code>
        </div>

      </div>
    )
  }
}



export default App;
