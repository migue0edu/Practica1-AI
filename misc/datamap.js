let datamap = new Array(mapa.length);

for (let i = 0; i < mapa.length; i++) {
    datamap[i] = new Array(mapa[0].length);
}

for (let i = 0; i < datamap.length; i++) {
    for (let j = 0; j < datamap[0].length; j++) {
        datamap[i][j] = '';
    }
}
datamap[INIT.x][INIT.y] = 'I';

console.log(datamap);