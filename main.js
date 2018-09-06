const {app, BrowserWindow} = require('electron');
const {TILES, TILEALT, TILELONG, COLORES} = require('./tiles');
const {leerArchivo} = require('./mapa');

global.mapa = leerArchivo();
global.colores = COLORES;
global.tilealt = TILEALT;
global.tilelong = TILELONG;
global.mapinit = {x: 0, y: 0};


let win;

function createWindow () {
    win = new BrowserWindow({width: 900, height: 425, resizable: false});

    win.loadFile('index.html');
    //win.loadURL('https://miguel-nodeapp.herokuapp.com');

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



