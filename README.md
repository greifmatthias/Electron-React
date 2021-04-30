# Electron-React-Typescript

This is a base for using React (with TypeScript) inside an Electron application.

- Features a hot-reload React/Electron environment for lightspeed development
- Uses `Electron-builder` to generate distributable installers
- Different scripts included for easy development
- Typescript support
- Versioned releases in own output folder

## Good to know

- Electron entrypoint is located at public/electron.js
- Dist folder includes assets for installers and branding
- Includes SASS (if not needed, just remove the dependency in package.json)

## Scripts

- For development is the `npm run dev` recommended, this mode will spin a live environment for React and enables this in an Electron environment. This way it is possible to develop using the Electron APIs with hot-reloading.

- When building just a React application without using any Electron specific APIs, you can simply use the `npm run start`

- Build as a React application with `npm run react:build`. Quick note: This is just a React app like you would code a React-Webapplication. Electron APIs used will fail in this environment.

- `build:mac|linux|windows`-scripts will take a production build from this build-folder and create a Electron distributable files.

- `dist:mac|linux|windows`-scripts will build a fresh React from source and create Electron distributable files for these platforms. `npm run dist` will create for every platform if possible.
