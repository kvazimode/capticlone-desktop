import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import state from './data/loaded-state.js';
import proj from './data/proj.js';
import preloadBg from './util/preload-bg.js';

let ipcRenderer = undefined

// comment next line for browser development
ipcRenderer = window.require('electron').ipcRenderer;

let loadFile = () => {}
let saveFile = () => {}
let closeFile = () => {}

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
  
  closeFile = () => {
    editorDataSelect(null)
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
      saveFile={saveFile}/>,
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
