const path = require ('path')
const fs = require('fs-extra')
const os = require('os')
const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const ziper = require('adm-zip')
const isDev = require('electron-is-dev')

const projectsFolder = path.resolve(os.homedir(), 'capticlone-projects')
let currentProjectFolder = null
fs.ensureDirSync(projectsFolder)

function createWindow () {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: false // !!! erase on release
        }
    })
    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );
    win.maximize()
       // win.webContents.openDevTools()
}
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

ipcMain.handle('file-select', () => {
    const filePath = dialog.showOpenDialogSync({
        defaultPath: projectsFolder,
        properties: ['openFile'],
        filters: [{
            name: 'project',
            extensions: ['zip']
        }]
    })
    if (!filePath) {
        return
    }

    const parsedPath = path.parse(filePath[0])
    const projectZip = new ziper(filePath[0])
    const folderToExtract = `${parsedPath.dir}/${parsedPath.name}`
    currentProjectFolder = folderToExtract
    fs.ensureDirSync(folderToExtract)
    projectZip.extractAllTo(folderToExtract, true)
    const file = fs.readFileSync(`${folderToExtract}/${parsedPath.name}.json`, "utf-8")
    fs.ensureDirSync(`${folderToExtract}/bg`)
    const bgContents = fs.readdirSync(`${folderToExtract}/bg`)
    fs.ensureDirSync(`${folderToExtract}/img`)
    const imgContents = fs.readdirSync(`${folderToExtract}/img`)
    const bgs = []
    const images = []
    imgContents.forEach(file => {
        if (path.extname(file) == `.png` || path.extname(file) == `.jpg`) {
            images.push(file)
        }
    })
    bgContents.forEach(file => {
        if (path.extname(file) == `.png` || path.extname(file) == `.jpg`) {
            bgs.push(file)
        }
    })
    return {data: file, bgs, images, projectPath: folderToExtract}
})

ipcMain.handle('file-save-dialog', (e, data, name) => {
    let saveFolder = path.resolve(projectsFolder, name)
    fs.ensureDirSync(saveFolder)
    const filePath = dialog.showSaveDialogSync({
        defaultPath: path.resolve(saveFolder, `${name}.json`),
        filters: [{
            name: 'project',
            extensions: ['json']
        }]
    })
    if (filePath) {
        fs.writeFileSync(filePath, data, "utf-8")
        return true
    }
    return false
})

ipcMain.handle('file-project-dialog', (e, data, name) => {
    fs.ensureDirSync(projectsFolder)
    let package = new ziper()
    package.addLocalFolder(path.resolve(projectsFolder, name))
    const filePath = dialog.showSaveDialogSync({
        defaultPath: path.resolve(projectsFolder, `${name}.zip`),
        filters: [{
            name: 'project',
            extensions: ['zip']
        }]
    })
    if (filePath) {
        package.writeZip(filePath)
        // fs.writeFileSync(filePath, data, "utf-8")
        return true
    }
    return false
})

ipcMain.handle('export', (e, data, name) => {
    try {
    let saveFolder = path.resolve(projectsFolder, name, 'export')
    fs.ensureDirSync(saveFolder)
    const bundlePath = path.join(__dirname, '../build/export/bundle.js')
    let bundle = fs.readFileSync(bundlePath, "utf-8")
    let extraBundle = bundle.replace('[/*_bg_*/]', JSON.stringify(data[0]))
    extraBundle = extraBundle.replace('[/*_el_*/]', JSON.stringify(data[1]))
    let projectFolder = path.resolve(projectsFolder, name)
    fs.ensureDirSync(projectFolder)
    fs.writeFileSync(path.resolve(projectFolder, 'export', 'bundle.js'), extraBundle, "utf-8")
    const bgNames = fs.readdirSync(`${currentProjectFolder}/bg`)
    fs.ensureDirSync(`${currentProjectFolder}/export/img`)
    bgNames.forEach(bg => {
        if (path.extname(bg) == `.png` || path.extname(bg) == `.jpg`) {
            fs.copyFileSync(`${currentProjectFolder}/bg/${bg}`, `${currentProjectFolder}/export/img/${bg}`)
        }
    })
    fs.copyFileSync(path.join(__dirname, '../build/export/index.html'), `${currentProjectFolder}/export/index.html`)
    return true
    } catch (err) {
        console.log(err)
        return false
    }
})

ipcMain.handle('file-save', (e, data, name) => {
    let saveFolder = path.resolve(projectsFolder, name)
    fs.ensureDirSync(saveFolder)
    fs.writeFileSync(path.resolve(saveFolder, `${name}.json`), data, "utf-8")
})

ipcMain.handle('file-create-project', (e, project, projectName) => {
    let projectFolder = path.resolve(projectsFolder, projectName)
    fs.ensureDirSync(projectFolder)
    const projectPath = path.resolve(projectFolder, `${projectName}.json`)
    fs.writeFileSync(projectPath, project, "utf-8")
    currentProjectFolder = projectFolder
    return [project, projectFolder]
})

ipcMain.handle('bg-upload', () => {
    const filePath = dialog.showOpenDialogSync({
        defaultPath: os.homedir(),
        properties: ['openFile']
    })
    console.log(filePath)
    if (!filePath) return
    const parsedPath = path.parse(filePath[0])
    const destination = `${currentProjectFolder}/bg/${parsedPath.base}`
    fs.ensureDirSync(`${currentProjectFolder}/bg`)
    fs.copyFileSync(filePath[0], destination)
    const bgs = []
    const bgContents = fs.readdirSync(`${currentProjectFolder}/bg`)
    bgContents.forEach(file => {
        if (path.extname(file) == `.png` || path.extname(file) == `.jpg`) {
            bgs.push(file)
        }
    })
    return bgs
})

ipcMain.on('message-saved', evt => {
    dialog.showMessageBoxSync({
        message: 'СХОРОНИЛ!',
        type: 'info',
        title: 'сохранения процесс'
    })
    evt.returnValue = true
})

ipcMain.on('message-save-fail', evt => {
    dialog.showMessageBoxSync({
        message: 'НЕ СХОРОНИЛ!',
        type: 'error',
        title: 'сохранения процесс'
    })
    evt.returnValue = true
})

ipcMain.on('message-open-fail', evt => {
    dialog.showMessageBoxSync({
        message: 'НЕ ОТКРЫЛ!',
        type: 'error',
        title: 'открытия процесс'
    })
    evt.returnValue = true
})
