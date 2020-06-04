const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');



const isMac = process.platform === 'darwin';
let isQuiting;
let application;



const init = () => {


    // Create window
    application = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: '#FFFFFF'
    });


    // Loadup app
    const _URL = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });
    application.loadURL(_URL);


    // Subscribe when window is closing
    application.on('close', (event) => {
        if (isMac && !isQuiting) {
            event.preventDefault();
            application.minimize();

            return false;
        }
    });
};



// Check if app request to quit
app.on('before-quit', function () {
    isQuiting = true;
});



// Startup when Electron is initialised
app.whenReady().then(init);