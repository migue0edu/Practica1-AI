let numberX = document.getElementById('cordX');
let numberY = document.getElementById('cordY');
let nuevoTerreno = document.getElementById('newTerrain');
let tipoTerreno = document.getElementById('tipoTerreno');


//----------Opciones e inicializacion de elementos-------------------
numberX.max = mapa.length - 1;
numberX.min = 0;
numberX.value = 0;

let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'];
let terrenos = ['Wall', 'Road'];

for (let i = 0; i < mapa[0].length; i++) {
    let option = document.createElement('option');
    option.text = chars[i];
    option.value = i;
    numberY.add(option);
}
for (let i = 0; i < terrenos.length; i++) {
    let option = document.createElement('option');
    option.text = terrenos[i];
    option.value = i;
    nuevoTerreno.add(option);
}

let instance = M.FormSelect.init(numberY, {});
instance = M.FormSelect.init(nuevoTerreno, {});

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.fixed-action-btn');
    let instances = M.FloatingActionButton.init(elems, {
        direction: 'left'
    });
});

//-------------------------Configuracion de estilos------------------
let h5s = document.querySelectorAll('h5');
for (let i = 0; i < h5s.length; i++) {
    h5s[i].style.marginTop = '5px';
}
tipoTerreno.style.fontWeight = 'bold';
document.querySelector('label').style.color = 'Black';