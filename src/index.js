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
let uploadBG = () => {}

// if electron, reassign file functions
if (ipcRenderer) {
  loadFile = async () => {
    const [data, bgs, images, projectPath] = await ipcRenderer.invoke('file-select')
    data ? editorDataSelect(data, bgs, images, projectPath) : ipcRenderer.sendSync('message-open-fail')
  }
  
  saveFile = async (data) => {
    const name = data.name
    const toSave = JSON.stringify(data)
    const success = await ipcRenderer.invoke('file-save', toSave, name)
    success ? ipcRenderer.sendSync('message-saved') : ipcRenderer.sendSync('message-save-fail')
  }
}
  
// demo mode
closeFile = () => {
  editorDataSelect(null)
}

blankFile = () => {
  editorDataSelect(JSON.stringify(blankProj))
}

const renderEditor = (data, bgList, images, bgs) => {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  ReactDOM.render(
    <App 
      images={images}
      backgrounds={bgs}
      proj={data}
      bgList={bgList}
      loadFile={loadFile}
      closeFile={closeFile}
      saveFile={saveFile}
      blankFile={blankFile}
      uploadBG={uploadBG}/>,
    document.getElementById('root')
  )
}

const editorDataSelect = (data, bgs, images, projectPath) => {
  let project = {}
  if (typeof data == 'string') {
    project = JSON.parse(data)
    preloadBg(project, `file://${projectPath}/bg`).then(bgList => renderEditor(project, bgList, images, bgs))
  } else {
    project = Object.assign({}, proj)
    const images = state.library.imgList
    const bgs = state.library.bgList
    preloadBg(project, `./img`).then(bgList => renderEditor(project, bgList, images, bgs))
  }
}

editorDataSelect(null)
