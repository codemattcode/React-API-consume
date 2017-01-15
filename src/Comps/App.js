import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import Func from './Func';
import Search from './Search';
import Api from './Api';

// Class based Components are used for and are aware of 'State'
class App extends Component {

  render() {
    return (
      <div className="app-wrapper">

        <div>
              <Api />
        </div>
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
