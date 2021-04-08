import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import state from './data/loaded-state.js';
import proj from './data/proj.js'

ReactDOM.render(
  <App state={state} proj={proj}/>,
  document.getElementById('root')
)
