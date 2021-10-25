import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import state from './data/loaded-state.js';
import proj from './data/proj.js';
import preloadBg from './util/preload-bg.js';

preloadBg(proj).then(bgList => {
  ReactDOM.render(
    <App state={state} proj={proj} bgList={bgList}/>,
    document.getElementById('root')
  )
})
