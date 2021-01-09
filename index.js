const { app, BrowserWindow } = require('electron')
const path = require('path')

const isDev = !app.isPackaged;

function createWindow () {
  const win = new BrowserWindow({
    resizable: false,
    frame: false,
    width: 1200,
    height:710,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}