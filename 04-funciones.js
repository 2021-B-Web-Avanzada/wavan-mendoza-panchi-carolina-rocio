//04-funciones.js

function soloNumeros(a,b,c){
    return a-b+c; //valor a devolver
}
//JS PERMITE EL USO DE FUNCIONES SIN VALIDACIONES
//soloNumeros('V',TRUE,[1,2,3]);
// soloNumeros((a) =>a,a) =>a,a) =>a);
// soloNumeros(1,2,3,4,5,6,7,8,9);
// soloNumeros();

function soloLetras(a,b,c){ //undefined
    console.log(a,b,c);
}

//Funciones nombradas = named functions
function funcionNombrada(){
}

//Funciones anonimas igualar variable o enviar parametros a una funcion
const funcionSinNombre1 = function(){};
var funcionSinNombre2 = function(){};
let funcionSinNombre3 = function(){};
[].forEach(function(){})
//LLamar las funciones anonimas se lo realiza como llamar funciones con nombre
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

//Funciones anonimas = Fat arrow functions
const funcionFatArrow1 = () => {};
var funcionFatArrow2 = () => {};
let funcionFatArrow3 = () => {};
[].forEach(()=>{})
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();

const funcionFatArrow4 = () => {};
const funcionFatArrow5 = (x) => {
    return x+1;
};
const funcionFatArrow6 = (x) => x+1; //FAT ARROW FUNCTIONS
                                    //Una sola linea
                                    //Omito return
                                    //Omito llaves
const funcionFatArrow7 = x => x+1;  //SI SOLO TENEMOS UN PARAMETRO
                                    //Omito parentesis
const funcionFatArrow8 = (x,y,z) => x+y+z;

//... => Parametros infinitos que llegan en un arreglo
//      Solo se puede tener una de estas por funcion
function sumaNumeros(...otrosNumeros){ //Parametros infinitos [2,3,4,5,...]
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) => {
            total = total + valorActual;
        }
    );
    return total;
    //return otrosNumeros.reduce((a.v)=> a+v,0);
}
sumarNumeros(1,2,3,4,5,6,7,8,9,10,11,12,13)

