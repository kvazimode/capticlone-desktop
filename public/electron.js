const path = require ('path')
const fs = require('fs-extra')
const os = require('os')
const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const ziper = require('adm-zip')
const isDev = require('electron-is-dev')

const projectsFolder = path.resolve(os.homedir(), 'capticlone-projects')
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
        properties: ['openFile']
    })
    const parsedPath = path.parse(filePath[0])
    const folderToExtract = `${parsedPath.dir}/${parsedPath.name}`
    if (filePath) {
        const projectZip = new ziper(filePath[0])
        fs.ensureDirSync(folderToExtract)
        projectZip.extractAllTo(folderToExtract, true)
        const file = fs.readFileSync(`${folderToExtract}/proj.json`, "utf-8")
        const bgContents = fs.readdirSync(`${folderToExtract}/bg`)
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
        return [file, bgs, images, folderToExtract]
    }
    return undefined
})

ipcMain.handle('file-save', (e, data, name) => {
    let saveFolder = path.resolve(projectsFolder, name)
    fs.ensureDirSync(saveFolder)
    const filePath = dialog.showSaveDialogSync({
        defaultPath: path.resolve(saveFolder, `${name}.json`),
        filters: {
            name: 'project',
            extensions: ['.json']
        }
    })
    if (filePath) {
        fs.writeFileSync(filePath, data, "utf-8")
        return true
    }
    return false
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
