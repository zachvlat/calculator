const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 365,
    height: 460,
    webPreferences: {
      nodeIntegration: true,
    },
	resizable: false, // Set resizable option to false
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
