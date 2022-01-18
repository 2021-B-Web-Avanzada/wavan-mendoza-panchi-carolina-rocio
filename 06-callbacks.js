//06-callbacks.js
const fs = require('fs'); //fyle system
console.log('Primero');
//06-ejemplo.txt -> hola

fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (error, contenido) => {
        console.log('SEGUNDO');
    }
);
console.log('TERCERO');


//Ejercicio lectura por medio de callbacks de los archivo variables y callbacks
fs.readFile(
    './variables.js',
    'utf-8',
    (error, contenido) => {
        if(error){
        console.error('error leyendo contenido');
        }else{
        console.log(contenido);
        }
        fs.readFile(
            './06-callbacks.js',
            'utf-8',
            (error, contenido) => {
                if (error) {
                    console.error('error leyendo contenido');
                } else {
                    console.log(contenido);
                }
            }
        );
    }
);
console.log('TERCERO');

//Hacer una función que acepte como paramtro una variable
//con el path del archivo y el contenido o agregar al contenido
//del archivo. La funcion debe tomar estos dos parámetros y leer el archivo y añadir el texto al
//final del mismo


function escribirArchivo(path, contenidoNuevo){
    fs.readFile(
        './variables.js',
        'utf-8',
        (error, contenido) => {
            if(error){
                console.error('error leyendo contenido');
            }else{
                fs.writeFile(
                    path,
                    contenidoNuevo,
                    'utf-8',
                    (error) =>{
                    }
                );
            }
        }

    );
}
escribirArchivo(
    './06-ejemplo.txt',
        'Buenas tardes'
);