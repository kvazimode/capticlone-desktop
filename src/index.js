import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import state from './data/loaded-state.js';
import proj from './data/proj.js';
import preloadBg from './util/preload-bg.js';
import blankProj from './data/blank.js';

let ipcRenderer = undefined

// comment next line for browser development
ipcRenderer = window.require('electron').ipcRenderer;

let loadFile = () => {}
let saveFile = () => {}
let closeFile = () => {}
let blankFile = () => {}

// if electron, reassign file functions
if (ipcRenderer) {
  loadFile = async () => {
    const data = await ipcRenderer.invoke('file-select')
    data ? editorDataSelect(data) : ipcRenderer.sendSync('message-open-fail')
  }
  
  saveFile = async (data) => {
    const name = data.name
    const toSave = JSON.stringify(data)
    const success = await ipcRenderer.invoke('file-save', toSave, name)
    success ? ipcRenderer.sendSync('message-saved') : ipcRenderer.sendSync('message-save-fail')
  }
  
  // demo mode
  closeFile = () => {
    editorDataSelect(null)
  }

  blankFile = () => {
    editorDataSelect(blankProj)
  }
}

const renderEditor = (data, bgList) => {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  ReactDOM.render(
    <App 
      state={state}
      proj={data}
      bgList={bgList}
      loadFile={loadFile}
      closeFile={closeFile}
      saveFile={saveFile}
      blankFile={blankFile}/>,
    document.getElementById('root')
  )
}

const editorDataSelect = (data) => {
  if (typeof data == 'string') {
    const project = JSON.parse(data)
    preloadBg(proj).then(bgList => renderEditor(project, bgList))
  } else if (data != null) {
    preloadBg(proj).then(bgList => renderEditor(data, bgList))
  } else {
    preloadBg(proj).then(bgList => renderEditor(proj, bgList))
  }
}

editorDataSelect(null)
