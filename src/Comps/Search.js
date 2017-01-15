import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { monkey: 'i am search' };
  }

 render () {
   return (
      <div>
      {/* input tells state what to do */}
     {/* <input onChange={ e => this.setState({ monkey: e.target.value }) } />
     {this.state.monkey} */}

    {/* controlled Component : state tells input what to do */}
    <input value={this.state.monkey}
      onChange={ e => this.setState({ monkey: e.target.value }) } />

      </div>
    );
 }

}




export default Search;
