const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  // Load the React app
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'build', 'index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

//NEW WINDOW

function createDisplayWindow() {
    displayWindow = new BrowserWindow({
      width: 800,
      height: 600,
      show: false, // Set show option to false
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
        webSecurity: false,
      },
    });
  
    displayWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, 'build', 'index.html'),
          hash: "/display",
          protocol: 'file:',
          slashes: true,
        })
      );
  
    displayWindow.on('closed', () => {
      displayWindow = null;
    });
  
    displayWindow.once('ready-to-show', () => {
      displayWindow.show(); // Show the display window once it is ready
    });
}

//OLD WINDOW

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('openSecondWindow', () => {
    createDisplayWindow();
  });
