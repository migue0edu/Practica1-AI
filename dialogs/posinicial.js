let mapa = require('electron').remote.getGlobal('mapa');
const TYPE = require('electron').remote.getGlobal('tipo');

let initX = document.getElementById('initX');
let initY = document.getElementById('initY');

let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'];

for (let i = 0; i < mapa[0].length; i++) {
    let option = document.createElement('option');
    option.text = chars[i];
    option.value = i;
    initY.add(option);
}

let instance = M.FormSelect.init(initY, {});

function checarPosicionInicial() {
    if(TYPE === 'maze'){
        if(mapa[initX.value][initY.value] === '0'){
            alert('Ubicacion Invalida');
        }else{
            require('electron').remote.getGlobal('initialPos').x = initX.value;
            require('electron').remote.getGlobal('initialPos').y = initY.value;
            window.close();
        }
    }

};