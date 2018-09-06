const {app, BrowserWindow} = require('electron');
const {TILES, TILEALT, TILELONG, COLORES, MAZE} = require('./misc/tiles');
const {leerArchivo} = require('./misc/mapa');
let file = 'maze.txt';
global.mapa = leerArchivo(file);
global.colores = COLORES;
global.tilealt = TILEALT;
global.tilelong = TILELONG;
global.maze = MAZE;


let win;

function createWindow () {
    win = new BrowserWindow({width: 900, height: 425, resizable: false});
    if(file === 'mapa.txt');
        win.loadFile('terrainmap.html');
    if(file === 'maze.txt');
        win.loadFile('maze.html');

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});



