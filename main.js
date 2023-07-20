const { app, BrowserWindow } = require('electron');
const { homedir } = require('os');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 380,
    height: 621,
    webPreferences: {
      nodeIntegration: true,
    },
	resizable: false,
  autoHideMenuBar: true,
  });
  
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true,
    })
  );

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  // Event listener to re-focus on #display whenever the window loses focus
  mainWindow.on('blur', () => {
    mainWindow.webContents.executeJavaScript('document.getElementById("display").focus();');
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});