import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import SelectProject from './app/select-project.jsx';
import state from './data/loaded-state.js';
import proj from './data/proj.js';
import preloadBg from './util/preload-bg.js';


const renderEditor = (data, bgList) => {
  ReactDOM.render(
    <App state={state} proj={data} bgList={bgList}/>,
    document.getElementById('root')
  )
}

const editorDataSelect = (data) => {
  data ? renderEditor(data, null) : preloadBg(proj).then(bgList => renderEditor(proj, bgList))
}

ReactDOM.render(
  <SelectProject editorDataSelect={editorDataSelect}/>,
  document.getElementById('root')
)
