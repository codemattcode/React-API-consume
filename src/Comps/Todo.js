import _ from 'lodash';
import React, { Component } from 'react';
// import './Todo.css';

class Todo extends Component {
 placeInside(){
   return <i>this is itallic</i>;
 }

  render() {
    return (
      <div className="app-wrapper">

              <p>{this.placeInside()}</p>


      </div>
    );
  }
}



export default Todo;
