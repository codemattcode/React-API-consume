import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import Func from './Func';

class App extends Component {

  render() {
    return (
      <div className="app-wrapper">

        {/* <div>
            <code>start here</code>
        </div> */}

        <div>
            <h4>get this</h4>
            <code>
              <Todo />
            </code>
            <div>
              <Func />
            </div>
        </div>

      </div>
    )
  }
}



export default App;
