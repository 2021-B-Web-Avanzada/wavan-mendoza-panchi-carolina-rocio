//05-destructuracion.js

const adrian = {
    nombre: "Adrian"
};

const carolina = {
    nombre: "Carolina",
    apellido: "Eguez"
};

const adrianCarolina = { //Creando una nueva referencia
    ...carolina,        //1 El orden es importante para propiedades que se repiten
    ...adrian,          //2 El ultimo reemplazo a los anteriores
};

console.log('adrianCarolina', adrianCarolina);

//Destructuracion de arreglos
const arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];
const superArreglo = [
    ...arregloUno,
    ...arregloDos,
];
console.log('superArreglo',superArreglo);
//Para enviar varios parametros a una funcion

console.log(...superArreglo);
