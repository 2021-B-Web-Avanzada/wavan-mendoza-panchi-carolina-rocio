//03-operadores.je

const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//FUNCIONES COMO PARAMETROS
//FIND
//enviamos una expresion → TRULY FALSY
//devuelve el primero que cumpla con la condicion

const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto){
            console.log('indiceActual',indiceActual);
            console.log('arregloCompleto',arregloCompleto);
            return valorActual.nombre === "Cristian"; //EXPRESION = = =
        }
    );
console.log('respuestaFind', respuestaFind); //Cristian //si no encuentra devuelve indefined

//enviamos una expresion → TRULY FALSY
//devuelve el primero que cumpla con la condicion

const respuestaIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaIndex', respuestaIndex); //indice: 6 si no encuentra devuelve -1

//FOREACH
const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto){
            console.log('valorAcutal', valorActual);
        }
    );
console.log('respuestaForEach', respuestaForEach); //undefined

//MAP (Modificar o MUTAR el arreglo y devuelve un nuevo arreglo)
//enviamos los datos del nuevo arreglo

const respuestaMap = arreglo
    .map(
        (valorActual, indiceActual, arregloCompleto) => {
            const nuevoElemento ={
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
            };
            return nuevoElemento;
        }
    );
console.log('respuestaMap', respuestaMap);
console.log('Arreglo', arreglo);

//FILTER
const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota >= 14;
        }
    );
console.log('respuestaFilter', respuestaFilter);
console.log('Arreglo', arreglo);

//SOME
//OR
//devuelve booleano

const respuestaSome = arreglo
    .some(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nota < 9;
        }
    );
console.log('respuestaSome', respuestaSome);

//every
//and
//devuelve booleano

const respuestaEvery = arreglo
    .every(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nota > 14;
        }
    );
console.log('respuestaEvery', respuestaEvery);

//REDUCE
//Acumulador

const respuestaReduce = arreglo
    .reduce(
        function (valorAcumulado, valorActual, indice, arreglo){
            return (valorAcumulado + valorActual.nota);
        },
        100 //Acumulador
    );
console.log('respuestaReduce', respuestaReduce); //100 - x = -46

