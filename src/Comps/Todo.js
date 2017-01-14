import React, { Component } from 'react';
// import './Todo.css';


class App extends Component {
  render() {
    console.log(this.props.todos)

    return (
      <div className="app-wrapper">

        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>

      </div>
    );
  }
}



export default App;
