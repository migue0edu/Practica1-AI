let {human, monkey, octopus, sasquatch} = require('./terrainmap/beings');

let posX = 0;
let posY = 0;

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let image = document.getElementById("source");
image.src = './icons/face.png';
image.width = TILELONG;
image.height = TILEALT;
ctx.drawImage(image, posX, posY, TILELONG, TILEALT);


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

function pintarCelda(x, y){
    let celda = mapa[y][x];
    switch (celda) {
        case '0':
            ctx.fillStyle = MAZE.WALL;
            break;

        case '1':
            ctx.fillStyle = MAZE.ROAD;
            break;
        default:
            ctx.fillStyle = 'rgb(0, 0, 0)';
    }
    ctx.fillRect((x+1)*TILELONG, (y+1)*TILEALT, TILELONG, TILEALT);
    ctx.strokeRect((x+1)*TILELONG, (y+1)*TILEALT, TILELONG, TILEALT);
}

function actualizarPosicion(dir){
    pintarCelda(posX, posY);
    switch (dir){
        case 'R':
            if( (posX === mapa[0].length - 1) || (mapa[posY][posX + 1] === '0') ){
                posX = posX;
            }else{
                posX += 1;
            }

            break;

        case 'L':
            if( (posX === 0) || (mapa[posY][posX - 1] === '0') ){
                posX = posX;
            }else{
                posX -= 1;
            }
            break;

        case 'D':
            if( (posY === mapa.length - 1) || (mapa[posY + 1][posX] === '0') ){
                posY = posY;
            }else{
                posY += 1;
            }
            break;

        case 'U':
            if( (posY === 0) || (mapa[posY - 1][posX] === '0') ){
                posY = posY;
            }else{
                posY -= 1;
            }
            break;
    }
    ctx.drawImage(image, (posX+1)*TILELONG, (posY+1)*TILEALT, TILELONG, TILEALT);

}

document.addEventListener('keyup', keyUpHandler, false);

