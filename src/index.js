import React from 'react';
import ReactDOM from 'react-dom';
import App from './Comps/App';
import './index.css';

// if you dont want to use App.js as Components wrapper
// Remove 'import App from ....' above
// Add all Component imports

// Below: 'const App' component is a functional component because it doesnt have any concept of 'State', unlike a 'Class' based Component

// const App = () =>  {
//   return (
//     <div>
//         <tree />
//         <of />
//         <components />
//     </div>
//   );
// }


ReactDOM.render(<App />, document.getElementById('root'));
