const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');



const isMac = process.platform === 'darwin';
let isQuiting;



class Application {


    window;


    constructor() { }



    init = () => {

        // Create window
        this.window = new BrowserWindow({
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

        this.window.loadURL(_URL);


        // Subscribe when window is closing
        this.window.on('close', (event) => {
            if (isMac && !isQuiting) {
                event.preventDefault();
                this.window.minimize();

                return false;
            }
        });
    };
}



// Check if app quit is requested
app.on('before-quit', () => isQuiting = true);



// Init Application
const application = new Application();


// Startup when Electron is initialised
app.whenReady().then(application.init);