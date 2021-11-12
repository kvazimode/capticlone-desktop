import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import SelectProject from './app/select-project.jsx';
import state from './data/loaded-state.js';
import proj from './data/proj.js';
import preloadBg from './util/preload-bg.js';
let ipcRenderer = undefined
ipcRenderer = window.require('electron').ipcRenderer;

const loadFile = async () => {
  const data = await ipcRenderer.invoke('file-select')
  editorDataSelect(data)
}

const closeFile = () => {
  editorDataSelect(null)
}

const renderEditor = (data, bgList) => {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  ReactDOM.render(
    <App 
      state={state}
      proj={data}
      bgList={bgList}
      loadFile={loadFile}
      closeFile={closeFile}/>,
    document.getElementById('root')
  )
}

const editorDataSelect = (data) => {
  if (data) {
    const project = JSON.parse(data)
    preloadBg(proj).then(bgList => renderEditor(project, bgList))
  } else {
    preloadBg(proj).then(bgList => renderEditor(proj, bgList))
  }
}

editorDataSelect(null)
