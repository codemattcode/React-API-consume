import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import Func from './Func';
import Search from './Search';
class App extends Component {

  render() {
    return (
      <div className="app-wrapper">

        <div>
              <Search />
        </div>

        <div>
            <code>
              <Todo />
            </code>
        </div>

        <div>
            <code>
              <Func />
            </code>
        </div>



      </div>
    )
  }
}



export default App;
