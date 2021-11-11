const path = require ('path')
const fs = require('fs')
const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const isDev = require('electron-is-dev')


function createWindow () {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );
    win.maximize()
    
}
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

ipcMain.handle('file-select', () => {
    const filePath = dialog.showOpenDialogSync({
        properties: ['openFile']
    })
    const file = fs.readFileSync(filePath[0], "utf-8")
    return file
})

