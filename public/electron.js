const { app, BrowserWindow } = require("electron");
const path = require("path");

const isMac = process.platform === "darwin";
let isQuiting;

let window;

const init = () => {
  const gotTheLock = app.requestSingleInstanceLock();

  if (!gotTheLock) app.quit();

  // Create window
  window = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "#FFFFFF",
  });

  // Loadup app
  const dir = path.join(__dirname, "../build/index.html");
  const _URL = process.env.ELECTRON_START_URL || `file://${dir}`;

  window.loadURL(_URL);

  // Subscribe when window is closing
  window.on("close", (event) => {
    if (isMac && !isQuiting) {
      event.preventDefault();
      window.minimize();

      return false;
    }
  });
};

// Check if app quit is requested
app.on("before-quit", () => (isQuiting = true));

// Trying to launch second instance; refocus
app.on("second-instance", (event, commandLine, workingDirectory) => {
  if (window) {
    if (window.isMinimized()) window.restore();
    window.focus();
  }
});

// Startup when Electron is initialised
app.whenReady().then(init);
