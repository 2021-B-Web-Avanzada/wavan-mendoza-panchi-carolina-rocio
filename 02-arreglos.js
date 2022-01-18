//02-arreglos.js
let arreglo =[6,7,8,9,10];

arreglo=1;
arreglo=true;
arreglo=undefined;
arreglo=null;
arreglo={};
arreglo=[true,1,1.1,"Adrian", 'Vicente', undefined, null, {}, [1,2]];
arreglo=[6,7,8,9,10];

//for of
for(let numero of arreglo){ //VALORES
    console.log('numero', numero);
}
//for in
//usarlo en arreglos y objetos
for(let indice in arreglo){ //INDICES
    arreglo[indice];
    console.log('indice', indice);
}
let objetoPrueba = {a: '1',b:'2',c:'3'};
for(let llave in objetoPrueba){ //INDICES
    console.log('llave', llave);
}

arreglo.push(11); //Anadir al final de un elemento
//[6,7,8,9,10,11]
arreglo.pop(); //Eliminar al final de un elemento
//[6,7,8,9,10]
arreglo.unshift(5); //Anadir al principio de un arreglo
//[5,6,7,8,9,10]
console.log(arreglo);

//agregar en el indice 0
arreglo.splice(0,0,4);
//splice(indice, numero de elementos eliminados, items a agregar en el indice indicado)
//[4,5,6,7,8,9,10]
console.log(arreglo);

const indiceNueve = arreglo.indexOf(9); //Encuentra el primer elemento y devuelve el indice
arreglo.splice(indiceNueve,2);
//[4,5,6,7,8];
console.log(arreglo);
