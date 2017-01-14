import _ from 'lodash';
import React, { Component } from 'react';
// import './Todo.css';

class Todo extends Component {
 renderItems(){
   return 'hello';
 }
 
  render() {
    return (
      <div className="app-wrapper">

              <p>{this.renderItems()}</p>


      </div>
    );
  }
}



export default Todo;
