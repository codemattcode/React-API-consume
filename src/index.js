import React from 'react';
import ReactDOM from 'react-dom';
import App from './Comps/App';
import './index.css';

// if you dont want to use App.js as Components wrapper
// remove 'import App from ....' above
// add all Component imports

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
