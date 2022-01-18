const fs = require('fs');

function promesaLeerArchivo(path){
    const promesaLectura = new Promise (
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if(error){
                        reject('error lectura');
                    }
                    else{
                        resolve(contenido);
                    }
                }
            );
        }
    )
    return promesaLectura
}

function promesaEscribirArchivo(path, contenidoActual, nuevoContenido){
    const promesaEscritura = new Promise (
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoActual +
                nuevoContenido,
                'utf-8',
                (error) => {
                    if(error){
                        reject('error escritura');
                    }
                    else{
                        resolve(contenidoActual+nuevoContenido);
                    }
                }
            );

        }
    )
    return promesaEscritura
}

function ejercicio(path,nuevoContenido){
    promesaLeerArchivo(path)
        .then(
            (promesaContenido) => {
                console.log("Lectura:",promesaContenido)
                return promesaEscribirArchivo(path, promesaContenido, nuevoContenido)
            }
        )
        .then(
            (promesaContenido) =>{
                console.log("Escritura",promesaContenido);
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
        .finally()
}

ejercicio('./06-ejemplo.txt','Buenas Mañanas!')

