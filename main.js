const {app, BrowserWindow} = require('electron');
const {TILES, TILEALT, TILELONG, COLORES, MAZE} = require('./misc/tiles');
const {leerArchivo} = require('./misc/mapa');

let file = 'mapa.txt';
global.mapa = leerArchivo(file);
global.colores = COLORES;
global.tilealt = TILEALT;
global.tilelong = TILELONG;
global.maze = MAZE;
global.tipo = 'terrainmap';
global.initialPos = {x: 0, y:0};
global.endPos = {x:0, y:0};
global.being = {name: ''};


let win;

function createWindow () {
    win = new BrowserWindow({width: 900, height: 425, resizable: false, show: false});
    win.loadFile('terrainmap.html');
    let child = new BrowserWindow({width: 450, height: 221, parent: win, modal: true, show: false});
    let child2 = new BrowserWindow({width: 450, height: 221, parent: win, modal: true, show: false});
    child.loadFile('dialogs/posInicial.html');
    child.setAutoHideMenuBar(true);
    child.setMenuBarVisibility(false);

    win.once('ready-to-show', () => {
        win.show();
    });
    child.once('ready-to-show', () => {
        child.show();
    });
    child.on('closed', () => {
        if(global.tipo === 'terrainmap'){
            child2.loadFile('dialogs/seleccionarSer.html');
            child2.show();
        }
        else{
            win.reload();
        }
        console.log(`Start: [ x: ${global.initialPos.y}, y: ${global.initialPos.x} ]`);
        console.log(`End: [ x: ${global.endPos.y}, y: ${global.endPos.x} ]`);
    });
    child2.on('closed', ()=> {
        win.reload();
        console.log(`Player ${global.being.name}`);
    });

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



