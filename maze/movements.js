let {human, monkey, octopus, sasquatch} = require('./terrainmap/beings');

let posX = Number.parseInt(INIT.y);
let posY = Number.parseInt(INIT.x);

function keyUpHandler(event) {
    if(event.keyCode === 39) {
        console.log('Right');
        actualizarPosicion('R');
    }
    else if(event.keyCode === 37) {
        console.log('Left');
        actualizarPosicion('L');
    }
    if(event.keyCode === 40) {
        console.log('Down');
        actualizarPosicion('D');
    }
    else if(event.keyCode === 38) {
        console.log('Up');
        actualizarPosicion('U');
    }
}

function actualizarJugador(x, y){
    let ctx2 = layer2.getContext('2d');
    ctx2.drawImage(image, (x)*TILELONG, (y)*TILEALT, TILELONG, TILEALT);
}

function quitarNiebla(x, y){
    let ctxl = layer1.getContext('2d');
    ctxl.clearRect(x*TILELONG, y*TILEALT, TILELONG, TILEALT);
    ctxl.clearRect((x+1)*TILELONG, y*TILEALT, TILELONG, TILEALT);
    ctxl.clearRect((x-1)*TILELONG, y*TILEALT, TILELONG, TILEALT);
    ctxl.clearRect(x*TILELONG, (y+1)*TILEALT, TILELONG, TILEALT);
    ctxl.clearRect(x*TILELONG, (y-1)*TILEALT, TILELONG, TILEALT);
}

function actualizarPosicion(dir){
    let ctx2 = layer2.getContext('2d');
    ctx2.clearRect(posX*TILELONG, (posY)*TILEALT, TILELONG, TILEALT);
    switch (dir){
        case 'R':
            if( (posX === mapa[0].length - 1) || (mapa[posY][posX + 1] === '0') ){
                posX = posX;
            }else{
                posX += 1;
                actualizarDatos(posX, posY, posX-1, posY);
            }
            break;

        case 'L':
            if( (posX === 0) || (mapa[posY][posX - 1] === '0') ){
                posX = posX;
            }else{
                posX -= 1;
                actualizarDatos(posX, posY, posX+1, posY);
            }

            break;

        case 'D':
            if( (posY === mapa.length - 1) || (mapa[posY + 1][posX] === '0') ){
                posY = posY;
            }else{
                posY += 1;
                actualizarDatos(posX, posY, posX, posY-1);
            }
            break;

        case 'U':
            if( (posY === 0) || (mapa[posY - 1][posX] === '0') ){
                posY = posY;
            }else{
                posY -= 1;
                actualizarDatos(posX, posY, posX, posY+1);
            }
            break;
    }
    esDescicion(posX, posY);
    quitarNiebla(posX, posY);
    actualizarJugador(posX, posY);
}

document.addEventListener('keyup', keyUpHandler, false);