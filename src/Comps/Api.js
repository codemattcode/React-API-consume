import React from 'react';
import axios from 'axios';

// inline component
// ******************************
let Teacup = function(props) {
  return (
    <div>
      <div>{props.badu}</div>
    </div>
  )
}

let Api = React.createClass({

getInitialState: function() {
  return {
    lemons: []
  }
},

componentDidMount: function() {

    axios.get('http://swapi.co/api/people').then(monkey => {
      this.setState({
        lemons: monkey.data.results
      })
    })
},

  render: function () {
    console.log(this.state.lemons);
    return (
       <div className="app-wrapper">

          <div>
            {/* <Teacup badu="Fred" /> */}

              {this.state.lemons.map(lime => {
                return (
                  <Teacup badu={lime.name} key={lime.name} />
                )
              })}

          </div>

       </div>
     );
    }

 })

export default Api;
