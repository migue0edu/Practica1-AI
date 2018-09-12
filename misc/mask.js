if(layer1.getContext){
    let ctx = layer1.getContext('2d');
    ctx.fillStyle = "rgba(170, 170, 170, 0.85)";
    ctx.fillRect(0, 0, layer1.width, layer1.height);
    ctx.fillStyle = "rgba(33, 33, 33, 0)";
    let posIy = Number.parseInt(INIT.y);
    let posIx = Number.parseInt(INIT.x);

    ctx.clearRect(posIy*TILELONG, posIx*TILEALT, TILELONG, TILEALT);
    ctx.clearRect((posIy - 1)*TILELONG, posIx*TILEALT, TILELONG, TILEALT);
    ctx.clearRect((posIy + 1)*TILELONG, posIx*TILEALT, TILELONG, TILEALT);
    ctx.clearRect(posIy*TILELONG, (posIx+1)*TILEALT, TILELONG, TILEALT);
    ctx.clearRect(posIy*TILELONG, (posIx-1)*TILEALT, TILELONG, TILEALT);
}