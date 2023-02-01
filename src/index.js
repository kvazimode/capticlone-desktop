import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import state from './data/loaded-state.js';
import proj from './data/proj.js';
import preloadBg from './util/preload-bg.js';
import blankProj from './data/blank.js';

let ipcRenderer = undefined
let loadedProjectPath = undefined
let loadedProject = undefined
let loadedImages = undefined

// comment next line for browser development
ipcRenderer = window.require('electron').ipcRenderer;

let loadFile = () => {}
let saveFileDialog = () => {}
let saveFile = () => {}
let closeFile = () => {}
let blankFile = () => {}
let uploadBG = () => {}

// if electron, reassign file functions
if (ipcRenderer) {
  loadFile = async () => {
    const [data, bgs, images, projectPath] = await ipcRenderer.invoke('file-select')
    loadedProjectPath = projectPath
    loadedProject = data
    loadedImages = images
    data ? editorDataSelect(data, bgs, images, projectPath) : ipcRenderer.sendSync('message-open-fail')
  }
  
  saveFileDialog = async (data) => {
    const name = data.name
    const toSave = JSON.stringify(data)
    const success = await ipcRenderer.invoke('file-save-dialog', toSave, name)
    success ? ipcRenderer.sendSync('message-saved') : ipcRenderer.sendSync('message-save-fail')
  }

  saveFile = async (data) => {
    const name = data.name
    const toSave = JSON.stringify(data)
    await ipcRenderer.invoke('file-save', toSave, name)
    loadedProject = toSave
  }

  uploadBG = async () => {
    const bgs = await ipcRenderer.invoke('bg-upload')
    editorDataSelect(loadedProject, bgs, loadedImages, loadedProjectPath)
  }

  blankFile = async (projectName) => {
    const newProject = {...blankProj, resolution: {...blankProj.resolution}, name: projectName}
    const [savedProject, projectPath] = await ipcRenderer.invoke('file-create-project', JSON.stringify(newProject), projectName)
    editorDataSelect(savedProject)
    loadedProject = savedProject
    loadedProjectPath = projectPath
  }
}
  
// demo mode
closeFile = () => {
  editorDataSelect(null)
}

const renderEditor = (data, bgImages, images, bgs) => {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  ReactDOM.render(
    <App 
      images={images}
      backgrounds={bgs}
      proj={data}
      bgImages={bgImages}
      loadFile={loadFile}
      closeFile={closeFile}
      saveFileDialog={saveFileDialog}
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
    preloadBg(bgs, `file://${projectPath}/bg`).then(bgImages => renderEditor(project, bgImages, images, bgs))
  } else {
    project = Object.assign({}, proj)
    const images = state.library.imgList
    const bgs = state.library.bgList
    preloadBg(bgs, `./img`).then(bgImages => renderEditor(project, bgImages, images, bgs))
  }
}

editorDataSelect(null)
