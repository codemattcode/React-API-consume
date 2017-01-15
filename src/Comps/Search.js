import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }


    break;

 render () {
   return <input onChange={ e => console.log(e.target.value) } />;
 }
}




export default Search;
