//10-async-await.js
const promesaLeerArchivo = () => {
    return new Promise(
        (res,rej) => {
            res('CONTENIDO LEER ARCHIVO');
        }
    );
}
const promesaEscribirArchivo = () => {
    return new Promise(
        (res,rej) => {
            res('CONTENIDO ESCRIBIR ARCHIVO');
        }
    );
}

//ASYNC AWAIT
//1)Metodos de clase
//2)Funcion
//esto no es posible
//por que no esta en una funcion
//const respuesta = await promesaEscribirArchivo;

//Al momento de usar la palabra ASYNC, esa funcion se convierte
//en una promesa

const ejemplo1 = async function () {}
const ejemplo2 = async () => {}

async function ejercicio(){
    console.log('1');
    let nuevoContenido='';

    try{
        console.log('2');
        const contenidoArchivoActual = await procesaLeerArchivo();
        console.log(contenidoArchivoActual);
        console.log('3');
        await procesaLeerArchivo();
        console.log('4');
        nuevoContenido = await procesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');

    }catch(error){
        console.error(error);
    }
    console.log('6');
    console.log('7');
    return nuevoContenido;
}
ejercicio().then (
    (data) => {
        console.log('esta es la respuesta del async await', data);
        }
    ).catch() .finally();
