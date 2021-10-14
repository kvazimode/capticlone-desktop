const { app, BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
        // maximizable:  true,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL(`http://localhost:8081`);
    win.maximize()

}
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
