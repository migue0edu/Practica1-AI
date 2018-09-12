let {human, monkey, octopus, sasquatch} = require('./terrainmap/beings');

let posX = Number.parseInt(INIT.y);
let posY = Number.parseInt(INIT.x);


let ctx = canvas.getContext("2d");
let image = document.getElementById("source");
image.src = './icons/face.png';
image.width = TILELONG;
image.height = TILEALT;
ctx.drawImage(image, (posX+1)*TILELONG , (posY+1)*TILEALT, TILELONG, TILEALT);


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
            ctx.fillStyle = COLORES.BLACK;
            break;

        case '1':
            ctx.fillStyle = COLORES.BROWN;
            break;

        case '2':
            ctx.fillStyle = COLORES.BLUE;
            break;

        case '3':
            ctx.fillStyle = COLORES.YELLOW;
            break;

        case '4':
            ctx.fillStyle = COLORES.GREEN;
            break;

        case '5':
            ctx.fillStyle = COLORES.VIOLET;
            break;

        case '6':
            ctx.fillStyle = COLORES.WHITE;
            break;
        default:
            ctx.fillStyle = 'rgb(0, 0, 0)';
    }
    ctx.fillRect((x+1)*TILELONG, (y+1)*TILEALT, TILELONG, TILEALT);
    ctx.strokeRect((x+1)*TILELONG, (y+1)*TILEALT, TILELONG, TILEALT);
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
    pintarCelda(posX, posY);
    switch (dir){
        case 'R':
            if( posX === mapa[0].length - 1){
                posX = posX;
            }else{
                posX += 1;
            }

            break;

        case 'L':
            if( posX === 0){
                posX = posX;
            }else{
                posX -= 1;
            }
            break;

        case 'D':
            if( posY === mapa.length - 1){
                posY = posY;
            }else{
                posY += 1;
            }
            break;

        case 'U':
            if( posY === 0){
                posY = posY;
            }else{
                posY -= 1;
            }
            break;
    }
    quitarNiebla(posX, posY);
    ctx.drawImage(image, (posX+1)*TILELONG, (posY+1)*TILEALT, TILELONG, TILEALT);

}

document.addEventListener('keyup', keyUpHandler, false);

