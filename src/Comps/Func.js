import React, { Component } from 'react';

class Func extends Component {

 renderFunc() {
   return <b>Hello I am Func</b>;
 }



render() {
  return (
    <div className="app-wrapper">

            <p>{this.renderFunc()}</p>


    </div>
    )
  }
}


export default Func;
